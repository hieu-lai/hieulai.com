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
    <>
      <div className="bg-background/50 border-border/60 pointer-events-none sticky top-0 z-50 flex w-full flex-1 shrink-0 flex-row items-center justify-between border-b-2 px-4 py-3 backdrop-blur-lg md:z-10 md:h-dvh md:flex-col md:items-start md:border-b-0 md:bg-transparent md:py-20 md:pr-4 md:backdrop-blur-none">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold md:text-4xl">Hieu Lai</h1>
          <p className="hidden text-lg font-medium md:block">
            Full-Stack Developer{' '}
            <span className="text-muted-foreground text-sm font-normal">
              (Frontend Focused)
            </span>
          </p>
          <p className="text-muted-foreground hidden max-w-sm md:block">
            I love building accessible, pixel-perfect web experiences and
            simplifying complex problems into thoughtful solutions.
          </p>
          <ModeToggle className="hidden w-fit md:flex" />
        </div>
        <div className="flex items-center gap-2 md:gap-4">
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
          <ModeToggle className="ml-2 flex md:hidden" iconOnly />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 px-4 md:hidden">
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
