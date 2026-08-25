import ContactForm from "@/components/ContactForm";

const services = [
  {
    number: "01",
    title: "Modern Website Redesign",
    description:
      "We take websites that feel dated, cluttered, or forgotten and rebuild them into something your business can be proud of.",
  },
  {
    number: "02",
    title: "Built for Mobile",
    description:
      "Your customers are searching from their phones. Every website is designed to look and work properly on every screen.",
  },
  {
    number: "03",
    title: "Built to Convert",
    description:
      "Clear calls to action, quote forms, reviews, services, and contact information make it easier for visitors to become customers.",
  },
  {
    number: "04",
    title: "Fast & Search Ready",
    description:
      "Modern performance, clean structure, SEO fundamentals, analytics, and the technical setup your business needs.",
  },
];

const process = [
  {
    step: "01",
    title: "Review",
    text: "We look at your current website, business, customers, and what is holding your online presence back.",
  },
  {
    step: "02",
    title: "Redesign",
    text: "We create a modern direction built around your business, brand, services, and goals.",
  },
  {
    step: "03",
    title: "Build",
    text: "Your approved design becomes a fast, responsive, fully functional website.",
  },
  {
    step: "04",
    title: "Launch",
    text: "We connect your domain, test everything, and put your new website in front of customers.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f6f2]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="heading leading-none">
            <span className="block text-[10px] font-semibold tracking-[0.28em]">
              MADE BY
            </span>
            <span className="block text-xl font-extrabold tracking-[-0.05em]">
              CAISSIE
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a className="transition hover:text-[#31594a]" href="#work">
              Work
            </a>
            <a className="transition hover:text-[#31594a]" href="#services">
              Services
            </a>
            <a className="transition hover:text-[#31594a]" href="#process">
              Process
            </a>
            <a className="transition hover:text-[#31594a]" href="#pricing">
              Pricing
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31594a]"
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="overflow-hidden">
        <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-[#31594a]" />
              Calgary, Alberta
            </div>

            <h1 className="heading max-w-4xl text-5xl font-extrabold leading-[0.96] tracking-[-0.065em] sm:text-6xl lg:text-[84px]">
              Your business grew.
              <span className="block text-[#31594a]">
                Your website should too.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5f625e] sm:text-xl">
              We redesign outdated websites for established Calgary businesses,
              giving you an online presence that finally reflects the quality
              of the business you&apos;ve built.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#31594a] px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-[#244438]"
              >
                Get a free website review →
              </a>

              <a
                href="#work"
                className="rounded-full border border-black/20 px-7 py-4 text-center text-sm font-bold transition hover:border-black hover:bg-white"
              >
                See our work
              </a>
            </div>
          </div>

          {/* Browser mockup */}
          <div className="relative">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#31594a]/10 blur-3xl" />

            <div className="relative rotate-[2deg] rounded-[26px] border border-black/10 bg-white p-3 shadow-[0_40px_100px_rgba(0,0,0,0.14)]">
              <div className="overflow-hidden rounded-[18px] border border-black/10">
                <div className="flex items-center gap-2 border-b border-black/10 bg-[#efefeb] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/20" />

                  <div className="mx-auto rounded-md bg-white px-12 py-1 text-[9px] text-black/40">
                    yourbusiness.ca
                  </div>
                </div>

                <div className="bg-[#17221e] p-8 text-white sm:p-10">
                  <div className="mb-20 flex items-center justify-between">
                    <div className="heading text-sm font-bold tracking-tight">
                      YOUR BUSINESS
                    </div>

                    <div className="hidden gap-4 text-[9px] text-white/60 sm:flex">
                      <span>Services</span>
                      <span>About</span>
                      <span>Contact</span>
                    </div>
                  </div>

                  <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Calgary, Alberta
                  </p>

                  <h2 className="heading max-w-md text-4xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-5xl">
                    Built on great work.
                    <span className="block text-[#a8c6b8]">
                      Presented properly.
                    </span>
                  </h2>

                  <div className="mt-7 inline-block rounded-full bg-white px-5 py-3 text-[10px] font-bold text-black">
                    Request a quote
                  </div>

                  <div className="mt-20 grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-xl bg-white/10" />
                    <div className="h-20 rounded-xl bg-white/10" />
                    <div className="h-20 rounded-xl bg-white/10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-10">
              <p className="text-xs text-black/50">Website transformation</p>
              <p className="heading mt-1 font-bold">
                Old website → modern business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reputation */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#31594a]">
            The problem
          </p>

          <h2 className="heading max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Your reputation shouldn&apos;t be better than your website.
          </h2>

          <div className="mt-12 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-8 text-[#62645f]">
              You&apos;ve spent years earning customers, reviews, referrals,
              and trust. But when someone finds you online, an outdated website
              can make an established company feel years behind.
            </p>

            <p className="max-w-xl text-lg leading-8 text-[#62645f]">
              Made by Caissie closes that gap. We take what already makes your
              business great and build a website that communicates it clearly,
              professionally, and immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#31594a]">
              Before / After
            </p>

            <h2 className="heading text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
              See the difference.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-[#62645f]">
            We&apos;re currently building our first Calgary concept redesigns.
            They&apos;ll appear here soon.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-black/10 bg-[#e9e7e0] p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/45">
                Before
              </span>

              <span className="text-xs text-black/40">Example</span>
            </div>

            <div className="flex min-h-[380px] items-center justify-center rounded-[20px] border border-black/10 bg-white">
              <div className="w-4/5 space-y-4 text-center">
                <div className="mx-auto h-5 w-32 bg-black/20" />
                <div className="mx-auto h-3 w-56 bg-black/10" />
                <div className="mx-auto h-3 w-48 bg-black/10" />
                <div className="mx-auto mt-6 h-9 w-28 border border-black/20" />

                <div className="mx-auto mt-14 grid w-full grid-cols-3 gap-2">
                  <div className="h-24 bg-black/5" />
                  <div className="h-24 bg-black/5" />
                  <div className="h-24 bg-black/5" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-[#17221e] p-5 text-white">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                After
              </span>

              <span className="text-xs text-white/40">Made by Caissie</span>
            </div>

            <div className="flex min-h-[380px] items-end overflow-hidden rounded-[20px] bg-[#31594a] p-8">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Calgary&apos;s trusted professionals
                </p>

                <h3 className="heading max-w-md text-4xl font-bold leading-none tracking-[-0.05em]">
                  A better first impression.
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
                  Clear messaging, modern design, stronger trust, and an obvious
                  path to becoming a customer.
                </p>

                <div className="mt-6 inline-block rounded-full bg-white px-5 py-3 text-xs font-bold text-black">
                  Request a quote →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#8db3a3]">
                What we do
              </p>

              <h2 className="heading text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl">
                Good websites don&apos;t just look better.
                <span className="block text-white/40">They work better.</span>
              </h2>
            </div>

            <div>
              {services.map((service) => (
                <div
                  key={service.number}
                  className="grid gap-5 border-t border-white/15 py-8 sm:grid-cols-[70px_1fr]"
                >
                  <span className="text-sm text-white/35">
                    {service.number}
                  </span>

                  <div>
                    <h3 className="heading text-2xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-white/55">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#31594a]">
            How it works
          </p>

          <h2 className="heading max-w-3xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            From outdated to outstanding.
          </h2>

          <div className="mt-16 grid border-y border-black/10 md:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.step}
                className={`py-9 md:px-7 ${
                  index !== process.length - 1
                    ? "border-b border-black/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <span className="text-sm font-bold text-[#31594a]">
                  {item.step}
                </span>

                <h3 className="heading mt-10 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#666963]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="rounded-[34px] bg-[#31594a] p-8 text-white sm:p-12 lg:p-16">
            <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/55">
                  Simple pricing
                </p>

                <h2 className="heading max-w-2xl text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl">
                  Your new website, without the agency runaround.
                </h2>

                <p className="mt-6 max-w-xl leading-7 text-white/70">
                  Straightforward projects, clear expectations, and a modern
                  website built around your business.
                </p>
              </div>

              <div className="rounded-[26px] bg-white p-7 text-black sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#31594a]">
                  Website Refresh
                </p>

                <div className="mt-5 flex items-end gap-2">
                  <span className="heading text-5xl font-extrabold tracking-[-0.06em]">
                    $1,750
                  </span>

                  <span className="mb-1 text-sm text-black/45">
                    starting at
                  </span>
                </div>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>✓ Custom website redesign</li>
                  <li>✓ Up to 5 core pages</li>
                  <li>✓ Mobile-first development</li>
                  <li>✓ Contact or quote forms</li>
                  <li>✓ Local SEO fundamentals</li>
                  <li>✓ Performance optimization</li>
                  <li>✓ Two revision rounds</li>
                  <li>✓ Launch & domain setup</li>
                </ul>

                <a
                  href="#contact"
                  className="mt-9 block rounded-full bg-[#111111] px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-[#31594a]"
                >
                  Talk about your website →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#e9e7e0]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#31594a]">
              Start here
            </p>

            <h2 className="heading max-w-xl text-5xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl">
              Think your website needs an upgrade?
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#62645f]">
              Send us your current website. We&apos;ll take a look and tell you
              what we&apos;d improve — no pressure, no generic sales pitch.
            </p>

            <a
              href="mailto:hello@madebycaissie.com"
              className="mt-10 inline-block border-b border-black pb-1 font-bold"
            >
              hello@madebycaissie.com
            </a>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <div className="heading leading-none">
                <span className="block text-[10px] font-semibold tracking-[0.28em] text-white/50">
                  MADE BY
                </span>

                <span className="block text-2xl font-extrabold tracking-[-0.05em]">
                  CAISSIE
                </span>
              </div>

              <p className="mt-4 text-sm text-white/45">
                Modern websites for established Calgary businesses.
              </p>
            </div>

            <div className="text-sm text-white/45 sm:text-right">
              <p>Calgary, Alberta</p>

              <a
                href="mailto:hello@madebycaissie.com"
                className="mt-2 block transition hover:text-white"
              >
                hello@madebycaissie.com
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/30">
            © {new Date().getFullYear()} Made by Caissie.
          </div>
        </div>
      </footer>
    </main>
  );
}