import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Highlander Roofing — Concept Redesign | Made by Caissie",
  description:
    "Independent website concept for Highlander Roofing by Made by Caissie.",
  robots: {
    index: false,
    follow: false,
  },
};

const services = [
  {
    title: "Roofing",
    subtitle: "Repair · Replacement · Installation",
    text: "Complete residential and commercial roofing solutions built for Calgary weather.",
  },
  {
    title: "Siding",
    subtitle: "Protection · Efficiency · Curb Appeal",
    text: "Exterior siding that protects the property while giving the entire home a cleaner finish.",
  },
  {
    title: "Fascia & Soffit",
    subtitle: "Ventilation · Protection · Finish",
    text: "The finishing details that help protect the roof system and complete the exterior.",
  },
];

const trustItems = [
  "Family owned & operated",
  "Licensed & insured",
  "WCB covered",
  "10-year workmanship warranty",
];

const projectImages = [
  "https://static.wixstatic.com/media/8c3b6f_b4a6b190a30f468dbed88c7a8f22c555~mv2.jpg/v1/fill/w_980,h_412,al_c,q_85,usm_0.66_1.00_0.01/8c3b6f_b4a6b190a30f468dbed88c7a8f22c555~mv2.jpg",
  "https://static.wixstatic.com/media/1dd9e4152e914606b0776a1b449e0727.jpg/v1/fill/w_752,h_501,al_c,q_85,usm_0.66_1.00_0.01/1dd9e4152e914606b0776a1b449e0727.jpg",
  "https://static.wixstatic.com/media/3a5c0214d9384d24a6b55685b65eb68e.jpg/v1/fill/w_425,h_283,al_c,q_80,usm_0.66_1.00_0.01/Fixing%20the%20Roof.jpg",
];

export default function HighlanderConcept() {
  return (
    <main className="overflow-hidden bg-[#ece9e1] text-[#161714]">
      {/* Concept disclosure */}
      <div className="relative z-50 bg-[#161714] px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
        Independent concept by Made by Caissie · Not affiliated with or
        commissioned by Highlander Roofing
      </div>

      {/* Hero */}
      <section
        id="top"
        className="relative min-h-[820px] bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(17,18,16,.92) 0%,
            rgba(17,18,16,.72) 43%,
            rgba(17,18,16,.18) 72%,
            rgba(17,18,16,.08) 100%
          ), url('${projectImages[0]}')`,
        }}
      >
        {/* Navigation */}
        <header className="relative z-20 border-b border-white/20">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-7 lg:px-12">
            <a href="#top">
              <span className="block text-[10px] font-bold uppercase tracking-[0.32em] text-[#d39062]">
                Calgary, Alberta
              </span>

              <div className="mt-1 flex items-end gap-3">
                <span className="text-2xl font-black tracking-[-0.055em]">
                  HIGHLANDER
                </span>

                <span className="mb-[3px] text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Roofing
                </span>
              </div>
            </a>

            <nav className="hidden items-center gap-10 text-xs font-bold uppercase tracking-[0.12em] lg:flex">
              <a
                href="#services"
                className="border-b border-transparent pb-1 transition hover:border-white"
              >
                Services
              </a>

              <a
                href="#projects"
                className="border-b border-transparent pb-1 transition hover:border-white"
              >
                Projects
              </a>

              <a
                href="#warranty"
                className="border-b border-transparent pb-1 transition hover:border-white"
              >
                Warranty
              </a>

              <a
                href="#estimate"
                className="border-b border-transparent pb-1 transition hover:border-white"
              >
                Contact
              </a>
            </nav>

            <a
              href="#estimate"
              className="bg-[#c96f3b] px-5 py-3 text-xs font-black uppercase tracking-[0.08em] transition hover:bg-[#e08249]"
            >
              Free Estimate
            </a>
          </div>
        </header>

        {/* Main hero content */}
        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1400px] items-end px-6 pb-20 pt-28 lg:px-12 lg:pb-24">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <div className="h-px w-14 bg-[#d39062]" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e3b08d]">
                Roofing · Siding · Exteriors
              </p>
            </div>

            <h1 className="max-w-5xl text-[58px] font-black uppercase leading-[0.86] tracking-[-0.065em] sm:text-[76px] lg:text-[112px]">
              Built above
              <span className="block text-[#dc8050]">the standard.</span>
            </h1>

            <div className="mt-10 grid max-w-4xl gap-8 border-t border-white/25 pt-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-lg leading-8 text-white/68">
                Professional roofing and exterior work for Calgary properties,
                backed by local ownership and a 10-year workmanship warranty.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#estimate"
                  className="bg-white px-7 py-4 text-center text-xs font-black uppercase tracking-[0.1em] text-black"
                >
                  Request Estimate
                </a>

                <a
                  href="tel:4032002250"
                  className="border border-white/40 px-7 py-4 text-center text-xs font-black uppercase tracking-[0.1em] text-white"
                >
                  403-200-2250
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Angled bottom */}
        <div
          className="absolute -bottom-px left-0 h-20 w-full bg-[#ece9e1]"
          style={{
            clipPath: "polygon(0 72%, 68% 0, 100% 44%, 100% 100%, 0 100%)",
          }}
        />
      </section>

      {/* Trust band */}
      <section className="px-6 pb-24 pt-10 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] border-y border-black/15 md:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item}
              className={`py-7 md:px-7 ${
                index !== trustItems.length - 1
                  ? "border-b border-black/15 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#b86034]">
                0{index + 1}
              </span>

              <p className="mt-3 text-sm font-bold uppercase tracking-[0.04em]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services selector */}
      <section id="services" className="bg-[#161714] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d39062]">
                What we protect
              </p>

              <h2 className="mt-5 max-w-xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-6xl">
                The exterior is a system.
              </h2>

              <p className="mt-7 max-w-md text-lg leading-8 text-white/52">
                Roofing is only one part of protecting a property. Highlander
                handles the exterior pieces that work together to keep weather
                outside where it belongs.
              </p>
            </div>

            <div className="border-t border-white/20">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group grid gap-6 border-b border-white/20 py-9 transition lg:grid-cols-[70px_0.75fr_1fr]"
                >
                  <span className="text-xs font-black text-[#d39062]">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-[-0.04em] transition group-hover:text-[#e08a58]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                      {service.subtitle}
                    </p>
                  </div>

                  <div>
                    <p className="max-w-lg leading-7 text-white/55">
                      {service.text}
                    </p>

                    <a
                      href="#estimate"
                      className="mt-5 inline-block text-xs font-black uppercase tracking-[0.1em] text-[#dc8050]"
                    >
                      Get an estimate ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-[#f5f3ed]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b86034]">
                Recent work
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-[-0.055em] sm:text-6xl">
                Built to be seen.
                <span className="block text-black/25">Built to last.</span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-black/50">
              Roofing should improve more than protection. Done properly, it
              changes the entire exterior of the property.
            </p>
          </div>

          {/* Asymmetric gallery */}
          <div className="grid min-h-[720px] gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <div
              className="relative min-h-[500px] bg-cover bg-center lg:min-h-full"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,.48), rgba(0,0,0,.02)), url('${projectImages[1]}')`,
              }}
            >
              <div className="absolute bottom-0 left-0 bg-[#161714] px-7 py-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d39062]">
                  Residential
                </p>

                <p className="mt-2 text-xl font-black uppercase">
                  Complete Roofing System
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div
                className="min-h-[350px] bg-cover bg-center"
                style={{
                  backgroundImage: `url('${projectImages[2]}')`,
                }}
              />

              <div className="flex min-h-[350px] flex-col justify-between bg-[#c96f3b] p-8 text-white lg:p-10">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-white/55">
                  Highlander Roofing
                </span>

                <div>
                  <p className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em]">
                    Calgary weather doesn&apos;t compromise.
                  </p>

                  <p className="mt-6 max-w-md leading-7 text-white/70">
                    Neither should the exterior protecting your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section id="warranty" className="relative bg-[#ded8cc]">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative flex min-h-[580px] items-center overflow-hidden bg-[#c96f3b] px-6 py-20 text-white lg:px-12">
            <div
              className="absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 border-[65px] border-white/8"
              style={{
                transform:
                  "translateY(-50%) rotate(45deg)",
              }}
            />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/55">
                Workmanship Warranty
              </p>

              <p className="mt-4 text-[150px] font-black leading-[0.8] tracking-[-0.09em] sm:text-[190px]">
                10
              </p>

              <p className="mt-5 text-3xl font-black uppercase tracking-[-0.04em]">
                Years
              </p>
            </div>
          </div>

          <div className="flex items-center px-6 py-20 lg:px-16 lg:py-24">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b86034]">
                Work that stays backed
              </p>

              <h2 className="mt-5 max-w-2xl text-5xl font-black uppercase leading-[0.94] tracking-[-0.055em] sm:text-6xl">
                Installation day isn&apos;t where responsibility ends.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-black/55">
                Highlander backs its roofing workmanship for ten years. That
                means the job is built with the expectation that it should still
                feel like the right decision long after the crew leaves.
              </p>

              <a
                href="#estimate"
                className="mt-9 inline-block border-b-2 border-black pb-2 text-xs font-black uppercase tracking-[0.12em]"
              >
                Talk about your roof ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hail */}
      <section className="bg-[#242520] text-white">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12 lg:py-32">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d39062]">
              Calgary storm damage
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Hail doesn&apos;t ask if your roof is ready.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/52">
              After severe weather, damage isn&apos;t always obvious from the
              ground. A proper inspection can identify problems before the next
              storm turns them into bigger ones.
            </p>
          </div>

          <div className="border-l border-white/20 pl-8 lg:pl-12">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-white/45">
              Concerned about your roof?
            </p>

            <p className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.04em]">
              Start with an inspection and know what you&apos;re dealing with.
            </p>

            <a
              href="#estimate"
              className="mt-8 inline-block bg-[#c96f3b] px-7 py-4 text-xs font-black uppercase tracking-[0.1em]"
            >
              Request an inspection
            </a>
          </div>
        </div>
      </section>

      {/* Estimate */}
      <section id="estimate" className="bg-[#ece9e1]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid border-t-4 border-[#161714] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-black/15 py-12 lg:border-b-0 lg:border-r lg:pr-14">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b86034]">
                Free estimate
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">
                Tell us what&apos;s happening up top.
              </h2>

              <p className="mt-8 max-w-md text-lg leading-8 text-black/52">
                Repair, replacement, hail concern or exterior project — send
                Highlander the basics and start the conversation.
              </p>

              <div className="mt-12 border-t border-black/15 pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/35">
                  Call or text
                </p>

                <a
                  href="tel:4032002250"
                  className="mt-2 block text-3xl font-black tracking-[-0.04em]"
                >
                  403-200-2250
                </a>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-black/35">
                  Email
                </p>

                <a
                  href="mailto:highlanderroofing@shaw.ca"
                  className="mt-2 block break-all text-lg font-bold"
                >
                  highlanderroofing@shaw.ca
                </a>
              </div>
            </div>

            {/* Concept estimate form */}
            <div className="py-12 lg:pl-14">
              <form className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
                <label className="text-[11px] font-black uppercase tracking-[0.12em]">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-black/30 focus:border-[#b86034]"
                  />
                </label>

                <label className="text-[11px] font-black uppercase tracking-[0.12em]">
                  Phone
                  <input
                    type="tel"
                    placeholder="403-555-0123"
                    className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-black/30 focus:border-[#b86034]"
                  />
                </label>

                <label className="text-[11px] font-black uppercase tracking-[0.12em] sm:col-span-2">
                  Property Address
                  <input
                    type="text"
                    placeholder="Calgary, Alberta"
                    className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-black/30 focus:border-[#b86034]"
                  />
                </label>

                <label className="text-[11px] font-black uppercase tracking-[0.12em]">
                  Project Type
                  <select className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none">
                    <option>Roof repair</option>
                    <option>Roof replacement</option>
                    <option>Hail / storm damage</option>
                    <option>Siding</option>
                    <option>Fascia / soffit</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="text-[11px] font-black uppercase tracking-[0.12em]">
                  Preferred Contact
                  <select className="mt-3 w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none">
                    <option>Phone</option>
                    <option>Text</option>
                    <option>Email</option>
                  </select>
                </label>

                <label className="text-[11px] font-black uppercase tracking-[0.12em] sm:col-span-2">
                  What&apos;s going on?
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about the project..."
                    className="mt-3 w-full resize-none border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-black/30 focus:border-[#b86034]"
                  />
                </label>

                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="mt-3 w-full bg-[#161714] px-8 py-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#c96f3b]"
                  >
                    Request My Free Estimate ↗
                  </button>

                  <p className="mt-3 text-center text-[10px] text-black/35">
                    Concept form only — not connected to Highlander Roofing.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#c96f3b] text-white">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-end lg:px-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/55">
              Highlander Roofing
            </p>

            <p className="mt-3 text-2xl font-black uppercase tracking-[-0.03em]">
              1230 Millview Rd SW
              <span className="block text-white/60">Calgary, Alberta</span>
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=1230+Millview+Rd+SW+Calgary+AB"
            target="_blank"
            rel="noreferrer"
            className="border-b border-white pb-1 text-xs font-black uppercase tracking-[0.12em]"
          >
            Get Directions ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#161714] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <span className="text-3xl font-black uppercase tracking-[-0.055em]">
                Highlander
              </span>

              <span className="ml-3 text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                Roofing
              </span>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                Roofing and exterior services for Calgary and surrounding
                communities.
              </p>
            </div>

            <div className="text-sm text-white/45 md:text-right">
              <p>403-200-2250</p>
              <p className="mt-1">highlanderroofing@shaw.ca</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/30 sm:flex-row">
            <span>
              Concept redesign only — not an official Highlander Roofing
              website.
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