interface Technology {
  name: string
  icon: string
}

const technologies: Technology[] = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "◆" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "🌳" },
  { name: "Figma", icon: "🎯" },
  { name: "Vercel", icon: "▲" },
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
            <span className="mr-2">{tech.icon}</span>
            {tech.name}
          </div>
        ))}
      </div>
    </section>
  )
}
