const TOOLS = [
  { name: 'PowerPoint', icon: '🟥' },
  { name: 'Google Slides', icon: '🟨' },
  { name: 'Keynote', icon: '🟦' },
  { name: 'Canva', icon: '🟪' },
  { name: 'Figma', icon: '⬛' },
]

// Duplicate for infinite scroll
const TOOLS_DOUBLED = [...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS]

export default function ToolsMarquee() {
  return (
    <section className="border-y border-border overflow-hidden py-5 bg-white">
      <p className="text-center text-xs font-sans text-muted uppercase tracking-widest mb-4">
        We design in
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div className="flex items-center gap-0 overflow-hidden">
          <div className="flex items-center gap-12 marquee-track">
            {TOOLS_DOUBLED.map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 flex-shrink-0 px-6 py-2 group"
              >
                <span className="w-6 h-6 flex items-center justify-center rounded text-sm">
                  {tool.icon}
                </span>
                <span className="font-display font-semibold text-foreground text-sm whitespace-nowrap group-hover:text-foreground/70 transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
