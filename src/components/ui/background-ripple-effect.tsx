'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useMemo, useRef, useState } from 'react'

type Ripple = { id: number; row: number; col: number }

export const BackgroundRippleEffect = ({
  rows = 10,
  cols = 27,
  cellSize = 56,
}: {
  rows?: number
  cols?: number
  cellSize?: number
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const nextRippleId = useRef(0)
  const ref = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const responsiveCols = Math.max(cols, Math.ceil(containerWidth / cellSize))

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width)
    })
    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'fixed inset-0 h-full w-full',
        '[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)] [--cell-shadow-color:var(--color-neutral-500)]',
        'dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]',
      )}
    >
      <div className="relative h-auto w-auto overflow-hidden [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
        <div className="pointer-events-none absolute inset-0 z-2 h-full w-full overflow-hidden" />
        <DivGrid
          className="mask-radial-from-20% mask-radial-at-top opacity-600"
          rows={rows}
          cols={responsiveCols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          ripples={ripples}
          onRippleComplete={(id) => {
            setRipples((active) => active.filter((ripple) => ripple.id !== id))
          }}
          onCellClick={(row, col) => {
            const ripple = { id: nextRippleId.current++, row, col }
            setRipples((active) => [...active, ripple])
          }}
          interactive
        />
      </div>
    </div>
  )
}

type DivGridProps = {
  className?: string
  rows: number
  cols: number
  cellSize: number // in pixels
  borderColor: string
  fillColor: string
  ripples: Ripple[]
  onRippleComplete: (id: number) => void
  onCellClick?: (row: number, col: number) => void
  interactive?: boolean
}

type CellStyle = React.CSSProperties & {
  ['--delay']?: string
  ['--duration']?: string
  ['--ripple-color']?: string
}

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = '#3f3f46',
  fillColor = 'rgba(14,165,233,0.3)',
  ripples,
  onRippleComplete,
  onCellClick = () => {},
  interactive = true,
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols],
  )

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: 'auto',
  }

  return (
    <div className={cn('relative z-3', className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols)
        const colIdx = idx % cols

        return (
          <div
            key={idx}
            className={cn(
              'cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]',
              !interactive && 'pointer-events-none',
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
            }}
            onClick={
              interactive ? () => onCellClick(rowIdx, colIdx) : undefined
            }
          >
            {ripples.map((ripple) => {
              const distance = Math.hypot(
                ripple.row - rowIdx,
                ripple.col - colIdx,
              )
              const lastRow = ripple.row < (rows - 1) / 2 ? rows - 1 : 0
              const lastCol = ripple.col < (cols - 1) / 2 ? cols - 1 : 0
              const style: CellStyle = {
                '--delay': `${distance * 55}ms`,
                '--duration': `${200 + distance * 80}ms`,
                '--ripple-color': `oklch(0.75 0.18 ${(distance * 28) % 360})`,
              }

              return (
                <span
                  key={ripple.id}
                  aria-hidden="true"
                  className="animate-cell-ripple pointer-events-none absolute -inset-px border-[0.5px] border-transparent opacity-0 [animation-fill-mode:none]"
                  style={style}
                  onAnimationEnd={
                    rowIdx === lastRow && colIdx === lastCol
                      ? () => onRippleComplete(ripple.id)
                      : undefined
                  }
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
