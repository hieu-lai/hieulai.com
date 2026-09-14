import GithubIcon from '#/components/icons/github'
import LinkedInIcon from '#/components/icons/linkedin'
import { ModeToggle } from '#/components/mode-toggle'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '#/components/ui/tooltip'

export function Left() {
  return (
    <div className="pointer-events-none sticky top-0 z-10 flex h-dvh flex-1 shrink-0 flex-col justify-between py-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Hieu Lai</h1>
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
        <ModeToggle />
      </div>
      <div className="flex gap-4">
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
      </div>
    </div>
  )
}
