import { About } from './about'
import { Experience } from './experience'
import { Footer } from './footer'
import { Projects } from './projects'

export function Right() {
  return (
    <div className="flex-1">
      <div className="space-y-32 py-20">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
