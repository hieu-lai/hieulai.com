import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { renderServerComponent } from '@tanstack/react-start/rsc'
import { BackgroundRippleEffect } from '#/components/ui/background-ripple-effect'

import { Home } from './-components/home'

const getRscHome = createServerFn().handler(async () => {
  const RscHome = await renderServerComponent(<Home />)
  return { RscHome }
})

export const Route = createFileRoute('/')({
  loader: async () => {
    const { RscHome } = await getRscHome()
    return { RscHome }
  },
  component: RootComponent,
})

function RootComponent() {
  const { RscHome } = Route.useLoaderData()

  return (
    <>
      <BackgroundRippleEffect />
      {RscHome}
    </>
  )
}
