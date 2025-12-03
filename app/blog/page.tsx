import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/data/blogs"

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-muted-foreground mb-8">Articles and insights about design, development, and technology.</p>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <div>
                <h2 className="text-xl font-semibold text-foreground">{post.title}</h2>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
