const links = [
  {
    title: "The Bakery Premium Discord Access",
    description:
      "Join the full trading community I am taking a major role in. Includes live trading from premarket to afterhours, alerts, trade ideas, trading bots, and a family-type vibe.",
    url: "https://whop.com/the-bakery-trading-group-paid-access/the-bakery-trading-group-5f/?a=skinee",
    tag: "Top Community",
    badge: "Most Popular",
    tagColor: "amber",
    accent: "#f59e0b",
  },
  {
    title: "Bullflow.io – Real-Time Unusual Flow",
    description:
      "Track real-time unusual options flow, positioning, and momentum as it hits the tape.",
    url: "https://bullflow.io/?ref=skinee",
    tag: "Live Flow Tool",
    badge: "Best Flow Tool",
    tagColor: "green",
    accent: "#22c55e",
  },
  {
    title: "Skylit Pro",
    description:
      "Get advanced trading insights, deeper analytics, and premium tools built for serious market participants.",
    url: "https://whop.com/heatseeker/heatseeker?a=skinee",
    tag: "Premium Analytics",
    badge: "Best All-Around",
    tagColor: "blue",
    accent: "#3b82f6",
  },
  {
    title: "Skylit Initiate",
    description:
      "Start with entry-level access to Skylit and get the core tools without jumping straight to the full suite.",
    url: "https://whop.com/heatseeker/heatseeker-initiate?a=skinee",
    tag: "Starter Option",
    badge: "Beginner Friendly",
    tagColor: "purple",
    accent: "#a855f7",
  },
];

const tagStyles = {
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", dot: "bg-amber-400" },
  green: { bg: "bg-green-500/10", text: "text-green-400", dot: "bg-green-400" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", dot: "bg-blue-400" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", dot: "bg-purple-400" },
};

export default function AffiliateLinksSite() {
  return (
    <div className="min-h-screen bg-[#080809] text-neutral-200">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />

      <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-5 py-12 sm:px-6 sm:py-16">

        <header className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            <img
              src="/skinee-logo.png"
              alt="Skinee logo"
              className="h-10 w-10 object-contain"
            />
          </div>

          <p className="mb-3 text-[11px] tracking-[0.3em] text-orange-300 uppercase sm:text-2xl">
            Skinee
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
            Trading Stack
          </h1>

          <p className="mx-auto mt-3 max-w-xs text-sm text-neutral-400">
            Everything I actually use.
          </p>

          <div className="mx-auto mt-8 flex items-center gap-4 max-w-xs">
            <div className="h-px flex-1 bg-neutral-800" />
            <span className="text-[10px] tracking-widest text-yellow-100 uppercase">curated picks</span>
            <div className="h-px flex-1 bg-neutral-800" />
          </div>
        </header>

        <section className="mb-5 rounded-xl border border-amber-500/10 bg-amber-500/5 px-5 py-3.5 text-center">
          <p className="text-xs text-neutral-400">
            Start with{" "}
            <span className="font-semibold text-amber-400">The Bakery</span>
          </p>
        </section>

        <main className="grid gap-3">
          {links.map((link, index) => {
            const style = tagStyles[link.tagColor as keyof typeof tagStyles];
            return (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-neutral-800/60 bg-[#0f0f11] p-5 transition-all duration-200 hover:border-neutral-700 hover:bg-[#131315]"
                style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.03) inset" }}
              >
                <div
                  className="absolute left-0 top-0 h-full w-[2px] scale-y-0 rounded-full transition-transform duration-300 group-hover:scale-y-100 origin-top"
                  style={{ backgroundColor: link.accent }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wide ${style.bg} ${style.text}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                        {link.tag}
                      </span>
                      <span className="rounded-full bg-neutral-600/60 px-2.5 py-1 text-[10px] text-neutral-300">
                        {link.badge}
                      </span>
                    </div>

                    <h2 className="text-sm font-semibold text-neutral-100 leading-snug">
                      {link.title}
                    </h2>
                    <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">
                      {link.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0 pt-0.5">
                    <span className="text-[10px] text-neutral-700">#{index + 1}</span>
                    <svg
                      className="h-4 w-4 text-neutral-700 transition-all duration-200 group-hover:text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </main>

        <footer className="mt-10 text-center">
          <p className="text-[11px] text-neutral-700">
            Links may be affiliate links
          </p>
        </footer>
      </div>
    </div>
  );
}