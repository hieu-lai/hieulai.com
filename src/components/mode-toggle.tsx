'use client'

import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { cn } from 'cn'
import { Moon, Sun } from 'lucide-react'

type Props = {
  className?: string
  iconOnly?: boolean
}

export function ModeToggle({ className, iconOnly = false }: Props) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      aria-label="Toggle theme"
      className={cn('pointer-events-auto', className)}
      size={iconOnly ? 'icon' : 'default'}
      variant="secondary"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className="relative inline-flex shrink-0" aria-hidden="true">
        <Sun className="scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute inset-0 scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
      </span>
      {!iconOnly && (theme === 'dark' ? 'Dark mode' : 'Light mode')}
    </Button>
  )
}
