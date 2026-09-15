'use client'

import GithubIcon from '#/components/icons/github'
import LinkedInIcon from '#/components/icons/linkedin'
import { ModeToggle } from '#/components/mode-toggle'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '#/components/ui/tooltip'
import { cn } from 'cn'
import { useEffect, useState } from 'react'

export function LeftMobile() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const updateScroll = () => setHasScrolled(window.scrollY > 0)

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <>
      <div
        className={cn(
          'pointer-events-none sticky top-0 z-50 flex w-full flex-1 shrink-0 flex-row items-center justify-between border-b-2 px-4 py-3 md:hidden',
          hasScrolled
            ? 'bg-background/50 border-border/60 backdrop-blur-lg'
            : 'border-transparent bg-transparent',
        )}
      >
        <h1 className="text-2xl font-bold">Hieu Lai</h1>
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger
              render={
                <a
                  className="pointer-events-auto"
                  href="https://github.com/hieu-lai"
                  target="_blank"
                >
                  <GithubIcon />
                </a>
              }
            />
            <TooltipContent sideOffset={10}>Github</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <a
                  className="pointer-events-auto"
                  href="https://linkedin.com/in/hieulai/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              }
            />
            <TooltipContent sideOffset={10}>LinkedIn</TooltipContent>
          </Tooltip>
          <ModeToggle className="ml-2 flex" iconOnly />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 md:hidden">
        <p className="text-lg font-medium">
          Full-Stack Developer{' '}
          <span className="text-muted-foreground text-sm font-normal">
            (Frontend Focused)
          </span>
        </p>
        <p className="text-muted-foreground max-w-sm">
          I love building accessible, pixel-perfect web experiences and
          simplifying complex problems into thoughtful solutions.
        </p>
      </div>
    </>
  )
}
