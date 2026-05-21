import { client } from '@/lib/sanity.client'
import { featuredTemplatesQuery, latestPostsQuery } from '@/lib/sanity.queries'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import ToolsMarquee from '@/components/home/ToolsMarquee'
import FeaturedTemplates from '@/components/home/FeaturedTemplates'
import ChoosePath from '@/components/home/ChoosePath'
import WhySlidesEasy from '@/components/home/WhySlidesEasy'
import Testimonials from '@/components/home/Testimonials'
import HowItWorks from '@/components/home/HowItWorks'
import BlogPreview from '@/components/home/BlogPreview'
import CTABanner from '@/components/home/CTABanner'

export default async function HomePage() {
  const [templates, posts] = await Promise.all([
    client.fetch(featuredTemplatesQuery),
    client.fetch(latestPostsQuery),
  ])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ToolsMarquee />
        <FeaturedTemplates templates={templates} />
        <ChoosePath />
        <WhySlidesEasy />
        <Testimonials />
        <HowItWorks />
        <BlogPreview posts={posts} />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
