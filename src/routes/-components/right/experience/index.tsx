import { buttonVariants } from '#/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'

import { Item } from './item'

const EXPEREINCE = [
  {
    period: '2022 - 2026',
    title: 'Full-Stack Developer',
    company: 'Stashh Labs',
    description:
      'Designed and implemented full-stack features for Stashh’s NFT marketplace and Lurky’s crypto analytics platform using React, TypeScript, and Node.js. Work included wallet integrations, creator tools, interactive dashboards, real-time chat, AI conversation interfaces, and content recommendation APIs.',
    tech: [
      'TypeScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'Socket.IO',
    ],
  },
  {
    period: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'PlaySide Studios',
    description:
      'Developed web and mobile features for Keep It Cleaner using React, Next.js and React Native, including subscription payments, gift-card checkout, content management tools, goal tracking, referrals and onboarding. Improved workout video playback and app theming.',
    tech: ['React', 'React Native', 'Next.js', 'JavaScript', 'TypeScript'],
  },
  {
    period: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'EQUAL Network',
    description:
      'Built account, asset and transaction workflows for a production crypto wallet Chrome extension, with clear loading, error, confirmation and recovery states so users could follow transactions from start to finish.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
]

export function Experience() {
  return (
    <div className="space-y-10">
      {EXPEREINCE.map((exp, index) => (
        <Item key={index} {...exp} />
      ))}
      <a
        href="https://google.com"
        target="_blank"
        className={buttonVariants({ variant: 'link', className: 'px-0!' })}
      >
        View full resume
        <ExternalLinkIcon className="size-4" />
      </a>
    </div>
  )
}
