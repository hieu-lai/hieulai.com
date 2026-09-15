import { About } from './about'
import { Experience } from './experience'
import { Footer } from './footer'
import { Projects } from './projects'

export function Right() {
  return (
    <div className="pointer-events-none relative z-10 flex-1 px-4 md:min-w-md md:pr-4 md:pl-0 [&_a]:pointer-events-auto">
      <div className="space-y-32 py-20">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
