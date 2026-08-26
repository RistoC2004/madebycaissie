import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ace of Concrete — Concept Redesign | Made by Caissie",
  description:
    "Independent website concept for Ace of Concrete by Made by Caissie.",
  robots: {
    index: false,
    follow: false,
  },
};

const services = [
  {
    number: "01",
    title: "Driveways",
    text: "High-performance concrete driveways built for everyday use, clean curb appeal, and long-term durability.",
  },
  {
    number: "02",
    title: "Patios",
    text: "Functional outdoor living spaces ranging from simple pours to decorative finishes that elevate the whole yard.",
  },
  {
    number: "03",
    title: "Foundations",
    text: "Reliable concrete foundations and structural pours that demand precision from the base up.",
  },
  {
    number: "04",
    title: "Steps & Walls",
    text: "Concrete stairs, curbs and retaining walls built to handle both appearance and performance.",
  },
  {
    number: "05",
    title: "Repairs",
    text: "Cracks, chips and surface issues corrected with practical repair solutions and honest recommendations.",
  },
  {
    number: "06",
    title: "Stamped Concrete",
    text: "Decorative concrete finishes that bring texture, pattern and custom character to the final result.",
  },
];

const finishes = [
  {
    number: "01",
    title: "Broom Finish",
    description:
      "A clean, slip-resistant surface commonly used for driveways, sidewalks and practical exterior spaces.",
    background:
      "repeating-linear-gradient(90deg, #aaa8a2 0px, #aaa8a2 2px, #c8c5bd 2px, #c8c5bd 8px)",
  },
  {
    number: "02",
    title: "Exposed Aggregate",
    description:
      "A textured decorative finish that reveals the stone within the concrete for a durable, premium appearance.",
    background:
      "radial-gradient(circle at 20% 30%, #78766f 0 5px, transparent 6px), radial-gradient(circle at 65% 70%, #97948b 0 6px, transparent 7px), radial-gradient(circle at 75% 25%, #5e5d58 0 4px, transparent 5px), radial-gradient(circle at 35% 80%, #817f77 0 5px, transparent 6px), #bebbb3",
  },
  {
    number: "03",
    title: "Stamped Concrete",
    description:
      "Patterns and textures that recreate the look of stone, slate or pavers while retaining the strength of concrete.",
    background:
      "linear-gradient(45deg, transparent 46%, rgba(0,0,0,.22) 47%, rgba(0,0,0,.22) 52%, transparent 53%), linear-gradient(-45deg, transparent 46%, rgba(0,0,0,.16) 47%, rgba(0,0,0,.16) 52%, transparent 53%), #aaa79f",
  },
  {
    number: "04",
    title: "Coloured Concrete",
    description:
      "Integral or surface colour that gives patios, paths and decorative pours a warmer, more customized finish.",
    background:
      "linear-gradient(135deg, #75635b 0%, #92796b 45%, #ab9181 100%)",
  },
];

const serviceAreas = [
  "Calgary",
  "Chestermere",
  "Airdrie",
  "Cochrane",
  "Okotoks",
  "High River",
  "Black Diamond",
];

export default function AceConcept() {
  return (
    <main className="overflow-hidden bg-[#eceae5] text-[#111111]">
      {/* Concept notice */}
      <div className="border-b border-black/10 bg-[#111111] px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
        Independent concept redesign by Made by Caissie — not affiliated with
        or commissioned by Ace of Concrete
      </div>

      {/* Hero */}
      <section className="border-b border-black/10 bg-[#e6e3dc]">
        <header className="border-b border-black/10">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 lg:px-12">
            <a href="#top" className="leading-none">
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#5a5f69]">
                Calgary, Alberta
              </span>

              <span className="mt-1 block text-2xl font-black uppercase tracking-[-0.05em]">
                ACE OF CONCRETE
              </span>
            </a>

            <nav className="hidden items-center gap-10 text-xs font-black uppercase tracking-[0.12em] lg:flex">
              <a
                href="#services"
                className="border-b border-transparent pb-1 transition hover:border-black"
              >
                Services
              </a>

              <a
                href="#finishes"
                className="border-b border-transparent pb-1 transition hover:border-black"
              >
                Finishes
              </a>

              <a
                href="#proof"
                className="border-b border-transparent pb-1 transition hover:border-black"
              >
                Proof
              </a>

              <a
                href="#estimate"
                className="border-b border-transparent pb-1 transition hover:border-black"
              >
                Estimate
              </a>
            </nav>

            <a
              href="#estimate"
              className="border border-black bg-[#111111] px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#2d3340]"
            >
              Get Quote
            </a>
          </div>
        </header>

        <div
          id="top"
          className="mx-auto grid max-w-[1500px] border-x border-black/10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Left hero */}
          <div className="border-b border-black/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-14 bg-black/30" />

              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/55">
                Driveways · Patios · Foundations · Decorative Concrete
              </p>
            </div>

            <h1 className="max-w-6xl text-[54px] font-black uppercase leading-[0.84] tracking-[-0.07em] sm:text-[74px] lg:text-[120px]">
              Concrete.
              <span className="block text-[#2d3340]">Without</span>
              <span className="block">Compromise.</span>
            </h1>

            <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-xl text-lg leading-8 text-black/60">
                Residential, commercial and decorative concrete work for Calgary
                and surrounding areas — with the experience, execution and
                professionalism the job deserves.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="#estimate"
                  className="border border-black bg-white px-7 py-4 text-center text-xs font-black uppercase tracking-[0.1em] transition hover:bg-[#111111] hover:text-white"
                >
                  Request Estimate ↗
                </a>

                <a
                  href="tel:4038004981"
                  className="border border-black/20 px-7 py-4 text-center text-xs font-black uppercase tracking-[0.1em]"
                >
                  (403) 800-4981
                </a>
              </div>
            </div>
          </div>

          {/* Right hero panel */}
          <div className="grid min-h-[520px] grid-rows-[1fr_auto] bg-[#111111] text-white">
            <div className="relative overflow-hidden border-b border-white/10 p-8 lg:p-10">
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:38px_38px]" />
              </div>

              <div className="relative">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                  Project Types
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    "Residential",
                    "Commercial",
                    "Industrial",
                    "Decorative",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-end justify-between border-b border-white/10 pb-4"
                    >
                      <span className="text-2xl font-black uppercase tracking-[-0.04em]">
                        {item}
                      </span>

                      <span className="text-xs font-bold text-white/35">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-white/10">
              <div className="p-6">
                <p className="text-[44px] font-black tracking-[-0.06em]">15+</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                  Years
                </p>
              </div>

              <div className="p-6">
                <p className="text-[44px] font-black tracking-[-0.06em]">
                  730+
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                  Projects
                </p>
              </div>

              <div className="p-6">
                <p className="text-[44px] font-black tracking-[-0.06em]">
                  575+
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                  Clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spec strip */}
        <div className="mx-auto max-w-[1500px] border-x border-black/10">
          <div className="grid gap-px bg-black/10 md:grid-cols-4">
            {[
              ["Material", "Concrete"],
              ["Specialty", "Decorative & Structural"],
              ["Service Area", "Calgary & Surrounding"],
              ["Call", "(403) 800-4981"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#f5f3ee] px-6 py-5">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-black/35">
                  {label}
                </p>

                <p className="mt-2 text-sm font-bold uppercase tracking-[0.03em]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] border-x border-black/10 px-6 py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5a5f69]">
                Built with intention
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                One pour.
                <span className="block text-black/25">
                  One chance to get it right.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
                Concrete work is permanent. That&apos;s why the right contractor
                matters — not just for how it looks on day one, but for how it
                performs years later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#dcd8d0]">
        <div className="mx-auto max-w-[1500px] border-x border-black/10 px-6 py-24 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5a5f69]">
                What Ace builds
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-6xl">
                The work.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-black/55">
              From decorative concrete to structural pours, the service offering
              should feel as solid as the finished result.
            </p>
          </div>

          <div className="border-t border-black">
            {services.map((service) => (
              <div
                key={service.title}
                className="grid gap-5 border-b border-black/20 py-8 md:grid-cols-[80px_0.8fr_1.2fr]"
              >
                <span className="text-xs font-black uppercase tracking-[0.12em] text-[#5a5f69]">
                  {service.number}
                </span>

                <h3 className="text-3xl font-black uppercase tracking-[-0.04em]">
                  {service.title}
                </h3>

                <div>
                  <p className="max-w-2xl leading-7 text-black/58">
                    {service.text}
                  </p>

                  <a
                    href="#estimate"
                    className="mt-5 inline-block text-xs font-black uppercase tracking-[0.1em] text-[#2d3340]"
                  >
                    Ask about this service ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section id="finishes" className="bg-[#111111] text-white">
        <div className="mx-auto max-w-[1500px] border-x border-white/10 px-6 py-24 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#9098a7]">
                Decorative options
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">
                Finish
                <span className="block text-white/25">matters.</span>
              </h2>

              <p className="mt-7 max-w-md text-lg leading-8 text-white/52">
                Concrete doesn&apos;t have to look generic. Texture, aggregate,
                pattern and colour can completely change the finished space.
              </p>

              <p className="mt-10 max-w-sm border-l border-[#9098a7] pl-5 text-sm leading-6 text-white/35">
                A stronger website helps homeowners understand these options
                before they ever request an estimate.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {finishes.map((finish) => (
                <div
                  key={finish.title}
                  className="group bg-[#181a1f] transition hover:bg-[#1d2026]"
                >
                  {/* Texture preview */}
                  <div
                    className="h-48 border-b border-white/10 transition duration-500 group-hover:scale-[0.98]"
                    style={{
                      backgroundImage: finish.background,
                    }}
                  />

                  <div className="p-8 sm:p-10">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#9098a7]">
                        {finish.number}
                      </p>

                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/20">
                        Surface
                      </span>
                    </div>

                    <h3 className="mt-10 text-3xl font-black uppercase tracking-[-0.04em]">
                      {finish.title}
                    </h3>

                    <p className="mt-4 max-w-sm leading-7 text-white/50">
                      {finish.description}
                    </p>

                    <a
                      href="#estimate"
                      className="mt-7 inline-block text-[11px] font-black uppercase tracking-[0.12em] text-[#a8afbe]"
                    >
                      Ask about this finish ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="bg-[#f4f2ed]">
        <div className="mx-auto max-w-[1500px] border-x border-black/10 px-6 py-24 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5a5f69]">
                Why trust Ace
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">
                Experience,
                <span className="block text-black/25">made visible.</span>
              </h2>
            </div>

            <div className="grid gap-px bg-black/10 sm:grid-cols-3">
              {[
                ["15+", "Years of experience"],
                ["730+", "Projects completed"],
                ["575+", "Clients served"],
              ].map(([number, label]) => (
                <div key={label} className="bg-white p-8 sm:p-10">
                  <p className="text-6xl font-black tracking-[-0.07em] sm:text-7xl">
                    {number}
                  </p>

                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.05em] text-black/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-black/10 md:grid-cols-3">
            {[
              [
                "Residential",
                "Patios, driveways, steps, basement work and concrete upgrades designed around residential properties.",
              ],
              [
                "Commercial",
                "Concrete solutions for business properties where appearance, performance and scheduling all matter.",
              ],
              [
                "Industrial",
                "Concrete capability for larger environments with unique site requirements, scheduling and logistics.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#e9e6df] p-8">
                <h3 className="text-2xl font-black uppercase tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="mt-4 max-w-sm leading-7 text-black/58">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-[#2d3340] text-white">
        <div className="mx-auto max-w-[1500px] border-x border-white/10 px-6 py-16 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                Service Area
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl">
                Calgary &
                <span className="block text-white/35">surrounding areas.</span>
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
              {serviceAreas.map((area) => (
                <div key={area} className="bg-[#373d4a] px-5 py-4">
                  <p className="text-sm font-bold uppercase tracking-[0.04em]">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estimate */}
      <section id="estimate" className="bg-white">
        <div className="mx-auto max-w-[1500px] border-x border-black/10 px-6 py-24 lg:px-12 lg:py-28">
          <div className="grid border-t-4 border-black lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-black/10 py-12 lg:border-b-0 lg:border-r lg:pr-14">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5a5f69]">
                Free estimate
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-6xl">
                Start the project properly.
              </h2>

              <p className="mt-8 max-w-md text-lg leading-8 text-black/56">
                A better quote experience for a concrete company should feel
                tailored to the work — not like a generic contact form.
              </p>

              <div className="mt-12 border-t border-black/10 pt-7">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-black/35">
                  Phone
                </p>

                <a
                  href="tel:4038004981"
                  className="mt-2 block text-3xl font-black tracking-[-0.04em]"
                >
                  (403) 800-4981
                </a>

                <p className="mt-8 text-[10px] font-black uppercase tracking-[0.18em] text-black/35">
                  Alternate
                </p>

                <p className="mt-2 text-lg font-bold">(587) 703-0949</p>
              </div>
            </div>

            {/* Concept form */}
            <div className="py-12 lg:pl-14">
              <form className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
                <label className="text-[11px] font-black uppercase tracking-[0.12em]">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-black/30 focus:border-[#2d3340]"
                  />
                </label>

                <label className="text-[11px] font-black uppercase tracking-[0.12em]">
                  Phone
                  <input
                    type="tel"
                    placeholder="403-555-0123"
                    className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-black/30 focus:border-[#2d3340]"
                  />
                </label>

                <label className="text-[11px] font-black uppercase tracking-[0.12em] sm:col-span-2">
                  Project Address
                  <input
                    type="text"
                    placeholder="Calgary, Alberta"
                    className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-black/30 focus:border-[#2d3340]"
                  />
                </label>

                <label className="text-[11px] font-black uppercase tracking-[0.12em]">
                  What are you pouring?
                  <select className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none">
                    <option>Driveway</option>
                    <option>Patio</option>
                    <option>Foundation</option>
                    <option>Steps / Stairs</option>
                    <option>Retaining Wall</option>
                    <option>Repairs</option>
                    <option>Stamped Concrete</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="text-[11px] font-black uppercase tracking-[0.12em]">
                  Desired Finish
                  <select className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none">
                    <option>Broom Finish</option>
                    <option>Exposed Aggregate</option>
                    <option>Stamped Concrete</option>
                    <option>Coloured Concrete</option>
                    <option>Not Sure Yet</option>
                  </select>
                </label>

                <label className="text-[11px] font-black uppercase tracking-[0.12em] sm:col-span-2">
                  Project details
                  <textarea
                    rows={4}
                    placeholder="Tell us about the project, approximate size, timeline, and anything else that matters..."
                    className="mt-3 w-full resize-none border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-black/30 focus:border-[#2d3340]"
                  />
                </label>

                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="mt-3 w-full border border-black bg-[#111111] px-8 py-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#2d3340]"
                  >
                    Request My Estimate ↗
                  </button>

                  <p className="mt-3 text-center text-[10px] text-black/35">
                    Concept form only — not connected to Ace of Concrete.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-12 lg:px-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <span className="block text-3xl font-black uppercase tracking-[-0.05em]">
                ACE OF CONCRETE
              </span>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                Concrete solutions for residential, commercial, industrial and
                decorative applications in Calgary and surrounding areas.
              </p>
            </div>

            <div className="text-sm text-white/45 md:text-right">
              <p>(403) 800-4981</p>
              <p className="mt-1">(587) 703-0949</p>
              <p className="mt-1">Calgary & surrounding areas</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/30 sm:flex-row">
            <span>
              Concept redesign only — not an official Ace of Concrete website.
            </span>

            <a
              href="/"
              className="font-bold uppercase tracking-[0.08em] text-white/55 transition hover:text-white"
            >
              Made by Caissie ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}