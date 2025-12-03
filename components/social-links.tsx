import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { personalInfo } from "@/config"

const socialLinks = [
  {
    name: "LinkedIn",
    handle: personalInfo.social.handles.linkedin,
    url: personalInfo.social.linkedin,
    Icon: LinkedinIcon,
  },
  {
    name: "GitHub",
    handle: personalInfo.social.handles.github,
    url: personalInfo.social.github,
    Icon: GithubIcon,
  },
  {
    name: "Email",
    handle: personalInfo.email,
    url: personalInfo.social.email,
    Icon: Mail,
  },
]

export default function SocialLinks() {
  return (
    <section className="pb-8 pt-4 sm:pt-5 sm:pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        {socialLinks.map((link) => (
          link.name === "Email" ? (
            <a
              key={link.name}
              href={link.url}
              className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <link.Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <div>
                  <p className="font-medium text-foreground">{link.name}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {link.handle}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          ) : (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <link.Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <div>
                  <p className="font-medium text-foreground">{link.name}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {link.handle}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          )
        ))}
      </div>
    </section>
  )
}
