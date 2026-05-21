import Link from 'next/link'

const FOOTER_LINKS = {
  Products: [
    { label: 'Templates', href: '/templates' },
    { label: 'PowerPoint', href: '/templates?tool=PowerPoint' },
    { label: 'Google Slides', href: '/templates?tool=Google+Slides' },
    { label: 'Keynote', href: '/templates?tool=Keynote' },
    { label: 'Canva', href: '/templates?tool=Canva' },
    { label: 'Figma', href: '/templates?tool=Figma' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: 'mailto:hello@slideseasy.com' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="10" rx="1.5" fill="white" fillOpacity="0.9" />
                  <rect x="2" y="14" width="6" height="2" rx="1" fill="white" fillOpacity="0.6" />
                  <rect x="10" y="14" width="6" height="2" rx="1" fill="white" fillOpacity="0.6" />
                </svg>
              </div>
              <span className="font-display font-semibold text-foreground text-[15px] tracking-tight">
                SlidesEasy
              </span>
            </Link>
            <p className="text-muted font-sans text-sm leading-relaxed max-w-xs">
              Custom presentation templates designed around your brand guidelines. Delivered in PowerPoint, Google Slides, Keynote, Canva & Figma.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://twitter.com/slideseasy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-foreground/30 hover:bg-foreground/5 transition-all"
                aria-label="Twitter"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/slideseasy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-foreground/30 hover:bg-foreground/5 transition-all"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold text-foreground text-sm mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-foreground text-sm font-sans transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs font-sans">
            © {new Date().getFullYear()} SlidesEasy. All rights reserved.
          </p>
          <p className="text-muted text-xs font-sans">
            Designed for brands that take presentations seriously.
          </p>
        </div>
      </div>
    </footer>
  )
}
