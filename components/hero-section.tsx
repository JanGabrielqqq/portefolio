export default function HeroSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="flex flex-col items-start gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Alex Chen</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mt-2">Full Stack Designer & Developer</p>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <p>
            <span className="inline-block w-6">📍</span>
            San Francisco, CA
          </p>
          <p>
            <span className="inline-block w-6">✉️</span>
            hello@alexchen.com
          </p>
          <p>
            <span className="inline-block w-6">🔗</span>
            alexchen.com
          </p>
          <p>
            <span className="inline-block w-6">💬</span>
            he/him
          </p>
        </div>
      </div>
    </section>
  )
}
