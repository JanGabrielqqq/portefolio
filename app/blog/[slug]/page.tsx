"use client"

import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blogs"
import { MdxContent } from "@/components/mdx-content"

interface Props {
  params: { slug: string }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.id === params.slug)
  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-16 space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
          <h1 className="text-4xl font-bold">{post.title}</h1>
        </div>
        <article className="space-y-4 text-base text-foreground">
          <MdxContent slug={post.id} />
        </article>
      </main>
    </div>
  )
}
