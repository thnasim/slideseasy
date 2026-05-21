import { groq } from 'next-sanity'

// ─── Templates ──────────────────────────────────────────────
export const featuredTemplatesQuery = groq`
  *[_type == "template" && featured == true] | order(_createdAt desc)[0...6] {
    _id,
    title,
    slug,
    description,
    toolCategory,
    price,
    image,
    tags
  }
`

export const allTemplatesQuery = groq`
  *[_type == "template"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    toolCategory,
    price,
    image,
    tags
  }
`

export const templateBySlugQuery = groq`
  *[_type == "template" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    toolCategory,
    price,
    image,
    tags,
    previewUrl,
    features
  }
`

// ─── Blog Posts ─────────────────────────────────────────────
export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category
  }
`

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category,
    body
  }
`
