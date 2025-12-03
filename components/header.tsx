import Link from "next/link"

export default function Header() {
  return (
    <header className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link href="/" className="text-sm font-medium hover:text-muted-foreground transition-colors">
          Portfolio
        </Link>
      </div>
    </header>
  )
}
