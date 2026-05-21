# SlidesEasy — Next.js Website

Custom presentation template design service. Built with Next.js 14, Tailwind CSS, and Sanity CMS. Ready to deploy on Vercel.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: DM Sans (headings) + Geist (body)
- **CMS**: Sanity v3 (embedded studio at `/studio`)
- **Deployment**: Vercel

---

## Project Structure

```
slideseasy/
├── app/
│   ├── layout.tsx          ← Root layout, fonts, metadata
│   ├── page.tsx            ← Homepage
│   ├── globals.css         ← Design tokens, animations
│   ├── studio/             ← Sanity Studio (embedded)
│   ├── templates/          ← Templates listing + detail
│   └── blog/               ← Blog listing + detail
├── components/
│   ├── layout/             ← Navbar, Footer
│   ├── home/               ← All homepage sections
│   ├── templates/          ← TemplateCard
│   └── blog/               ← BlogCard
├── lib/
│   ├── sanity.client.ts    ← Sanity client config
│   ├── sanity.queries.ts   ← All GROQ queries
│   └── sanity.image.ts     ← Image URL helper
├── sanity/
│   └── schemas/            ← Template + Post schemas
├── sanity.config.ts        ← Sanity studio config
├── next.config.ts
├── tailwind.config.ts
└── .env.local.example
```

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Sanity

1. Go to [sanity.io](https://sanity.io) and create a new project
2. Name it `slideseasy`, dataset: `production`
3. Copy your **Project ID** from the dashboard

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Add CORS origin for local dev

In your Sanity project dashboard → **API** → **CORS origins**:
- Add `http://localhost:3000`

### 5. Run the dev server

```bash
npm run dev
```

Visit:
- **Website**: http://localhost:3000
- **Sanity Studio**: http://localhost:3000/studio

---

## Sanity CMS — Adding Content

### Adding Templates

1. Go to `/studio`
2. Click **Templates** → **+ Create**
3. Fill in:
   - **Title**: Template name (e.g., "Executive Pitch Deck")
   - **Slug**: Auto-generated from title
   - **Design Tool**: PowerPoint / Google Slides / Keynote / Canva / Figma
   - **Price**: Numeric price in USD
   - **Preview Image**: Upload your template screenshot
   - **Featured on homepage?**: Toggle on to show in the Featured section
   - **Preview / Purchase URL**: Where to send buyers
   - **Tags**: e.g., `Business`, `Startup`, `Marketing`
   - **What's included**: Feature bullet list

### Adding Blog Posts

1. Go to `/studio`
2. Click **Blog Posts** → **+ Create**
3. Fill in:
   - **Title**, **Slug**, **Excerpt**
   - **Cover Image**: Upload post hero image
   - **Published At**: Set publish date
   - **Category**: Design Tips / Tutorial / AI Design / Brand Strategy / Case Study
   - **Body**: Rich text editor — add text blocks and images

---

## Adding Images/Videos

Replace every placeholder with real content by searching for:

```
img-placeholder
```

In components, each placeholder has a comment like:
```jsx
{/* Replace with <Image src="YOUR_IMAGE_URL" ... /> */}
```

For videos, replace with:
```jsx
<video autoPlay muted loop playsInline className="w-full h-full object-cover">
  <source src="YOUR_VIDEO_URL" type="video/mp4" />
</video>
```

---

## Deploying to Vercel

### 1. Push to GitHub

```bash
git init && git add . && git commit -m "Initial commit"
gh repo create slideseasy --public --push
```

### 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`

### 3. Add production CORS in Sanity

Go to Sanity dashboard → **API** → **CORS origins**:
- Add your Vercel URL (e.g., `https://slideseasy.vercel.app`)

### 4. Deploy

Vercel will auto-build and deploy. Future pushes to `main` auto-deploy.

---

## Customisation

### Colors (globals.css)
```css
:root {
  --bg: #F8F8F6;       /* Page background */
  --fg: #0D0D0B;       /* Text color */
  --muted: #6B6B68;    /* Secondary text */
  --border: #E5E5E3;   /* Borders */
  --card: #FFFFFF;     /* Card backgrounds */
}
```

### Fonts (layout.tsx)
- **Heading font**: Change `DM_Sans` to any Google Font
- **Body font**: Change `GeistSans` to any preferred font

### Navigation links (Navbar.tsx)
Edit the `NAV_LINKS` array to add/remove nav items.

### Testimonials (Testimonials.tsx)
Replace the `TESTIMONIALS` array with real customer quotes.

### Contact email
Search and replace `hello@slideseasy.com` with your actual email.

---

## Notes

- The Sanity Studio is accessible at `/studio` — keep this route secure or add authentication
- All placeholder images use a shimmer animation — replace with real images as you build
- The marquee in `ToolsMarquee.tsx` loops automatically; it pauses on hover
