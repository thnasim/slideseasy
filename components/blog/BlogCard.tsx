import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

interface Props {
  post: {
    _id: string
    title: string
    slug: { current: string }
    excerpt?: string
    mainImage?: any
    publishedAt?: string
    category?: string
  }
}

export default function BlogCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-foreground/20 hover:shadow-sm transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full img-placeholder flex items-center justify-center">
            <div className="text-center text-muted/50">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-1 opacity-60">
                <rect x="2" y="4" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <rect x="8" y="11" width="16" height="1.5" rx="0.75" fill="currentColor" opacity="0.5" />
                <rect x="8" y="15" width="11" height="1.5" rx="0.75" fill="currentColor" opacity="0.4" />
              </svg>
              <p className="text-[10px] font-sans">Post image</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {post.category && (
          <span className="inline-block px-2.5 py-1 bg-white border border-border text-[10px] font-sans font-medium text-muted rounded-full uppercase tracking-wide mb-3 w-fit">
            {post.category}
          </span>
        )}
        <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-2 group-hover:text-foreground/80 transition-colors flex-1">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="font-sans text-muted text-sm leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
          {post.publishedAt && (
            <p className="font-sans text-muted text-xs">{formatDate(post.publishedAt)}</p>
          )}
          <span className="text-xs font-sans text-muted group-hover:text-foreground transition-colors">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  )
}
