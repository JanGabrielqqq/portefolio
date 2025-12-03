import { personalInfo } from "@/config"
import { MapPin, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-8 sm:pt-12">
      <div className="flex flex-col items-start gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{personalInfo.name}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mt-2">{personalInfo.role}</p>
        </div>

        <div className="space-y-2 my-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <p>
            <MapPin className="inline-block w-4 h-4 mr-2 align-text-top" />
            {personalInfo.location}
          </p>
          <p>
            <Phone className="inline-block w-4 h-4 mr-2 align-text-top" />
            {personalInfo.phoneNumber}
          </p>
        </div>
      </div>
    </section>
  )
}
