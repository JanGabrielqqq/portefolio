"use client"

import dynamic from "next/dynamic"
import type { ComponentType } from "react"

type Props = { slug: string }

const mdxMap: Record<string, ComponentType> = {
  "starting-a-blog-w-ai": dynamic(() => import("@/content/blog/starting-a-blog-w-ai.mdx"), { ssr: false }),
}

export function MdxContent({ slug }: Props) {
  const Component = mdxMap[slug]
  if (!Component) return null
  return <Component />
}
