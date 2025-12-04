"use client"

import { personalInfo } from "@/config"
import { Mail, MapPin, Phone, Copy } from "lucide-react"
import Logo from "./logo"

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.location)}`

function copyPhone() {
  const raw = personalInfo.phoneNumber.replace(/[\s()]/g, "")
  navigator.clipboard?.writeText(raw)
}

export default function HeroSection() {
  return (
    <section className="py-4 sm:py-6">
      <div className="flex items-center flex-col justify-center sm:justify-start gap-3 sm:flex-row">
        <Logo />
        <div className="flex flex-col items-start gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{personalInfo.name}</h1>
            <p className="text-lg sm:text-xl text-muted-foreground mt-2">{personalInfo.role}</p>
          </div>

          <div className="space-y-2 my-2 flex flex-col text-sm sm:text-base leading-relaxed text-muted-foreground">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </a>

            <button
              type="button"
              onClick={copyPhone}
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              aria-label="Copy phone number"
            >
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phoneNumber}</span>
              <Copy className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  )
}
