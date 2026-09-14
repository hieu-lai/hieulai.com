import { Item } from './item'

const PROJECTS = [
  {
    imageKey: 'waltz.png',
    title: 'AI Chat Application',
    link: 'https://waltz-five.vercel.app/',
    description:
      'Built with TypeScript, React, and Convex, featuring streamed responses, generation recovery, persistent drafts, authenticated conversation history, feedback, and chat organization.',
    tech: [],
  },
  {
    imageKey: 'court-side.png',
    title: 'Club and Court Booking Platform',
    link: 'https://ai-vibez.vercel.app/',
    description:
      'Full-stack platform enabling players to reserve and pay for courts while clubs manage schedules, permissions, recurring events, booking conflicts, and payment recovery.',
    tech: [],
  },
]

export function Projects() {
  return (
    <div className="space-y-10">
      {PROJECTS.map((proj, index) => (
        <Item key={index} {...proj} />
      ))}
    </div>
  )
}
