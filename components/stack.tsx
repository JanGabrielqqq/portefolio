import type { ComponentType } from "react"
import {
  Atom,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Palette,
  Server,
  Triangle,
  Wind,
} from "lucide-react"

interface Technology {
  name: string
  Icon: ComponentType<{ className?: string }>
}

const technologies: Technology[] = [
  { name: "React", Icon: Atom },
  { name: "TypeScript", Icon: Code2 },
  { name: "Next.js", Icon: Triangle },
  { name: "Tailwind CSS", Icon: Wind },
  { name: "Node.js", Icon: Server },
  { name: "PostgreSQL", Icon: Database },
  { name: "GraphQL", Icon: Braces },
  { name: "Docker", Icon: Container },
  { name: "AWS", Icon: Cloud },
  { name: "Git", Icon: GitBranch },
  { name: "Figma", Icon: Palette },
  { name: "Vercel", Icon: Triangle },
]

export default function Stack() {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="px-4 py-2 bg-muted/30 hover:bg-muted/50 rounded-full text-sm font-medium text-foreground transition-colors"
          >
            <tech.Icon className="inline-block w-4 h-4 mr-2 align-text-top" />
            {tech.name}
          </div>
        ))}
      </div>
    </section>
  )
}
