import { Award, Calendar, UserRound, ArrowRight } from "lucide-react"
import { personalInfo } from "@/config"

export default function Certifications() {
  const certs = personalInfo.certifications
  if (!certs?.length) return null

  return (
    <section className="py-12 sm:py-16">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-5 h-5 text-muted-foreground" />
        <h2 className="text-2xl sm:text-3xl font-bold">Certifications</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {certs.map((cert) => {
          const card = (
            <div className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors group">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-xs font-semibold text-foreground">
                  {(cert.logo || cert.title).slice(0, 3).toUpperCase()}
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{cert.title}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{cert.date}</span>
                    <span className="inline-flex items-center gap-1"><UserRound className="w-4 h-4" />{cert.instructor}</span>
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          )

          return cert.link ? (
            <a
              key={cert.title + cert.date}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {card}
            </a>
          ) : (
            <div key={cert.title + cert.date}>{card}</div>
          )
        })}
      </div>
    </section>
  )
}
