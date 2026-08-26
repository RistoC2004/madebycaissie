import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pure.Form Salon — Concept Redesign | Made by Caissie",
  description:
    "Independent website concept for Pure.Form Salon by Made by Caissie.",
  robots: {
    index: false,
    follow: false,
  },
};

const stylistLevels = [
  {
    number: "01",
    level: "Master",
    description:
      "Seasoned hair artists with extensive experience, advanced technical knowledge and a highly developed personal craft.",
  },
  {
    number: "02",
    level: "Elite",
    description:
      "Experienced stylists with advanced skills who continue to develop their craft while building long-term client relationships.",
  },
  {
    number: "03",
    level: "Premier",
    description:
      "Stylists who have completed an apprenticeship under Pure.Form's Master team and continue advancing their technical skill set.",
  },
  {
    number: "04",
    level: "New Talent",
    description:
      "Emerging stylists with a strong technical foundation, trained through Pure.Form's internal education and apprenticeship system.",
  },
];

const serviceMenu = [
  {
    service: "Haircut",
    note: "Scalp massage, blowdry & style included",
    master: "$95+",
    elite: "$75+",
    premier: "$55+",
    talent: "$45+",
  },
  {
    service: "Root Colour",
    note: "Starting price",
    master: "$135+",
    elite: "$115+",
    premier: "$95+",
    talent: "$90+",
  },
  {
    service: "Full Colour",
    note: "Roots + ends",
    master: "$195+",
    elite: "$175+",
    premier: "$155+",
    talent: "$145+",
  },
  {
    service: "Blonding",
    note: "Starting range",
    master: "$195–300+",
    elite: "$175–250+",
    premier: "$155–200+",
    talent: "$145–185+",
  },
];

const hours = [
  ["Monday", "Closed"],
  ["Tuesday", "9:00 — 5:00"],
  ["Wednesday", "10:00 — 8:00"],
  ["Thursday", "10:00 — 8:00"],
  ["Friday", "9:00 — 6:00"],
  ["Saturday", "9:00 — 5:00"],
  ["Sunday", "Closed"],
];

export default function PureFormConcept() {
  return (
    <main className="overflow-hidden bg-[#f3efe8] text-[#151311]">
      {/* Concept notice */}
      <div className="bg-[#151311] px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
        Independent concept redesign by Made by Caissie — not affiliated with or
        commissioned by Pure.Form Salon
      </div>

      {/* Navigation */}
      <header className="border-b border-black/15">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 lg:px-12">
          <a href="#top" className="flex items-end gap-1 leading-none">
            <span className="font-serif text-3xl italic tracking-[-0.06em]">
              Pure.
            </span>
            <span className="text-3xl font-black tracking-[-0.06em]">Form</span>
          </a>

          <nav className="hidden items-center gap-10 text-[11px] font-bold uppercase tracking-[0.15em] lg:flex">
            <a href="#artists" className="transition hover:opacity-40">
              Artists
            </a>
            <a href="#services" className="transition hover:opacity-40">
              Services
            </a>
            <a href="#story" className="transition hover:opacity-40">
              Our Story
            </a>
            <a href="#visit" className="transition hover:opacity-40">
              Visit
            </a>
          </nav>

          <a
            href="#booking"
            className="border-b-2 border-[#151311] pb-1 text-[11px] font-black uppercase tracking-[0.15em]"
          >
            Book an appointment ↗
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-[#f3efe8]">
        <div className="mx-auto grid min-h-[760px] max-w-[1500px] border-x border-black/10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Hero text */}
          <div className="flex flex-col justify-between border-b border-black/10 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em]">
                Calgary · Beltline
              </p>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/35">
                20+ years
              </p>
            </div>

            <div className="py-20 lg:py-12">
              <p className="mb-7 font-serif text-2xl italic text-[#7c2938] sm:text-3xl">
                Hair, shaped around you.
              </p>

              <h1 className="font-serif text-[76px] leading-[0.77] tracking-[-0.075em] sm:text-[108px] xl:text-[142px]">
                Pure.
                <span className="block pl-[13%] not-italic">Form</span>
              </h1>

              <div className="mt-14 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-md text-lg leading-8 text-black/55">
                  Individual hair artistry built on experience, education and
                  relationships — in the heart of Calgary&apos;s Beltline.
                </p>

                <p className="font-serif text-2xl italic text-[#7c2938]">
                  Since the early 2000s.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 border-t border-black/15 pt-6 sm:flex-row sm:items-center">
              <p className="max-w-sm text-[11px] font-bold uppercase leading-6 tracking-[0.14em] text-black/40">
                Cuts · Colour · Blonding
                <br />
                Extensions · Treatments · Styling
              </p>

              <a
                href="#booking"
                className="bg-[#151311] px-8 py-5 text-center text-[11px] font-black uppercase tracking-[0.15em] text-white transition hover:bg-[#7c2938]"
              >
                Find your appointment
              </a>
            </div>
          </div>

          {/* Full-bleed editorial image */}
          <div className="relative min-h-[620px] overflow-hidden bg-[#171413] lg:min-h-full">
            <div
              className="absolute inset-0 bg-cover grayscale"
              style={{
                backgroundImage: "url('/pureform/team.jpg')",
                backgroundPosition: "center 38%",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />

            <div className="absolute bottom-0 left-0 top-0 w-[7px] bg-[#7c2938]" />

            <div className="absolute -right-3 top-5 font-serif text-[150px] leading-none tracking-[-0.1em] text-white/[0.08] sm:text-[210px]">
              PF
            </div>

            <div className="absolute left-8 right-8 top-8 flex items-center justify-between sm:left-10 sm:right-10 sm:top-10">
              <span className="text-[9px] font-black uppercase tracking-[0.23em] text-white/65">
                Pure.Form Salon
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-white/45">
                Calgary
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d698a7]">
                Individual expression
              </p>

              <p className="mt-5 max-w-xl font-serif text-5xl italic leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Your hair should feel like you.
              </p>

              <div className="mt-8 flex items-center gap-5 border-t border-white/25 pt-5">
                <span className="h-px w-10 bg-white/60" />

                <p className="max-w-sm text-xs leading-5 text-white/75">
                  An experienced team of artists built around education,
                  creativity and personal connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial ticker */}
      <section className="overflow-hidden border-y border-black bg-[#151311] py-5 text-white">
        <div className="flex min-w-max items-center gap-10 whitespace-nowrap">
          {[
            "CUT",
            "COLOUR",
            "BLONDING",
            "EXTENSIONS",
            "EDUCATION",
            "STYLE",
            "CUT",
            "COLOUR",
            "BLONDING",
            "EXTENSIONS",
          ].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-10">
              <span className="font-serif text-3xl italic tracking-[-0.03em]">
                {item}
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#a85466]" />
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-[1500px] border-x border-black/10 px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7c2938]">
                Our philosophy
              </p>
            </div>

            <div>
              <p className="max-w-5xl font-serif text-4xl leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                Great hair isn&apos;t a trend.
                <span className="text-black/25">
                  {" "}
                  It&apos;s understanding the person wearing it.
                </span>
              </p>

              <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-2">
                <p className="max-w-lg leading-7 text-black/55">
                  Pure.Form has spent more than two decades building a salon
                  around talented artists, exceptional service, continued
                  education and meaningful client relationships.
                </p>

                <p className="max-w-lg leading-7 text-black/55">
                  Every appointment is personal. The cut, colour and approach are
                  shaped around the guest rather than forcing every guest into
                  the same look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="story" className="bg-[#d8c9bd]">
        <div className="mx-auto grid max-w-[1500px] border-x border-black/10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[650px] overflow-hidden bg-[#b9aaa0]">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale"
              style={{
                backgroundImage: "url('/pureform/angela.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                Founder · Educator · Stylist
              </p>
            </div>
          </div>

          <div className="flex items-center p-8 sm:p-12 lg:p-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7c2938]">
                The founder
              </p>

              <h2 className="mt-6 font-serif text-6xl italic leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                Angela
                <span className="block pl-[14%] not-italic">Alexa.</span>
              </h2>

              <div className="mt-10 border-t border-black/20 pt-8">
                <p className="max-w-xl text-lg leading-8 text-black/60">
                  With more than three decades in the hair industry and over two
                  decades operating Pure.Form, Angela has built an environment
                  centred around trust, education and the growth of both clients
                  and stylists.
                </p>

                <p className="mt-6 max-w-xl leading-7 text-black/50">
                  Her international education has helped shape Pure.Form&apos;s
                  internal curriculum and apprenticeship approach — giving the
                  salon a distinct culture of continuous learning.
                </p>
              </div>

              <div className="mt-12 flex items-end gap-5">
                <p className="font-serif text-6xl italic">30+</p>

                <p className="max-w-[140px] pb-2 text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-black/45">
                  Years in the hair industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists */}
      <section id="artists" className="bg-[#151311] text-white">
        <div className="mx-auto max-w-[1500px] border-x border-white/10 px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#bd7182]">
                The Pure.Formers
              </p>

              <h2 className="mt-5 font-serif text-6xl italic leading-none tracking-[-0.055em] sm:text-7xl">
                Find your artist.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-white/45">
              Different levels of experience. One shared commitment to
              education, creativity and the individual guest.
            </p>
          </div>

          <div className="border-t border-white/20">
            {stylistLevels.map((artist) => (
              <div
                key={artist.level}
                className="group grid gap-6 border-b border-white/20 py-9 md:grid-cols-[80px_0.7fr_1.3fr]"
              >
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#bd7182]">
                  {artist.number}
                </span>

                <h3 className="font-serif text-4xl italic tracking-[-0.04em] transition group-hover:pl-3 group-hover:text-[#d792a2]">
                  {artist.level}
                </h3>

                <p className="max-w-2xl leading-7 text-white/45">
                  {artist.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-px bg-white/10 lg:grid-cols-2">
            <div className="bg-[#211d1c] p-8 sm:p-10 lg:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#bd7182]">
                Education
              </p>

              <p className="mt-16 max-w-xl font-serif text-5xl italic leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                Better artists never stop learning.
              </p>
            </div>

            <div className="flex items-end bg-[#7c2938] p-8 sm:p-10 lg:p-12">
              <p className="max-w-xl text-lg leading-8 text-white/60">
                Pure.Form&apos;s stylist progression and apprenticeship model
                gives clients a range of experience levels while keeping
                education at the centre of the salon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#f3efe8]">
        <div className="mx-auto max-w-[1500px] border-x border-black/10 px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7c2938]">
                Service menu
              </p>

              <h2 className="mt-5 font-serif text-6xl italic leading-[0.92] tracking-[-0.06em] sm:text-7xl">
                Choose the service.
                <span className="block pl-[10%] text-black/25">
                  Choose the artist.
                </span>
              </h2>

              <p className="mt-8 max-w-md leading-7 text-black/50">
                Pure.Form&apos;s pricing reflects both the service and the
                stylist&apos;s experience level, giving guests more control over
                their appointment.
              </p>
            </div>

            <div>
              <div className="hidden grid-cols-[1.2fr_repeat(4,0.65fr)] border-b border-black pb-4 text-[9px] font-black uppercase tracking-[0.14em] text-black/35 md:grid">
                <span>Service</span>
                <span>Master</span>
                <span>Elite</span>
                <span>Premier</span>
                <span>New Talent</span>
              </div>

              {serviceMenu.map((service) => (
                <div
                  key={service.service}
                  className="border-b border-black/15 py-7"
                >
                  <div className="grid gap-6 md:grid-cols-[1.2fr_repeat(4,0.65fr)] md:items-center">
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-[-0.035em]">
                        {service.service}
                      </h3>

                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-black/35">
                        {service.note}
                      </p>
                    </div>

                    {[
                      ["Master", service.master],
                      ["Elite", service.elite],
                      ["Premier", service.premier],
                      ["New Talent", service.talent],
                    ].map(([label, price]) => (
                      <div key={label}>
                        <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-black/35 md:hidden">
                          {label}
                        </p>

                        <p className="font-serif text-xl italic">{price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-7 flex flex-col justify-between gap-4 border-t-2 border-black pt-6 sm:flex-row">
                <div>
                  <p className="font-serif text-2xl italic">Hair Extensions</p>

                  <p className="mt-1 text-xs text-black/40">
                    Great Lengths + braidless weave
                  </p>
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.14em]">
                  Complimentary consultation required
                </p>
              </div>

              <p className="mt-6 text-xs leading-5 text-black/35">
                Starting prices shown. Corrective colour and extension services
                require consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial statement */}
      <section className="bg-[#7c2938] text-white">
        <div className="mx-auto flex min-h-[500px] max-w-[1500px] items-center justify-center border-x border-white/10 px-6 py-20 text-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
              Twenty years in the Beltline
            </p>

            <p className="mx-auto mt-8 max-w-5xl font-serif text-5xl italic leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Trends change.
              <span className="block text-white/35">
                Good relationships don&apos;t.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-[1500px] border-x border-black/10 px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <div className="grid border-t-2 border-black lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border-b border-black/15 py-12 lg:border-b-0 lg:border-r lg:pr-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7c2938]">
                Start your appointment
              </p>

              <h2 className="mt-6 font-serif text-6xl italic leading-[0.9] tracking-[-0.06em] sm:text-7xl">
                What does your hair need?
              </h2>

              <p className="mt-8 max-w-md leading-7 text-black/50">
                Instead of making a new guest guess where to start, the website
                can guide them toward the right service and stylist level.
              </p>
            </div>

            <div className="py-12 lg:pl-14">
              <form className="space-y-9">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em]">
                    01 · I&apos;m looking for
                  </p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-3">
                    {[
                      "Haircut",
                      "Colour",
                      "Blonding",
                      "Extensions",
                      "Treatment",
                      "Not sure",
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="border border-black/20 px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.08em] transition hover:border-[#7c2938] hover:bg-[#7c2938] hover:text-white"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em]">
                    02 · Choose an experience level
                  </p>

                  <div className="mt-5 grid gap-px bg-black/15 sm:grid-cols-4">
                    {["Master", "Elite", "Premier", "New Talent"].map(
                      (level) => (
                        <button
                          key={level}
                          type="button"
                          className="bg-[#f7f4ee] px-4 py-5 text-xs font-bold uppercase tracking-[0.08em] transition hover:bg-[#151311] hover:text-white"
                        >
                          {level}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                <div className="border-t border-black/15 pt-7">
                  <button
                    type="button"
                    className="w-full bg-[#151311] px-8 py-5 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-[#7c2938]"
                  >
                    Continue to online booking ↗
                  </button>

                  <p className="mt-3 text-center text-[10px] text-black/30">
                    Concept interaction only — not connected to Pure.Form&apos;s
                    booking system.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="bg-[#151311] text-white">
        <div className="mx-auto grid max-w-[1500px] border-x border-white/10 lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#bd7182]">
              Visit Pure.Form
            </p>

            <h2 className="mt-7 font-serif text-6xl italic leading-[0.94] tracking-[-0.055em]">
              In the heart of the Beltline.
            </h2>

            <div className="mt-10 border-t border-white/15 pt-7">
              <p className="text-xl">
                100, 326 11 Avenue SW
                <span className="block text-white/40">Calgary, Alberta</span>
              </p>

              <div className="mt-10 space-y-2 text-sm">
                <p>403 266 7335</p>
                <p className="text-white/45">pure.form@telus.net</p>
                <p className="text-white/45">@pureformsalon</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
              Salon hours
            </p>

            <div className="mt-7 border-t border-white/15">
              {hours.map(([day, time]) => (
                <div
                  key={day}
                  className="flex justify-between border-b border-white/15 py-4 text-sm"
                >
                  <span className="text-white/45">{day}</span>
                  <span className="font-semibold">{time}</span>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="mt-9 block bg-[#f3efe8] px-7 py-5 text-center text-[11px] font-black uppercase tracking-[0.14em] text-black transition hover:bg-[#bd7182] hover:text-white"
            >
              Book an appointment
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#eee8df]">
        <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <div className="flex items-end gap-1">
                <span className="font-serif text-4xl italic tracking-[-0.06em]">
                  Pure.
                </span>

                <span className="text-4xl font-black tracking-[-0.06em]">
                  Form
                </span>
              </div>

              <p className="mt-4 text-sm text-black/40">
                Hair artistry · Calgary Beltline
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-black/40 md:text-right">
              Cuts, colour, blonding, extensions and styling shaped around the
              individual guest.
            </p>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-black/10 pt-6 text-[10px] text-black/35 sm:flex-row">
            <span>
              Concept redesign only — not an official Pure.Form Salon website.
            </span>

            <a
              href="/"
              className="font-bold uppercase tracking-[0.12em] text-black/55"
            >
              Made by Caissie ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}