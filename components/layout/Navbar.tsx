'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Templates', href: '/templates' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-sans text-muted hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:hello@slideseasy.com"
            className="px-5 py-2.5 bg-foreground text-white text-sm font-display font-medium rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-sans text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href="mailto:hello@slideseasy.com"
              className="block w-full py-3 bg-foreground text-white text-sm font-display font-medium rounded-lg text-center hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
