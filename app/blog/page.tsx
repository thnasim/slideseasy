import type { Metadata } from 'next'
import { client } from '@/lib/sanity.client'
import { allPostsQuery } from '@/lib/sanity.queries'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogCard from '@/components/blog/BlogCard'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, tips and guides on presentation design, branding, and slide strategy from the SlidesEasy team.',
}

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery)

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        {/* Page header */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-b border-border">
          <p className="text-sm font-medium text-muted uppercase tracking-widest mb-4 font-display">
            The Blog
          </p>
          <h1 className="font-display text-section font-bold text-foreground mb-4">
            Presentation design, decoded
          </h1>
          <p className="text-muted font-sans text-lg max-w-lg">
            Tips, guides, and insights on slide design, brand consistency, and making your presentations work harder.
          </p>
        </section>

        {/* Posts grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted font-sans text-lg">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
