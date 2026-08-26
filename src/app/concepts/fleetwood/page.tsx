import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleetwood Jewellery — Concept | Made by Caissie",
  description:
    "Independent website concept for Fleetwood Jewellery by Made by Caissie.",
  robots: {
    index: false,
    follow: false,
  },
};

const estateItems = [
  {
    lot: "LOT 031",
    type: "Designer Estate",
    title: "The Collector",
    note: "Singular by nature.",
    background: "bg-[#e4ddd0]",
    text: "text-[#251f1a]",
  },
  {
    lot: "LOT 052",
    type: "Estate Ring",
    title: "The Emerald",
    note: "A piece with a past.",
    background: "bg-[#cbd2c2]",
    text: "text-[#1d3026]",
  },
  {
    lot: "LOT 067",
    type: "Vintage Diamond",
    title: "The Original",
    note: "Not made twice.",
    background: "bg-[#d6c6ae]",
    text: "text-[#352818]",
  },
  {
    lot: "LOT 084",
    type: "Estate Watch",
    title: "The Timepiece",
    note: "Worth another lifetime.",
    background: "bg-[#bfc6cc]",
    text: "text-[#17232d]",
  },
];

const hours = [
  ["Monday", "Closed"],
  ["Tuesday", "9:00 — 5:00"],
  ["Wednesday", "9:00 — 5:00"],
  ["Thursday", "9:00 — 5:00"],
  ["Friday", "9:00 — 5:00"],
  ["Saturday", "10:00 — 4:00"],
  ["Sunday", "Closed"],
];

function Diamond({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex rotate-45 items-center justify-center border border-current ${className}`}
    >
      <div className="h-[64%] w-[64%] border border-current opacity-50" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current opacity-30" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current opacity-30" />
    </div>
  );
}

function Starburst({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-45 bg-current" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 -rotate-45 bg-current" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-[22.5deg] bg-current opacity-50" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 -rotate-[22.5deg] bg-current opacity-50" />
    </div>
  );
}

function Ring({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute bottom-0 left-1/2 aspect-square w-[70%] -translate-x-1/2 rounded-full border-2 border-current" />

      <div className="absolute left-1/2 top-0 aspect-square w-[38%] -translate-x-1/2 rotate-45 border border-current">
        <div className="absolute inset-[20%] border border-current opacity-50" />
      </div>
    </div>
  );
}

export default function FleetwoodConcept() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f3efe7] text-[#211c18]">
      {/* Disclosure */}
      <div className="bg-[#151a1d] px-4 py-3 text-center text-[9px] font-semibold uppercase leading-4 tracking-[0.18em] text-white/45 sm:text-[10px]">
        Independent concept redesign by Made by Caissie — not affiliated with or
        commissioned by Fleetwood Jewellery
      </div>

      {/* NAV */}
      <header className="relative z-50 border-b border-black/15 bg-[#f3efe7]">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="shrink-0">
            <p className="font-serif text-2xl tracking-[-0.055em] sm:text-3xl">
              FLEETWOOD
            </p>

            <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.34em] text-[#702f35] sm:text-[8px]">
              Jewellery · Calgary
            </p>
          </a>

          <nav className="hidden items-center gap-8 text-[9px] font-bold uppercase tracking-[0.17em] lg:flex">
            <a href="#collections" className="hover:text-[#702f35]">
              Collections
            </a>

            <a href="#estate" className="hover:text-[#702f35]">
              Estate
            </a>

            <a href="#custom" className="hover:text-[#702f35]">
              Custom
            </a>

            <a href="#story" className="hover:text-[#702f35]">
              Our Story
            </a>

            <a href="#watches" className="hover:text-[#702f35]">
              Watches
            </a>
          </nav>

          <a
            href="#visit"
            className="shrink-0 rounded-full bg-[#702f35] px-4 py-3 text-[8px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#151a1d] sm:px-6 sm:text-[9px] sm:tracking-[0.15em]"
          >
            Visit Fleetwood
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative min-h-[820px] overflow-hidden border-b border-black/10 bg-[#e7dfd2] sm:min-h-[900px]"
      >
        <div className="absolute -left-24 top-[16%] h-64 w-64 rounded-full border border-[#264c3a]/20 bg-[#ccd4c8] sm:h-80 sm:w-80" />

        <div className="absolute -right-24 top-[8%] h-80 w-80 rounded-full border border-[#a7854f]/20 bg-[#d7c49e] sm:h-[420px] sm:w-[420px]" />

        <div className="absolute bottom-[-140px] left-[58%] h-[360px] w-[360px] rounded-full bg-[#b8c0c7]/65 sm:h-[480px] sm:w-[480px]" />

        <div className="absolute left-[7%] top-[26%] hidden -rotate-6 sm:block">
          <div className="rounded-full border border-[#702f35]/40 bg-[#f3efe7] px-5 py-3 text-[8px] font-bold uppercase tracking-[0.2em] text-[#702f35] shadow-[5px_6px_0_rgba(112,47,53,0.15)]">
            One of one
          </div>
        </div>

        <div className="absolute right-[9%] top-[29%] hidden rotate-6 text-[#264c3a] sm:block">
          <Diamond className="h-24 w-24 bg-[#ccd4c8]" />
        </div>

        <div className="absolute bottom-[22%] left-[10%] hidden text-[#a7854f] lg:block">
          <Starburst className="h-20 w-20" />
        </div>

        <div className="relative mx-auto flex min-h-[820px] max-w-[1500px] flex-col px-5 py-8 sm:min-h-[900px] sm:px-10 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-[8px] font-bold uppercase tracking-[0.22em] text-[#702f35] sm:text-[9px]">
            <span>Calgary</span>
            <span className="text-black/20">✦</span>
            <span>Three Generations</span>
            <span className="text-black/20">✦</span>
            <span>Fine · Estate · Custom</span>
          </div>

          <div className="flex flex-1 items-center justify-center py-16">
            <div className="relative z-10 mx-auto max-w-[1200px] text-center">
              <p className="mx-auto mb-6 font-serif text-xl italic text-[#702f35] sm:text-2xl">
                Exceptional pieces are rarely ordinary.
              </p>

              <h1 className="mx-auto max-w-full font-serif text-[clamp(54px,10vw,150px)] leading-[0.76] tracking-[-0.075em]">
                JEWELLERY
                <span className="block italic text-[#702f35]">WORTH</span>
                <span className="block">KEEPING.</span>
              </h1>

              <p className="mx-auto mt-9 max-w-xl text-sm leading-7 text-black/50 sm:text-lg sm:leading-8">
                Fine jewellery, distinctive estate finds, custom design and
                pre-owned watches — backed by three generations of Calgary
                knowledge.
              </p>

              <a
                href="#collections"
                className="mt-9 inline-flex rounded-full bg-[#151a1d] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#702f35] sm:px-9 sm:py-5 sm:text-[10px]"
              >
                Explore Fleetwood ↓
              </a>
            </div>
          </div>

          <div className="flex items-end justify-between gap-5 border-t border-black/15 pt-5">
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/35 sm:text-[9px]">
              Engagement · Estate · Custom · Watches
            </p>

            <p className="hidden font-serif text-lg italic text-[#702f35] sm:block">
              Find the right piece.
            </p>
          </div>
        </div>
      </section>

      {/* COLLECTION WORLDS */}
      <section id="collections" className="bg-[#f3efe7]">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#702f35]">
                The collection
              </p>

              <h2 className="mt-4 font-serif text-[clamp(48px,7vw,98px)] leading-[0.83] tracking-[-0.065em]">
                Find your
                <span className="block italic text-[#702f35]">
                  kind of remarkable.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-black/45">
              Fine jewellery should feel considered before you ever step inside
              the store.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
            {/* Engagement */}
            <a
              href="#custom"
              className="group relative min-h-[470px] overflow-hidden rounded-[22px] bg-[#d9cfbd] p-7 sm:p-10 lg:col-span-7 lg:row-span-2 lg:min-h-[780px]"
            >
              <div className="flex items-center justify-between">
                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#702f35]">
                  01 · Engagement
                </p>

                <span className="rounded-full border border-black/15 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.14em]">
                  For what comes next
                </span>
              </div>

              {/* Engagement photo placeholder */}
              <div className="absolute left-1/2 top-[24%] z-10 -translate-x-1/2 rounded-full border border-[#702f35]/20 bg-[#f3efe7]/85 px-5 py-3 text-center backdrop-blur-sm">
                <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#702f35]">
                  Fleetwood Engagement Photography
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#702f35]/50">
                  Photo Here
                </p>
              </div>

              <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 text-[#702f35] transition duration-500 group-hover:scale-105">
                <Ring className="h-[260px] w-[200px] sm:h-[390px] sm:w-[300px]" />
              </div>

              <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10">
                <h3 className="font-serif text-6xl leading-[0.82] tracking-[-0.06em] sm:text-8xl">
                  SAY
                  <span className="block italic text-[#702f35]">YES.</span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-black/45">
                  Engagement jewellery selected for the moment — and everything
                  that comes after it.
                </p>
              </div>
            </a>

            {/* Estate */}
            <a
              href="#estate"
              className="group relative min-h-[380px] overflow-hidden rounded-[22px] bg-[#702f35] p-7 text-white sm:p-9 lg:col-span-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#d8b68a]">
                  02 · Estate
                </p>

                <span className="text-2xl transition group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <div className="absolute right-7 top-20 text-[#d8b68a]/40">
                <Diamond className="h-28 w-28 sm:h-36 sm:w-36" />
              </div>

              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
                <h3 className="font-serif text-5xl leading-[0.85] tracking-[-0.055em] sm:text-6xl">
                  FOUND
                  <span className="block italic text-[#d8b68a]">ONCE.</span>
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
                  Antique, rare and designer pieces with history already built
                  in.
                </p>
              </div>
            </a>

            {/* Custom */}
            <a
              href="#custom"
              className="group relative min-h-[380px] overflow-hidden rounded-[22px] bg-[#c8d1c3] p-7 text-[#1e3b2d] sm:p-9 lg:col-span-3"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.22em]">
                03 · Custom
              </p>

              <Starburst className="absolute right-7 top-16 h-20 w-20 opacity-30 transition group-hover:rotate-45" />

              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9">
                <h3 className="font-serif text-4xl leading-[0.86] tracking-[-0.055em] sm:text-5xl">
                  MAKE IT
                  <span className="block italic">YOURS.</span>
                </h3>
              </div>
            </a>

            {/* Watches */}
            <a
              href="#watches"
              className="group relative min-h-[380px] overflow-hidden rounded-[22px] bg-[#192433] p-7 text-white sm:p-9 lg:col-span-2"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#b7c2cf]">
                04
              </p>

              <div className="absolute left-1/2 top-[42%] flex h-32 w-32 -translate-x-1/2 items-center justify-center rounded-full border border-[#b7c2cf]/50 transition group-hover:scale-105">
                <div className="relative h-[82%] w-[82%] rounded-full border border-white/20">
                  <div className="absolute left-1/2 top-1/2 h-[28%] w-px origin-bottom -translate-x-1/2 -translate-y-full rotate-45 bg-[#b7c2cf]" />
                  <div className="absolute left-1/2 top-1/2 h-[22%] w-px origin-bottom -translate-x-1/2 -translate-y-full rotate-[125deg] bg-white" />
                </div>
              </div>

              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9">
                <h3 className="font-serif text-4xl leading-[0.86] tracking-[-0.055em]">
                  KEEP
                  <span className="block italic text-[#b7c2cf]">TIME.</span>
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ESTATE / THE CABINET */}
      <section id="estate" className="bg-[#e5dccd]">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#702f35]">
                The estate cabinet
              </p>

              <h2 className="mt-4 font-serif text-[clamp(58px,8vw,118px)] leading-[0.8] tracking-[-0.07em]">
                ONE
                <span className="block italic text-[#702f35]">OF ONE.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-xl font-serif text-3xl leading-[1.05] tracking-[-0.035em] sm:text-4xl">
                Some jewellery is collected.
                <span className="block italic text-black/35">
                  Some jewellery is discovered.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {estateItems.map((item, index) => (
              <article
                key={item.lot}
                className={`group min-w-0 overflow-hidden rounded-[18px] border border-black/10 ${item.background} ${item.text} ${
                  index % 2 === 1 ? "sm:translate-y-7" : ""
                }`}
              >
                <div className="flex items-center justify-between border-b border-current/15 px-5 py-4">
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em]">
                    {item.lot}
                  </p>

                  <span className="text-base opacity-35">✦</span>
                </div>

                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden p-8">
                  {index === 0 && (
                    <Diamond className="h-36 w-36 transition duration-500 group-hover:scale-105" />
                  )}

                  {index === 1 && (
                    <div className="relative h-44 w-32 border border-current transition duration-500 group-hover:scale-105">
                      <div className="absolute inset-[12%] border border-current opacity-50" />
                      <div className="absolute inset-[28%] bg-current opacity-15" />
                    </div>
                  )}

                  {index === 2 && (
                    <Starburst className="h-40 w-40 transition duration-500 group-hover:rotate-45" />
                  )}

                  {index === 3 && (
                    <div className="flex h-40 w-40 items-center justify-center rounded-full border border-current transition duration-500 group-hover:scale-105">
                      <div className="h-[82%] w-[82%] rounded-full border border-current opacity-60" />
                    </div>
                  )}

                  {/* Estate photography placeholder */}
                  <div className="absolute bottom-5 left-4 right-4 text-center">
                    <div className="inline-block rounded-full border border-current/15 bg-white/45 px-4 py-2 backdrop-blur-sm">
                      <p className="text-[7px] font-bold uppercase tracking-[0.14em]">
                        Estate Photography · Photo Here
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-current/15 p-5">
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] opacity-50">
                    {item.type}
                  </p>

                  <h3 className="mt-2 font-serif text-3xl tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] opacity-45">
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col justify-between gap-6 border-t border-black/20 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-6 text-black/45">
              Fleetwood&apos;s estate collection changes constantly. Each piece
              should feel less like inventory and more like something someone
              was fortunate enough to find.
            </p>

            <a
              href="#visit"
              className="shrink-0 rounded-full bg-[#702f35] px-6 py-4 text-center text-[9px] font-bold uppercase tracking-[0.15em] text-white"
            >
              Discover the collection
            </a>
          </div>
        </div>
      </section>

      {/* CUSTOM */}
      <section id="custom" className="bg-[#c8d1c3]">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#264c3a]">
              Custom jewellery
            </p>

            <h2 className="mx-auto mt-5 max-w-5xl font-serif text-[clamp(52px,8vw,112px)] leading-[0.8] tracking-[-0.07em]">
              MAKE SOMETHING
              <span className="block italic text-[#264c3a]">
                ONLY YOU HAVE.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#1c3328]/55 sm:text-base">
              Fleetwood&apos;s in-house design services create an opportunity
              for the website to make custom jewellery feel collaborative,
              personal and genuinely special.
            </p>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[24px] border border-[#173426]/20 bg-[#f3efe7] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#173426]/15 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="space-y-10">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#264c3a]">
                    Stone
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Diamond", "Emerald", "Sapphire", "Your Stone"].map(
                      (item, index) => (
                        <span
                          key={item}
                          className={`rounded-full border px-4 py-3 text-[8px] font-bold uppercase tracking-[0.12em] ${
                            index === 1
                              ? "border-[#264c3a] bg-[#264c3a] text-white"
                              : "border-[#173426]/20 text-[#173426]/55"
                          }`}
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#264c3a]">
                    Metal
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Yellow Gold", "White Gold", "Rose Gold", "Platinum"].map(
                      (item, index) => (
                        <span
                          key={item}
                          className={`rounded-full border px-4 py-3 text-[8px] font-bold uppercase tracking-[0.12em] ${
                            index === 0
                              ? "border-[#9a7a46] bg-[#d7c49e] text-[#493918]"
                              : "border-[#173426]/20 text-[#173426]/55"
                          }`}
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#264c3a]">
                    Direction
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {["Classic", "Modern", "Vintage", "Unexpected"].map(
                      (item, index) => (
                        <span
                          key={item}
                          className={`flex min-h-16 items-center justify-center rounded-[14px] border px-3 text-center text-[8px] font-bold uppercase tracking-[0.11em] ${
                            index === 3
                              ? "border-[#702f35] bg-[#ddd0ca] text-[#702f35]"
                              : "border-[#173426]/20 text-[#173426]/55"
                          }`}
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-[#173426]/15 pt-6">
                <p className="font-serif text-2xl italic text-[#264c3a]">
                  Your direction
                </p>

                <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.13em] text-[#173426]/45">
                  Emerald · Yellow Gold
                  <br />
                  Unexpected
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-[#dfd4b6] p-8">
              <div className="absolute left-6 top-6 rounded-full border border-black/15 bg-white/35 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.16em]">
                Custom Piece Photography · Photo Here
              </div>

              <div className="absolute h-[430px] w-[430px] rounded-full border border-[#264c3a]/10 sm:h-[550px] sm:w-[550px]" />
              <div className="absolute h-[320px] w-[320px] rounded-full border border-[#264c3a]/10 sm:h-[430px] sm:w-[430px]" />

              <div className="relative text-[#264c3a]">
                <Ring className="h-[330px] w-[250px] sm:h-[470px] sm:w-[350px]" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 border-t border-black/15 pt-5 sm:flex-row sm:items-end">
                <p className="max-w-xs text-xs leading-5 text-black/40">
                  Final jewellery would be developed through Fleetwood&apos;s
                  real custom design process.
                </p>

                <a
                  href="#visit"
                  className="rounded-full bg-[#264c3a] px-5 py-3 text-center text-[8px] font-bold uppercase tracking-[0.14em] text-white"
                >
                  Start a custom piece
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="bg-[#f3efe7]">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative min-h-[630px] sm:min-h-[700px]">
              <div className="absolute left-[4%] top-[5%] w-[68%] -rotate-2 bg-[#d5cabc] p-4 shadow-[0_20px_50px_rgba(41,24,28,0.1)] sm:p-6">
                <div className="flex aspect-[4/3] items-center justify-center border border-black/15 bg-[#c5b9aa] px-8 text-center">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#702f35]">
                      Fleetwood Family Photography
                    </p>

                    <p className="mt-4 font-serif text-4xl italic leading-[0.95]">
                      Photo Here
                    </p>

                    <p className="mx-auto mt-4 max-w-[220px] text-xs leading-5 text-black/35">
                      A portrait of the three generations behind Fleetwood.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-[3%] top-[22%] rotate-3 bg-[#702f35] px-7 py-8 text-white shadow-[0_15px_40px_rgba(41,24,28,0.12)]">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#d8b68a]">
                  Family owned
                </p>

                <p className="mt-3 font-serif text-5xl italic">3</p>

                <p className="text-[8px] font-bold uppercase tracking-[0.16em]">
                  Generations
                </p>
              </div>

              <div className="absolute bottom-[15%] left-[8%] -rotate-4 bg-[#c8d1c3] px-6 py-5 shadow-[0_12px_35px_rgba(41,24,28,0.08)]">
                <p className="font-serif text-xl italic text-[#264c3a]">
                  “Find the right piece.
                  <br />
                  Not simply a piece.”
                </p>
              </div>

              <div className="absolute bottom-[5%] right-[9%] rotate-2 border border-black/15 bg-[#d7c49e] px-7 py-6">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/45">
                  Calgary
                </p>

                <p className="mt-2 font-serif text-3xl">Local expertise.</p>
              </div>
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#702f35]">
                The people behind Fleetwood
              </p>

              <h2 className="mt-5 font-serif text-[clamp(52px,7vw,100px)] leading-[0.83] tracking-[-0.07em]">
                JEWELLERY
                <span className="block italic text-[#702f35]">
                  IS PERSONAL.
                </span>
                <span className="block">SO IS SERVICE.</span>
              </h2>

              <p className="mt-9 max-w-xl text-base leading-8 text-black/50">
                Fleetwood is family-owned and operated, with three generations
                working together. That experience should feel present before a
                customer ever walks through the door.
              </p>

              <div className="mt-10 grid gap-px bg-black/15 sm:grid-cols-3">
                {[
                  ["03", "Generations"],
                  ["01", "Calgary Store"],
                  ["∞", "Stories Ahead"],
                ].map(([number, label]) => (
                  <div key={label} className="bg-[#f3efe7] p-5">
                    <p className="font-serif text-4xl italic text-[#702f35]">
                      {number}
                    </p>

                    <p className="mt-3 text-[8px] font-bold uppercase leading-4 tracking-[0.14em] text-black/40">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WATCHES */}
      <section
        id="watches"
        className="relative overflow-hidden bg-[#15202c] text-white"
      >
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-32">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/15 pb-6">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#b7c2cf]">
              Fleetwood · Watches
            </p>

            <p className="rounded-full border border-white/20 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-white/45">
              Pre-owned timepieces
            </p>
          </div>

          <div className="grid gap-16 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-serif text-2xl italic text-[#b7c2cf]">
                Time deserves another chapter.
              </p>

              <h2 className="mt-5 font-serif text-[clamp(58px,8vw,120px)] leading-[0.78] tracking-[-0.075em]">
                TIME,
                <span className="block italic text-[#b7c2cf]">SECOND</span>
                <span className="block">TIME</span>
                <span className="block italic text-[#b7c2cf]">AROUND.</span>
              </h2>

              <p className="mt-9 max-w-lg text-base leading-8 text-white/45">
                Fleetwood&apos;s collection includes pre-owned high-end watches
                ranging from Rolex through Patek Philippe.
              </p>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[600px]">
              <div className="absolute left-1/2 top-1/2 h-[92%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-[70px] border border-[#b7c2cf]/20 bg-[#1b2937]" />

              <div className="absolute left-1/2 top-1/2 flex aspect-square w-[76%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b7c2cf] bg-[#111b25] shadow-[0_35px_100px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-[8%] rounded-full border border-white/15" />
                <div className="absolute inset-[17%] rounded-full border border-white/10" />

                <div className="absolute left-1/2 top-1/2 h-[26%] w-px origin-bottom -translate-x-1/2 -translate-y-full rotate-[42deg] bg-[#b7c2cf]" />

                <div className="absolute left-1/2 top-1/2 h-[20%] w-px origin-bottom -translate-x-1/2 -translate-y-full rotate-[130deg] bg-white/80" />

                <p className="absolute bottom-[27%] text-[7px] font-bold uppercase tracking-[0.24em] text-[#b7c2cf]/45">
                  Fleetwood
                </p>
              </div>

              {/* Watch photography placeholder */}
              <div className="absolute right-[2%] top-[13%] rounded-full border border-[#b7c2cf]/30 bg-[#15202c]/90 px-4 py-3 text-center text-[#b7c2cf] backdrop-blur-sm sm:right-[5%]">
                <p className="text-[7px] font-bold uppercase tracking-[0.16em]">
                  Fleetwood Watch Photography
                </p>

                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-white/45">
                  Photo Here
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-px border-y border-white/15 bg-white/15 sm:grid-cols-4">
            {[
              "Rolex",
              "Patek Philippe",
              "Wrist Watches",
              "Pocket Watches",
            ].map((brand) => (
              <div
                key={brand}
                className="bg-[#15202c] px-5 py-6 text-center font-serif text-xl italic text-white/60"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELL / ESTATE */}
      <section className="bg-[#d7c49e]">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-[#dfcfad] p-7 sm:p-12 lg:p-16">
            <div className="absolute -right-10 -top-12 text-[#8f7042]/20">
              <Diamond className="h-52 w-52" />
            </div>

            <div className="relative grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#702f35]">
                  Estate selling
                </p>

                <h2 className="mt-5 max-w-5xl font-serif text-[clamp(48px,7vw,100px)] leading-[0.82] tracking-[-0.07em]">
                  WHEN IT&apos;S
                  <span className="block italic text-[#702f35]">
                    TIME TO
                  </span>
                  <span className="block">PASS IT ON.</span>
                </h2>
              </div>

              <div>
                <p className="font-serif text-3xl italic text-[#702f35]">
                  Start with a conversation.
                </p>

                <p className="mt-4 max-w-sm text-sm leading-6 text-black/50">
                  Fleetwood handles estate-selling inquiries by appointment,
                  giving owners a local place to discuss jewellery they are
                  ready to part with.
                </p>

                <a
                  href="tel:4032528850"
                  className="mt-7 inline-flex rounded-full bg-[#211c18] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#702f35]"
                >
                  Arrange an appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REPAIR */}
      <section className="border-y border-black/10 bg-[#f3efe7]">
        <div className="mx-auto grid max-w-[1500px] gap-8 px-5 py-16 sm:px-10 md:grid-cols-[0.6fr_1.4fr] md:items-center lg:px-12">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#702f35]">
              Jewellery repair
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="font-serif text-4xl leading-[0.95] tracking-[-0.045em] sm:text-5xl">
              Worth keeping?
              <span className="italic text-[#702f35]"> Keep it beautiful.</span>
            </p>

            <a
              href="#visit"
              className="rounded-full border border-black/25 px-5 py-4 text-center text-[8px] font-bold uppercase tracking-[0.15em] transition hover:bg-black hover:text-white"
            >
              Ask about repair
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#ddd4c6]">
        <div className="absolute left-[-70px] top-[-80px] h-64 w-64 rounded-full bg-[#c6d0c4]" />
        <div className="absolute bottom-[-100px] right-[-70px] h-72 w-72 rounded-full bg-[#cdb98f]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-24 text-center sm:px-10 sm:py-28 lg:px-12 lg:py-36">
          <Starburst className="mx-auto h-14 w-14 text-[#702f35]" />

          <h2 className="mx-auto mt-8 max-w-5xl font-serif text-[clamp(58px,9vw,130px)] leading-[0.78] tracking-[-0.075em]">
            COME SEE
            <span className="block italic text-[#702f35]">
              WHAT FINDS YOU.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-black/45">
            The right piece tends to make itself known.
          </p>

          <a
            href="#visit"
            className="mt-8 inline-flex rounded-full bg-[#151a1d] px-8 py-5 text-[9px] font-bold uppercase tracking-[0.17em] text-white transition hover:bg-[#702f35]"
          >
            Visit Fleetwood ↓
          </a>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="bg-[#f3efe7]">
        <div className="mx-auto grid max-w-[1500px] border-x border-black/10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-black/15 p-6 sm:p-12 lg:border-b-0 lg:border-r lg:p-16">
            <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#702f35]">
              Fleetwood Jewellery
            </p>

            <h2 className="mt-5 font-serif text-[clamp(52px,6vw,88px)] leading-[0.86] tracking-[-0.065em]">
              See it
              <span className="block italic text-[#702f35]">in person.</span>
            </h2>

            <div className="mt-10 border-t border-black/15 pt-7">
              <p className="font-serif text-2xl">
                8720 Macleod Trail SE
              </p>

              <p className="mt-2 text-sm leading-6 text-black/45">
                Unit 19
                <br />
                Calgary, Alberta · T2H 0M4
              </p>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:4032528850"
                className="rounded-full bg-[#702f35] px-5 py-4 text-center text-[9px] font-bold uppercase tracking-[0.14em] text-white"
              >
                403-252-8850
              </a>

              <a
                href="mailto:Fleetwoodoffice@shaw.ca"
                className="rounded-full border border-black/20 px-5 py-4 text-center text-[9px] font-bold uppercase tracking-[0.12em]"
              >
                Email Fleetwood
              </a>
            </div>

            <p className="mt-6 break-all text-xs text-black/35">
              Fleetwoodoffice@shaw.ca
            </p>
          </div>

          <div className="p-6 sm:p-12 lg:p-16">
            <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#702f35]">
              Store hours
            </p>

            <div className="mt-7 border-t border-black">
              {hours.map(([day, time]) => (
                <div
                  key={day}
                  className="flex min-w-0 items-center justify-between gap-4 border-b border-black/15 py-5"
                >
                  <span className="min-w-0 font-serif text-lg sm:text-xl">
                    {day}
                  </span>

                  <span className="shrink-0 text-right text-[9px] font-bold uppercase tracking-[0.1em] text-black/40 sm:text-[10px]">
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#151a1d] text-white">
        <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="font-serif text-4xl tracking-[-0.055em]">
                FLEETWOOD
              </p>

              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.28em] text-[#d8b68a]">
                Jewellery · Calgary
              </p>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/35">
                Fine jewellery · Estate · Custom · Repair · Pre-owned watches
              </p>
            </div>

            <div className="text-sm leading-6 text-white/35 md:text-right">
              <p>8720 Macleod Trail SE · Unit 19</p>
              <p>Calgary, Alberta</p>
              <p className="mt-2 text-[#d8b68a]">403-252-8850</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[9px] leading-5 text-white/25 sm:flex-row">
            <span>
              Concept redesign only — not an official Fleetwood Jewellery
              website.
            </span>

            <a
              href="/"
              className="font-bold uppercase tracking-[0.15em] text-[#d8b68a]/70"
            >
              Made by Caissie ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}