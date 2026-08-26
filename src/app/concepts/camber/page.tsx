import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camber Auto Services — Concept Redesign | Made by Caissie",
  description:
    "Independent homepage concept redesign for Camber Auto Services by Made by Caissie.",
  robots: {
    index: false,
    follow: false,
  },
};

const services = [
  {
    number: "01",
    title: "Maintenance",
    text: "Oil changes, recurring maintenance, lights, filters and the everyday work that keeps your vehicle dependable.",
  },
  {
    number: "02",
    title: "Drivetrain & Repair",
    text: "Engine work, suspension, timing belts and chains, differentials and full mechanical repair.",
  },
  {
    number: "03",
    title: "Inspections",
    text: "Out-of-province inspections, vehicle checks and professional diagnosis when something just doesn't feel right.",
  },
  {
    number: "04",
    title: "Tires & Alignment",
    text: "Mounting, balancing, rotations, puncture repair, seasonal swaps and vehicle alignments.",
  },
];

const reasons = [
  "Serving Calgary drivers since 1983",
  "Journeyman Red Seal mechanics",
  "Straightforward, honest recommendations",
  "Maintenance through major mechanical repair",
];

export default function CamberConcept() {
  return (
    <main className="bg-[#f2f0eb] text-[#171717]">
      {/* Concept notice */}
      <div className="bg-[#171717] px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
        Independent concept redesign by Made by Caissie — not affiliated with or
        commissioned by Camber Auto Services
      </div>

      {/* Navigation */}
      <header className="border-b border-black/10 bg-[#f2f0eb]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="leading-none">
            <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-[#c64a32]">
              Since 1983
            </span>

            <span className="mt-1 block text-2xl font-black tracking-[-0.06em]">
              CAMBER
            </span>

            <span className="block text-[9px] font-bold uppercase tracking-[0.26em] text-black/50">
              Auto Services Ltd.
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#services" className="transition hover:text-[#c64a32]">
              Services
            </a>

            <a href="#why-camber" className="transition hover:text-[#c64a32]">
              Why Camber
            </a>

            <a href="#contact" className="transition hover:text-[#c64a32]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#c64a32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a83d29]"
          >
            Book service
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-black/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]">
              <span className="h-2 w-2 rounded-full bg-[#c64a32]" />
              South Calgary Auto Repair
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-[78px]">
              Calgary&apos;s trusted independent shop
              <span className="block text-[#c64a32]">since 1983.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Qualified mechanics. Straightforward service. Complete automotive
              repair from routine maintenance to major mechanical work.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#171717] px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-[#c64a32]"
              >
                Book your service →
              </a>

              <a
                href="tel:4032520358"
                className="rounded-full border border-black/20 px-7 py-4 text-center text-sm font-bold transition hover:border-black"
              >
                Call (403) 252-0358
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5 border-t border-black/10 pt-7">
              <div>
                <p className="text-3xl font-black tracking-[-0.05em]">40+</p>
                <p className="mt-1 text-sm text-black/50">
                  years serving Calgary
                </p>
              </div>

              <div>
                <p className="text-3xl font-black tracking-[-0.05em]">
                  Red Seal
                </p>
                <p className="mt-1 text-sm text-black/50">
                  journeyman mechanics
                </p>
              </div>
            </div>
          </div>

          {/* Real shop photo */}
          <div className="relative min-h-[560px]">
            <div
              className="absolute inset-0 rounded-[32px] bg-cover bg-center shadow-[0_40px_100px_rgba(0,0,0,0.18)]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.05)), url('https://images.squarespace-cdn.com/content/v1/6099aa2bcddf473b8c518c4f/1621373995822-4K1AD30FT1TRKU5O0UXW/IMG_7663.JPG')",
              }}
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-[20px] bg-white/95 p-6 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c64a32]">
                Complete mechanical service
              </p>

              <p className="mt-2 text-xl font-black tracking-[-0.03em]">
                One shop for the work your vehicle actually needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#171717] text-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-6 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-10">
          {reasons.map((reason, index) => (
            <div key={reason} className="px-5 py-8 first:pl-0">
              <span className="text-xs font-bold text-[#dd6a50]">
                0{index + 1}
              </span>

              <p className="mt-3 max-w-[220px] text-sm font-semibold leading-6 text-white/75">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-32">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c64a32]">
              A Calgary shop you can know
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              No mystery. No unnecessary work. Just experienced mechanics taking
              care of your vehicle.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">
              From an oil change to engine work, Camber handles the mechanical
              needs of vehicles large and small — including fleet maintenance —
              with a focus on quality workmanship and reasonable pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#e8e5de]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#c64a32]">
                Complete mechanical service
              </p>

              <h2 className="text-4xl font-black tracking-[-0.055em] sm:text-5xl">
                We keep Calgary moving.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-black/55">
              Routine service, diagnosis and repairs from experienced mechanics
              who know what to look for.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[28px] bg-black/10 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.number} className="bg-[#f8f7f3] p-8 sm:p-10">
                <span className="text-xs font-bold text-[#c64a32]">
                  {service.number}
                </span>

                <h3 className="mt-14 text-2xl font-black tracking-[-0.04em]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-black/55">
                  {service.text}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-block border-b border-black/40 pb-1 text-sm font-bold"
                >
                  Ask about this service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Camber */}
      <section id="why-camber" className="bg-[#171717] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-32">
          <div
            className="min-h-[520px] rounded-[30px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,0)), url('https://images.squarespace-cdn.com/content/v1/6099aa2bcddf473b8c518c4f/1621373960042-5GZAS8TNDP3LFHBJ66IO/IMG_0059%2B2.jpg')",
            }}
          />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dd6a50]">
              Why Camber
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.04] tracking-[-0.055em] sm:text-5xl">
              Experience you can actually put your keys in.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              Camber has been servicing Calgary vehicles for more than four
              decades. Their Journeyman Red Seal mechanics diagnose the issue,
              explain the work and get the vehicle back on the road.
            </p>

            <div className="mt-10 space-y-0 border-y border-white/15">
              {[
                ["01", "Qualified mechanics"],
                ["02", "Competitive repair pricing"],
                ["03", "Central south Calgary location"],
                ["04", "Fleet maintenance available"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="flex items-center gap-5 border-b border-white/15 py-5 last:border-b-0"
                >
                  <span className="text-xs font-bold text-[#dd6a50]">
                    {number}
                  </span>

                  <span className="font-semibold text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History highlight */}
      <section className="bg-[#c64a32] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.55fr_1fr] lg:items-center lg:px-10 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              Established 1983
            </p>

            <p className="mt-4 text-7xl font-black tracking-[-0.07em] sm:text-8xl">
              40+
            </p>

            <p className="mt-1 text-sm font-semibold text-white/70">
              years serving Calgary drivers
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-black leading-[1.03] tracking-[-0.05em] sm:text-5xl">
              Four decades of Calgary auto service.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Vehicles have changed dramatically since Camber opened its doors.
              The value of experienced mechanics, straightforward advice and
              quality work hasn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#f2f0eb]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-32">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c64a32]">
              Need your vehicle looked at?
            </p>

            <h2 className="mt-5 max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl">
              Talk to a mechanic.
              <span className="block text-black/30">Not a call centre.</span>
            </h2>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:4032520358"
                className="rounded-full bg-[#171717] px-7 py-4 text-center text-sm font-bold text-white"
              >
                Call (403) 252-0358
              </a>

              <a
                href="mailto:josh@camberauto.com"
                className="rounded-full border border-black/20 px-7 py-4 text-center text-sm font-bold"
              >
                Email the shop
              </a>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c64a32]">
              Visit Camber
            </p>

            <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">
              4 - 6304 Burbank Rd SE
              <span className="block text-black/45">Calgary, Alberta</span>
            </h3>

            <div className="mt-9 border-t border-black/10 pt-7">
              <div className="flex justify-between gap-5 py-2 text-sm">
                <span className="text-black/45">Monday–Friday</span>
                <span className="font-bold">7:30am–5:00pm</span>
              </div>

              <div className="flex justify-between gap-5 py-2 text-sm">
                <span className="text-black/45">Phone</span>
                <span className="font-bold">(403) 252-0358</span>
              </div>

              <div className="flex justify-between gap-5 py-2 text-sm">
                <span className="text-black/45">Email</span>
                <span className="font-bold">josh@camberauto.com</span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=6304+Burbank+Rd+SE+Calgary"
              target="_blank"
              rel="noreferrer"
              className="mt-8 block rounded-full bg-[#c64a32] px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-[#a83d29]"
            >
              Get directions →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-[#dd6a50]">
                Since 1983
              </span>

              <span className="mt-1 block text-2xl font-black tracking-[-0.06em]">
                CAMBER
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-white/35">
                Auto Services Ltd.
              </span>
            </div>

            <div className="text-sm text-white/45 sm:text-right">
              <p>4 - 6304 Burbank Rd SE, Calgary</p>
              <p className="mt-1">(403) 252-0358</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
            <span>Concept homepage — not an official Camber website.</span>

            <a
              href="/"
              className="font-semibold text-white/50 transition hover:text-white"
            >
              Concept by Made by Caissie →
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}