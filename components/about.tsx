import { personalInfo } from "@/config"

export default function About() {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">About</h2>
      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
        {personalInfo.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
