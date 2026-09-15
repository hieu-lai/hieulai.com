import { Link } from '@tanstack/react-router'

import { buttonVariants } from './ui/button'
import { BackgroundRippleEffect } from './ui/background-ripple-effect'

export function NotFound() {
  return (
    <div className="relative isolate flex min-h-dvh w-full flex-col items-center justify-center gap-8 overflow-hidden px-6 py-12">
      <BackgroundRippleEffect className="absolute overflow-hidden" />
      <div className="pointer-events-none relative z-10 text-9xl font-semibold">
        404
      </div>
      <div className="pointer-events-none relative z-10 flex max-w-sm flex-col gap-1 text-center">
        <div className="text-lg font-medium">Page not found</div>
        <div className="text-muted-foreground">
          Nothing here. Much like my social life.
        </div>
      </div>
      <Link
        to="/"
        className={buttonVariants({ size: 'lg', className: 'relative z-10' })}
      >
        Take me somewhere less sad
      </Link>
    </div>
  )
}
