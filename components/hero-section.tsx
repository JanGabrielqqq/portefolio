import { personalInfo } from "@/config"

export default function HeroSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="flex flex-col items-start gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{personalInfo.name}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mt-2">{personalInfo.role}</p>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <p>
            <span className="inline-block w-6">📍</span>
            {personalInfo.location}
          </p>
          <p>
            <span className="inline-block w-6">✉️</span>
            {personalInfo.email}
          </p>
          <p>
            <span className="inline-block w-6">🔗</span>
            {personalInfo.website.replace(/https?:\/\//, "")}
          </p>
          <p>
            <span className="inline-block w-6">💬</span>
            {personalInfo.pronouns}
          </p>
        </div>
      </div>
    </section>
  )
}
