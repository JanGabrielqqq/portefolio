"use client"

import dynamic from "next/dynamic"
import type { ComponentType } from "react"

type Props = { slug: string }

const mdxMap: Record<string, ComponentType> = {
  "hello-world": dynamic(() => import("@/content/blog/hello-world.mdx"), { ssr: false }),
}

export function MdxContent({ slug }: Props) {
  const Component = mdxMap[slug]
  if (!Component) return null
  return <Component />
}
