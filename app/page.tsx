import HeroSection from "@/components/hero-section"
import SocialLinks from "@/components/social-links"
import About from "@/components/about"
import Stack from "@/components/stack"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container pt-18 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <HeroSection />
        <SocialLinks />
        <About />
        <Stack />
        {/* <Blog /> */}
      </main>
      <Footer />
    </div>
  )
}
