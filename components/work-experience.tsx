import { BriefcaseBusiness, Clock3, Globe2, MapPin } from "lucide-react"
import { personalInfo } from "@/config"

type Experience = (typeof personalInfo.experience)[number]

const iconClasses = "w-4 h-4 text-muted-foreground"

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="p-4 sm:p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BriefcaseBusiness className={iconClasses} />
              {exp.website ? (
                <a href={exp.website} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  <span className="font-semibold text-foreground">{exp.company}</span>
                </a>
              ) : (
                <span className="font-semibold text-foreground">{exp.company}</span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Clock3 className={iconClasses} />{exp.duration}</span>
              <span className="inline-flex items-center gap-1"><MapPin className={iconClasses} />{exp.location}</span>
              {exp.website ? (
                <span className="inline-flex items-center gap-1"><Globe2 className={iconClasses} />{new URL(exp.website).hostname}</span>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {exp.positions.map((role) => (
          <div key={role.title + role.period} className="border-t border-border/60 p-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="font-semibold text-foreground">{role.title}</div>
              <div className="text-xs text-muted-foreground">{role.period}</div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{role.summary}</p>
            {role.highlights?.length ? (
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {role.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WorkExperience() {
  const experiences = personalInfo.experience
  return (
    <section className="py-12 sm:py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Work Experience</h2>
      </div>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company + exp.duration} exp={exp} />
        ))}
      </div>
    </section>
  )
}
