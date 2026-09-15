import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { NotFound } from '#/components/not-found'
import { ThemeProvider } from '#/components/theme-provider'
import { TooltipProvider } from '#/components/ui/tooltip'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Hieu Lai',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="theme">
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
