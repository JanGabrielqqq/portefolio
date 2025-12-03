"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if dark mode is already applied
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home link */}
          <Link href="/" className="font-semibold text-foreground hover:text-accent transition-colors">
            Home
          </Link>

          {/* Nav links and theme switcher */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-accent transition-colors text-sm">
              Portfolio
            </Link>
            <Link href="/blog" className="text-foreground hover:text-accent transition-colors text-sm">
              Blog
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
