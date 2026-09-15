import { Badge } from '#/components/ui/badge'
import { ExternalLinkIcon } from 'lucide-react'

type Props = {
  imageKey: string
  title: string
  link: string
  description: string
  tech: Array<string>
}

export function Item({ description, tech, title, imageKey, link }: Props) {
  return (
    <a className="flex gap-10" href={link} target="_blank">
      <img
        src={`/images/${imageKey}`}
        alt={`${title} preview`}
        className="aspect-video w-24 self-start rounded-lg border md:w-32"
      />
      <div className="-mt-0.75 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-medium">{title}</h1>
          <ExternalLinkIcon className="size-4" />
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
    </a>
  )
}
