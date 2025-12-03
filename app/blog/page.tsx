export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-muted-foreground mb-8">Articles and insights about design, development, and technology.</p>

        <div className="space-y-8">
          {/* Blog posts placeholder */}
          <article className="pb-8 border-b border-border">
            <h2 className="text-2xl font-semibold mb-2">Blog Post Title</h2>
            <p className="text-muted-foreground text-sm mb-4">Published on [Date]</p>
            <p className="text-foreground">Add your blog posts here</p>
          </article>
          <article className="pb-8 border-b border-border">
            <h2 className="text-2xl font-semibold mb-2">Another Blog Post</h2>
            <p className="text-muted-foreground text-sm mb-4">Published on [Date]</p>
            <p className="text-foreground">Add your blog posts here</p>
          </article>
        </div>
      </main>
    </div>
  )
}
