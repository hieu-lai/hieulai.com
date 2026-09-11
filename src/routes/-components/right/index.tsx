import { About } from './about'
import { Experience } from './experience'

export function Right() {
  return (
    <div className="flex-1">
      <div className="space-y-32 py-20">
        <About />
        <Experience />
      </div>
    </div>
  )
}
