import Link from "next/link"

interface BlogPost {
  title: string
  description: string
  date: string
  slug: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable React Applications",
    description: "A deep dive into patterns and practices for building large-scale React applications with TypeScript.",
    date: "Dec 1, 2024",
    slug: "scalable-react",
    category: "React",
  },
  {
    title: "Design Systems That Scale",
    description: "Lessons learned building and maintaining design systems across multiple products and teams.",
    date: "Nov 15, 2024",
    slug: "design-systems",
    category: "Design",
  },
  {
    title: "The Future of Web Performance",
    description: "Exploring emerging technologies and best practices for building performant web applications in 2025.",
    date: "Nov 1, 2024",
    slug: "web-performance",
    category: "Performance",
  },
]

export default function Blog() {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Latest Articles</h2>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="pb-6 border-b border-border last:border-b-0">
            <Link href={`/blog/${post.slug}`} className="group">
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap flex-shrink-0">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">{post.description}</p>
                <div className="text-xs font-medium text-primary pt-1">{post.category}</div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
