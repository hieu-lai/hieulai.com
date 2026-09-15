import { Badge } from '#/components/ui/badge'

type Props = {
  period: string
  title: string
  description: string
  tech: Array<string>
  company: string
}

export function Item({ description, period, tech, title, company }: Props) {
  return (
    <div className="flex gap-10">
      <p className="text-muted-foreground w-24 shrink-0 text-sm md:w-32">
        {period}
      </p>
      <div className="-mt-0.75 flex flex-col gap-2">
        <h1 className="text-lg font-medium">
          {title} • {company}
        </h1>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
