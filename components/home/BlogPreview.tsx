import Link from 'next/link'
import BlogCard from '@/components/blog/BlogCard'

interface Props {
  posts: any[]
}

export default function BlogPreview({ posts }: Props) {
  const hasPosts = posts && posts.length > 0

  return (
    <section className="bg-white border-y border-border py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-sm font-display font-medium text-muted uppercase tracking-widest mb-3">
              From the blog
            </p>
            <h2 className="font-display font-bold text-section text-foreground">
              Presentation design, decoded
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-sans text-muted hover:text-foreground transition-colors group flex-shrink-0"
          >
            All posts
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Grid */}
        {hasPosts ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLACEHOLDER_POSTS.map((post, i) => (
              <PlaceholderBlogCard key={i} {...post} />
            ))}
          </div>
        )}

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-sans text-muted hover:text-foreground transition-colors"
          >
            Read all posts →
          </Link>
        </div>
      </div>
    </section>
  )
}

const PLACEHOLDER_POSTS = [
  {
    category: 'Design Tips',
    title: 'Why your presentation templates are breaking your brand',
    excerpt: 'Most teams use presentation templates that weren\'t built for their brand. Here\'s what that costs you.',
    date: 'May 2026',
  },
  {
    category: 'Tutorial',
    title: 'How to set up master slides in PowerPoint properly',
    excerpt: 'Master slides are the backbone of any good template. Here\'s how to set them up the right way.',
    date: 'April 2026',
  },
  {
    category: 'AI Design',
    title: 'Using AI to generate on-brand slides — a practical guide',
    excerpt: 'AI can generate slides fast. Here\'s how to make sure they look like your brand, every time.',
    date: 'March 2026',
  },
]

function PlaceholderBlogCard({
  category,
  title,
  excerpt,
  date,
}: {
  category: string
  title: string
  excerpt: string
  date: string
}) {
  return (
    <div className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-foreground/20 hover:shadow-sm transition-all duration-300">
      {/* Image placeholder */}
      <div className="aspect-[16/9] img-placeholder border-b border-border flex items-center justify-center">
        <div className="text-center text-muted/50">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-1 opacity-60">
            <rect x="2" y="4" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <rect x="8" y="11" width="16" height="1.5" rx="0.75" fill="currentColor" opacity="0.5" />
            <rect x="8" y="15" width="11" height="1.5" rx="0.75" fill="currentColor" opacity="0.4" />
          </svg>
          <p className="text-[10px] font-sans">Post image</p>
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block px-2.5 py-1 bg-white border border-border text-[10px] font-sans font-medium text-muted rounded-full uppercase tracking-wide mb-3">
          {category}
        </span>
        <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-2 group-hover:text-foreground/80 transition-colors">
          {title}
        </h3>
        <p className="font-sans text-muted text-sm leading-relaxed mb-4">{excerpt}</p>
        <p className="font-sans text-muted text-xs">{date}</p>
      </div>
    </div>
  )
}
