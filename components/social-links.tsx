import Link from "next/link"

interface SocialLink {
  name: string
  handle: string
  url: string
  icon: string
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    handle: "alexchen",
    url: "https://linkedin.com",
    icon: "💼",
  },
  {
    name: "GitHub",
    handle: "alexchen",
    url: "https://github.com",
    icon: "🐙",
  },
  {
    name: "Twitter",
    handle: "@alexchen",
    url: "https://twitter.com",
    icon: "𝕏",
  },
  {
    name: "Email",
    handle: "hello@alexchen.com",
    url: "mailto:hello@alexchen.com",
    icon: "✉️",
  },
]

export default function SocialLinks() {
  return (
    <section className="py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{link.icon}</span>
              <div>
                <p className="font-medium text-foreground">{link.name}</p>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.handle}
                </p>
              </div>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">→</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
