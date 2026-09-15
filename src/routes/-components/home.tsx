import { Left } from './left'
import { Right } from './right'

export function Home() {
  return (
    <div>
      <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-start md:flex-row">
        <Left />
        <Right />
      </div>
    </div>
  )
}
