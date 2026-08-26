import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greco's Pizza & George's Lounge — Concept | Made by Caissie",
  description:
    "Independent website concept for Greco's Pizza & George's Lounge by Made by Caissie.",
  robots: {
    index: false,
    follow: false,
  },
};

const classics = [
  {
    number: "01",
    title: "The Greco's Pie",
    kicker: "The house favourite",
    description:
      "Thick, loaded Greek-style pizza with plenty of cheese, plenty of toppings, and absolutely no interest in being delicate.",
  },
  {
    number: "02",
    title: "Hawaiian",
    kicker: "A longtime favourite",
    description:
      "Ham, pineapple, melted cheese and that unmistakable old-school neighbourhood pizza-shop comfort.",
  },
  {
    number: "03",
    title: "Meat Lovers",
    kicker: "Come hungry",
    description:
      "A heavy-duty pie built for the table — generous toppings, melted cheese and the kind of portion Greco's is known for.",
  },
];

const moreThanPizza = [
  {
    number: "01",
    title: "Greek",
    items: "Souvlaki · Greek Salad · Calamari",
  },
  {
    number: "02",
    title: "Italian",
    items: "Lasagna · Pasta · Baked Favourites",
  },
  {
    number: "03",
    title: "The Grill",
    items: "Steak Sandwiches · Dinner Plates · Comfort Food",
  },
];

const hours = [
  ["Monday", "3:00 PM — 9:00 PM"],
  ["Tuesday", "3:00 PM — 9:00 PM"],
  ["Wednesday", "3:00 PM — 9:00 PM"],
  ["Thursday", "3:00 PM — 9:00 PM"],
  ["Friday", "3:00 PM — 9:00 PM"],
  ["Saturday", "3:00 PM — 9:00 PM"],
  ["Sunday", "4:00 PM — 9:00 PM"],
];

export default function GrecosConcept() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f4ead5] text-[#201a15]">
      {/* Concept disclosure */}
      <div className="bg-[#201a15] px-4 py-3 text-center text-[9px] font-bold uppercase leading-4 tracking-[0.17em] text-[#f4ead5]/55 sm:px-5 sm:text-[10px] sm:tracking-[0.2em]">
        Independent concept redesign by Made by Caissie — not affiliated with or
        commissioned by Greco&apos;s Pizza & George&apos;s Lounge
      </div>

      {/* Navigation */}
      <header className="relative z-20 border-b-2 border-[#201a15] bg-[#f4ead5]">
        <div className="mx-auto flex w-full max-w-[1500px] min-w-0 items-center justify-between gap-3 px-4 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="group shrink-0">
            <div className="-rotate-2 border-2 border-[#201a15] bg-[#bd3526] px-3 py-2 text-[#f8e8be] shadow-[4px_4px_0_#201a15] transition group-hover:rotate-0 sm:px-4">
              <span className="block text-[8px] font-black uppercase tracking-[0.2em] sm:text-[9px] sm:tracking-[0.22em]">
                Calgary
              </span>

              <span className="block font-serif text-xl font-black italic leading-none tracking-[-0.05em] sm:text-2xl">
                Greco&apos;s
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-9 text-[10px] font-black uppercase tracking-[0.16em] lg:flex">
            <a href="#pizza" className="transition hover:text-[#bd3526]">
              Pizza
            </a>

            <a href="#menu" className="transition hover:text-[#bd3526]">
              Menu
            </a>

            <a href="#georges" className="transition hover:text-[#bd3526]">
              George&apos;s Lounge
            </a>

            <a href="#story" className="transition hover:text-[#bd3526]">
              Since 1968
            </a>
          </nav>

          <a
            href="tel:4032424597"
            className="shrink-0 bg-[#31533d] px-4 py-3 text-[9px] font-black uppercase tracking-[0.11em] text-[#fff5df] transition hover:bg-[#bd3526] sm:px-5 sm:text-[10px] sm:tracking-[0.14em]"
          >
            Call to Order
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative border-b-2 border-[#201a15] bg-[#d6402f]"
      >
        {/* Decorative rays */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]">
          <div className="absolute left-1/2 top-1/2 h-[1300px] w-[1300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[repeating-conic-gradient(from_0deg,#fff8e8_0deg_8deg,transparent_8deg_16deg)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1500px] min-w-0 border-x-2 border-[#201a15] lg:min-h-[760px] lg:grid-cols-[0.92fr_1.08fr]">
          {/* Hero copy */}
          <div className="min-w-0 border-b-2 border-[#201a15] p-5 sm:p-10 lg:flex lg:flex-col lg:justify-between lg:border-b-0 lg:border-r-2 lg:p-12">
            <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 text-[#f7dfb1]">
              <span className="text-[9px] font-black uppercase tracking-[0.16em] sm:text-[10px] sm:tracking-[0.2em]">
                17 Avenue SW · Calgary
              </span>

              <span className="shrink-0 rounded-full border border-[#f7dfb1]/60 px-3 py-1 text-[8px] font-black uppercase tracking-[0.12em] sm:text-[9px] sm:tracking-[0.15em]">
                Family Owned
              </span>
            </div>

            <div className="py-14 sm:py-16">
              <p className="mb-4 max-w-[280px] font-serif text-2xl font-black italic leading-[1.05] text-[#f8e8be] sm:mb-5 sm:max-w-none sm:text-3xl">
                Feeding the neighbourhood since
              </p>

              <p className="font-serif text-[96px] font-black italic leading-[0.67] tracking-[-0.09em] text-[#201a15] sm:text-[150px] lg:text-[185px]">
                19
                <span className="text-[#f7dfb1]">68</span>
              </p>

              <h1 className="mt-12 min-w-0 max-w-full text-[39px] font-black uppercase leading-[0.85] tracking-[-0.055em] text-[#fff5df] sm:mt-14 sm:text-[66px] sm:leading-[0.82] sm:tracking-[-0.065em] lg:text-[80px] xl:text-[94px]">
                Calgary&apos;s
                <span className="block text-[#201a15]">Neighbourhood</span>
                <span className="block">Pizza Joint.</span>
              </h1>
            </div>

            <div className="grid min-w-0 gap-6 border-t-2 border-[#201a15]/60 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="min-w-0 max-w-md text-[15px] font-medium leading-7 text-[#fff5df]/80 sm:text-base">
                Greek-style pizza. Big portions. Familiar faces. The kind of
                place that doesn&apos;t need to reinvent itself every six
                months.
              </p>

              <a
                href="#tonight"
                className="w-full border-2 border-[#201a15] bg-[#f7dfb1] px-6 py-4 text-center text-[10px] font-black uppercase tracking-[0.12em] text-[#201a15] shadow-[4px_4px_0_#201a15] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:w-auto sm:px-7 sm:text-[11px] sm:tracking-[0.14em]"
              >
                Dinner&apos;s handled ↓
              </a>
            </div>
          </div>

          {/* Hero photography placeholder */}
          <div className="relative min-h-[620px] min-w-0 overflow-hidden bg-[#e3d6bc] sm:min-h-[650px]">
            <div className="absolute inset-0 flex items-center justify-center px-5 pb-40 pt-28 sm:px-8 sm:pb-48 sm:pt-32">
              <div className="max-w-sm text-center">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#bd3526] sm:text-[10px] sm:tracking-[0.2em]">
                  Greco&apos;s Photography
                </p>

                <p className="mt-5 font-serif text-4xl font-black italic leading-[0.95] tracking-[-0.05em] text-[#201a15] sm:text-5xl">
                  Signature food photography would live here.
                </p>

                <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-black/40">
                  A full-width shot of one of Greco&apos;s loaded pizzas or a
                  table spread using their own photography.
                </p>
              </div>
            </div>

            {/* Retro badge */}
            <div className="absolute right-3 top-4 flex h-24 w-24 rotate-6 items-center justify-center rounded-full border-[3px] border-[#f8e8be] bg-[#31533d] text-center shadow-[4px_4px_0_#201a15] sm:right-10 sm:top-10 sm:h-40 sm:w-40 sm:border-4 sm:shadow-[5px_5px_0_#201a15]">
              <p className="-rotate-6 text-[8px] font-black uppercase leading-4 tracking-[0.1em] text-[#f8e8be] sm:text-[11px] sm:leading-5 sm:tracking-[0.14em]">
                Thick
                <span className="block font-serif text-xl italic tracking-[-0.04em] sm:text-3xl">
                  & Loaded
                </span>
                Calgary Style
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#201a15]/95 via-[#201a15]/70 to-transparent p-6 pt-32 sm:p-10 sm:pt-44 lg:p-12 lg:pt-48">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#f6d990] sm:text-[10px] sm:tracking-[0.22em]">
                No tiny portions here
              </p>

              <p className="mt-3 max-w-2xl font-serif text-4xl font-black italic leading-[0.92] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Pizza made for the whole table.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                {["Dine In", "Takeout", "Delivery"].map((item) => (
                  <span
                    key={item}
                    className="border border-white/40 bg-black/20 px-3 py-2 text-[8px] font-black uppercase tracking-[0.12em] text-white sm:px-4 sm:text-[9px] sm:tracking-[0.14em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centered menu strip */}
      <section className="border-b-2 border-[#201a15] bg-[#f5d36e]">
        <div className="mx-auto grid w-full max-w-[1500px] min-w-0 grid-cols-2 border-x-2 border-[#201a15] sm:grid-cols-3 lg:grid-cols-6">
          {[
            "PIZZA",
            "PASTA",
            "SOUVLAKI",
            "CALAMARI",
            "LASAGNA",
            "GREEK SALAD",
          ].map((item, index) => (
            <div
              key={item}
              className={`flex min-w-0 items-center justify-center gap-2 px-2 py-5 text-center ${
                index % 2 === 0
                  ? "border-r border-[#201a15]/15 sm:border-r-0"
                  : ""
              } ${index < 4 ? "border-b border-[#201a15]/15 sm:border-b-0" : ""} ${
                index !== 5
                  ? "lg:border-r lg:border-[#201a15]/20"
                  : ""
              }`}
            >
              <span className="shrink-0 text-[10px] text-[#bd3526] sm:text-sm">
                ★
              </span>

              <span className="min-w-0 text-[13px] font-black uppercase tracking-[-0.03em] sm:text-base xl:text-lg">
                {item}
              </span>

              <span className="shrink-0 text-[10px] text-[#bd3526] sm:text-sm">
                ★
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pizza anatomy */}
      <section id="pizza" className="bg-[#f4ead5]">
        <div className="mx-auto w-full max-w-[1500px] min-w-0 border-x-2 border-[#201a15] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid min-w-0 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#bd3526] sm:text-[10px] sm:tracking-[0.2em]">
                The main event
              </p>

              <h2 className="mt-5 font-serif text-[54px] font-black italic leading-[0.82] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                The
                <span className="block pl-[10%] text-[#bd3526] sm:pl-[12%]">
                  Greco&apos;s
                </span>
                <span className="block">Pie.</span>
              </h2>

              <p className="mt-8 max-w-md text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                This isn&apos;t thin-crust minimalism. Greco&apos;s is known for
                thick Greek-style pizza loaded with cheese and toppings — the
                sort of pizza you remember the next day.
              </p>
            </div>

            {/* Illustrated pizza */}
            <div className="relative mx-auto aspect-square w-full max-w-[350px] sm:max-w-[620px]">
              <div className="absolute inset-[8%] rounded-full border-[12px] border-[#b7763f] bg-[#dca461] shadow-[10px_12px_0_rgba(32,26,21,0.12)] sm:inset-[6%] sm:border-[18px] sm:shadow-[15px_18px_0_rgba(32,26,21,0.12)]">
                <div className="absolute inset-[7%] rounded-full bg-[#cf432f]">
                  <div className="absolute inset-[6%] rounded-full bg-[#f0c66e]">
                    {[
                      ["left-[22%] top-[19%]", "bg-[#a83229]"],
                      ["left-[55%] top-[16%]", "bg-[#a83229]"],
                      ["left-[70%] top-[42%]", "bg-[#a83229]"],
                      ["left-[31%] top-[60%]", "bg-[#a83229]"],
                      ["left-[56%] top-[70%]", "bg-[#a83229]"],
                      ["left-[15%] top-[43%]", "bg-[#31533d]"],
                      ["left-[46%] top-[37%]", "bg-[#31533d]"],
                      ["left-[72%] top-[68%]", "bg-[#31533d]"],
                      ["left-[40%] top-[78%]", "bg-[#704229]"],
                      ["left-[67%] top-[25%]", "bg-[#704229]"],
                      ["left-[27%] top-[34%]", "bg-[#704229]"],
                    ].map(([position, colour], index) => (
                      <div
                        key={index}
                        className={`absolute h-[11%] w-[11%] rounded-full ${position} ${colour}`}
                      />
                    ))}

                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-[28deg] bg-[#9b642e]/40" />
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-[-32deg] bg-[#9b642e]/40" />
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-90 bg-[#9b642e]/40" />
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-[10%] -rotate-6 border-2 border-[#201a15] bg-[#31533d] px-3 py-2 text-[8px] font-black uppercase tracking-[0.1em] text-[#fff5df] shadow-[3px_3px_0_#201a15] sm:-left-2 sm:px-5 sm:py-3 sm:text-[10px] sm:tracking-[0.15em] sm:shadow-[4px_4px_0_#201a15]">
                Loaded toppings
              </div>

              <div className="absolute right-0 top-[49%] rotate-3 border-2 border-[#201a15] bg-[#bd3526] px-3 py-2 text-[8px] font-black uppercase tracking-[0.1em] text-white shadow-[3px_3px_0_#201a15] sm:-right-3 sm:rotate-5 sm:px-5 sm:py-3 sm:text-[10px] sm:tracking-[0.15em] sm:shadow-[4px_4px_0_#201a15]">
                Plenty of cheese
              </div>

              <div className="absolute bottom-[4%] left-[4%] rotate-2 border-2 border-[#201a15] bg-[#f5d36e] px-3 py-2 text-[8px] font-black uppercase tracking-[0.1em] shadow-[3px_3px_0_#201a15] sm:bottom-[5%] sm:left-[5%] sm:px-5 sm:py-3 sm:text-[10px] sm:tracking-[0.15em] sm:shadow-[4px_4px_0_#201a15]">
                Built for sharing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classics */}
      <section className="border-y-2 border-[#201a15] bg-[#31533d] text-[#fff6e3]">
        <div className="mx-auto w-full max-w-[1500px] min-w-0 border-x-2 border-[#201a15] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="mb-12 flex min-w-0 flex-col justify-between gap-8 sm:mb-14 md:flex-row md:items-end">
            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#f4ca63] sm:text-[10px] sm:tracking-[0.2em]">
                The classics
              </p>

              <h2 className="mt-4 text-[48px] font-black uppercase leading-[0.86] tracking-[-0.055em] sm:text-7xl sm:leading-[0.85] sm:tracking-[-0.06em]">
                Don&apos;t
                <span className="block font-serif italic text-[#f4ca63]">
                  overthink it.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-white/55">
              Greco&apos;s has survived for more than five decades because people
              know what they came for.
            </p>
          </div>

          <div className="grid min-w-0 gap-5 lg:grid-cols-3">
            {classics.map((item) => (
              <article
                key={item.title}
                className="group min-w-0 overflow-hidden border-2 border-[#f7dfb1]/50 bg-[#203829]"
              >
                {/* Photo placeholder */}
                <div className="relative flex aspect-[4/3] min-w-0 items-center justify-center overflow-hidden bg-[#d9c9aa]">
                  <div className="max-w-[220px] px-6 text-center">
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#bd3526]">
                      Greco&apos;s Photography
                    </p>

                    <p className="mt-3 font-serif text-2xl font-black italic leading-tight text-[#201a15]">
                      {item.title} photo would live here.
                    </p>
                  </div>

                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f5d36e] text-xs font-black text-[#201a15]">
                    {item.number}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#f4ca63]">
                    {item.kicker}
                  </p>

                  <h3 className="mt-3 font-serif text-4xl font-black italic tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-7 text-white/50">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* More than pizza */}
      <section id="menu" className="bg-[#f4ead5]">
        <div className="mx-auto w-full max-w-[1500px] min-w-0 border-x-2 border-[#201a15] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid min-w-0 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#bd3526] sm:text-[10px] sm:tracking-[0.2em]">
                More than pizza
              </p>

              <h2 className="mt-5 text-[52px] font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-7xl sm:leading-[0.83] sm:tracking-[-0.065em]">
                Come
                <span className="block text-[#31533d]">hungry.</span>
              </h2>

              <p className="mt-8 max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Pizza may be the headline, but the menu has always gone much
                further — Greek favourites, Italian comfort food, pasta,
                calamari, salads and hearty dinner plates.
              </p>
            </div>

            <div className="min-w-0 border-t-2 border-[#201a15]">
              {moreThanPizza.map((category) => (
                <div
                  key={category.title}
                  className="grid min-w-0 gap-4 border-b-2 border-[#201a15] py-7 sm:grid-cols-[70px_0.7fr_1.3fr] sm:items-center sm:gap-5 sm:py-8"
                >
                  <span className="text-[10px] font-black tracking-[0.18em] text-[#bd3526]">
                    {category.number}
                  </span>

                  <h3 className="font-serif text-4xl font-black italic tracking-[-0.045em]">
                    {category.title}
                  </h3>

                  <p className="min-w-0 text-sm font-bold uppercase leading-6 tracking-[0.06em] text-black/45 sm:tracking-[0.08em]">
                    {category.items}
                  </p>
                </div>
              ))}

              <div className="mt-8 flex min-w-0 flex-col justify-between gap-5 bg-[#f5d36e] p-6 sm:flex-row sm:items-center sm:p-7">
                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#bd3526]">
                    Hungry yet?
                  </p>

                  <p className="mt-1 font-serif text-2xl font-black italic">
                    Call Greco&apos;s and make dinner easy.
                  </p>
                </div>

                <a
                  href="tel:4032424597"
                  className="shrink-0 bg-[#201a15] px-6 py-4 text-center text-[10px] font-black uppercase tracking-[0.14em] text-white"
                >
                  403-242-4597
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* George's Lounge */}
      <section
        id="georges"
        className="relative border-y-2 border-[#201a15] bg-[#151d18] text-white"
      >
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[linear-gradient(90deg,transparent_49%,white_50%,transparent_51%)] bg-[size:70px_70px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1500px] min-w-0 border-x-2 border-[#201a15] lg:min-h-[720px] lg:grid-cols-[0.95fr_1.05fr]">
          {/* Lounge photography placeholder */}
          <div className="relative min-h-[600px] min-w-0 border-b-2 border-[#201a15] bg-[#25352b] lg:border-b-0 lg:border-r-2">
            <div className="absolute inset-0 flex items-center justify-center px-5 pb-48 pt-24">
              <div className="max-w-sm text-center">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#d8b95f] sm:text-[10px] sm:tracking-[0.22em]">
                  George&apos;s Lounge
                </p>

                <p className="mt-5 font-serif text-4xl font-black italic leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl">
                  Lounge photography would live here.
                </p>

                <p className="mt-5 text-sm leading-6 text-white/40">
                  An atmospheric photo of the booths, bar or lounge interior
                  using George&apos;s own photography.
                </p>
              </div>
            </div>

            <div className="absolute left-5 top-6 border border-[#e5c677]/50 bg-black/20 px-3 py-2 text-[8px] font-black uppercase tracking-[0.16em] text-[#e5c677] sm:left-8 sm:top-8 sm:px-4 sm:text-[9px] sm:tracking-[0.2em]">
              The other half of Greco&apos;s
            </div>

            <div className="absolute bottom-8 left-5 right-5 border-t border-white/20 pt-6 sm:bottom-12 sm:left-12 sm:right-12">
              <p className="max-w-xl font-serif text-[43px] font-black italic leading-[0.93] tracking-[-0.05em] text-white sm:text-6xl">
                Booths.
                <span className="block text-[#d8b95f]">Cold drinks.</span>
                <span className="block">The game on.</span>
              </p>
            </div>
          </div>

          <div className="flex min-w-0 items-center p-6 sm:p-12 lg:p-16">
            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#d8b95f] sm:text-[10px] sm:tracking-[0.24em]">
                Welcome to
              </p>

              <h2 className="mt-5 max-w-full text-[49px] font-black uppercase leading-[0.84] tracking-[-0.055em] sm:text-7xl sm:leading-[0.8] sm:tracking-[-0.07em] lg:text-8xl">
                George&apos;s
                <span className="block font-serif italic text-[#d8b95f]">
                  Lounge.
                </span>
              </h2>

              <p className="mt-9 max-w-xl text-base leading-7 text-white/55 sm:mt-10 sm:text-lg sm:leading-8">
                No velvet ropes. No twelve-dollar garnish. Just an old-school
                neighbourhood lounge with comfortable booths, cold drinks,
                televisions and a reason to stay after dinner.
              </p>

              <div className="mt-10 grid min-w-0 gap-px bg-white/15 sm:mt-12 sm:grid-cols-3">
                {[
                  ["01", "Grab a booth"],
                  ["02", "Order some food"],
                  ["03", "Stay awhile"],
                ].map(([number, text]) => (
                  <div key={number} className="min-w-0 bg-[#1e2a22] p-5 sm:p-6">
                    <p className="text-[9px] font-black tracking-[0.15em] text-[#d8b95f]">
                      {number}
                    </p>

                    <p className="mt-6 text-sm font-black uppercase tracking-[0.05em] sm:mt-8 sm:tracking-[0.06em]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-9 border-l-2 border-[#d8b95f] pl-5 font-serif text-2xl italic leading-8 text-white/75 sm:mt-10">
                Not trying to be trendy.
                <br />
                That&apos;s kind of the point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section id="story" className="bg-[#bd3526] text-[#fff4dc]">
        <div className="mx-auto w-full max-w-[1500px] min-w-0 border-x-2 border-[#201a15] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid min-w-0 gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14">
            <div>
              <div className="inline-block -rotate-3 border-2 border-[#201a15] bg-[#f5d36e] px-5 py-4 text-[#201a15] shadow-[4px_4px_0_#201a15] sm:px-6 sm:shadow-[5px_5px_0_#201a15]">
                <p className="text-[8px] font-black uppercase tracking-[0.18em] sm:text-[9px] sm:tracking-[0.2em]">
                  Established
                </p>

                <p className="font-serif text-5xl font-black italic leading-none tracking-[-0.08em] sm:text-6xl">
                  1968
                </p>
              </div>
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#f5d36e] sm:text-[10px] sm:tracking-[0.2em]">
                Killarney · Calgary
              </p>

              <h2 className="mt-6 max-w-full text-[39px] font-black uppercase leading-[0.87] tracking-[-0.05em] sm:text-6xl sm:leading-[0.86] sm:tracking-[-0.065em] lg:text-8xl">
                Same neighbourhood.
                <span className="block font-serif italic text-[#f5d36e]">
                  Same kind of pizza.
                </span>
              </h2>

              <div className="mt-10 grid min-w-0 gap-7 border-t border-[#fff4dc]/35 pt-8 sm:mt-12 sm:gap-8 md:grid-cols-2">
                <p className="min-w-0 max-w-lg text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                  Greco&apos;s has been part of Calgary&apos;s Killarney
                  neighbourhood since 1968 — family-owned and feeding generations
                  of customers from 17 Avenue SW.
                </p>

                <p className="min-w-0 max-w-lg text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                  A new website shouldn&apos;t erase that history. It should make
                  the history the reason somebody wants to visit.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 border-y-2 border-[#fff4dc]/35 py-8 sm:mt-20">
            <div className="grid gap-8 text-center sm:grid-cols-3">
              <div>
                <p className="font-serif text-5xl font-black italic text-[#f5d36e]">
                  1968
                </p>

                <p className="mt-2 text-[9px] font-black uppercase tracking-[0.17em] text-white/55">
                  Opened in Calgary
                </p>
              </div>

              <div>
                <p className="font-serif text-5xl font-black italic text-[#f5d36e]">
                  17 Ave
                </p>

                <p className="mt-2 text-[9px] font-black uppercase tracking-[0.17em] text-white/55">
                  SW Calgary
                </p>
              </div>

              <div>
                <p className="font-serif text-5xl font-black italic text-[#f5d36e]">
                  Family
                </p>

                <p className="mt-2 text-[9px] font-black uppercase tracking-[0.17em] text-white/55">
                  Owned & operated
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dinner CTA */}
      <section id="tonight" className="bg-[#f5d36e]">
        <div className="mx-auto w-full max-w-[1500px] min-w-0 border-x-2 border-[#201a15] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#bd3526] sm:text-[10px] sm:tracking-[0.22em]">
                Tonight
              </p>

              <h2 className="mt-5 max-w-full text-[52px] font-black uppercase leading-[0.8] tracking-[-0.065em] sm:text-[78px] sm:leading-[0.78] sm:tracking-[-0.075em] lg:text-[104px]">
                Dinner
                <span className="block font-serif italic text-[#bd3526]">
                  is handled.
                </span>
              </h2>
            </div>

            <div className="min-w-0">
              <p className="max-w-xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                Sit down at the restaurant, pick it up on your way home, or have
                it delivered. Either way, nobody has to cook.
              </p>

              <div className="mt-8 grid min-w-0 gap-3 sm:grid-cols-3">
                <a
                  href="#visit"
                  className="border-2 border-[#201a15] bg-[#f4ead5] px-4 py-5 text-center text-[9px] font-black uppercase tracking-[0.12em] transition hover:bg-[#201a15] hover:text-white sm:px-5 sm:text-[10px] sm:tracking-[0.14em]"
                >
                  Dine In
                </a>

                <a
                  href="tel:4032424597"
                  className="border-2 border-[#201a15] bg-[#bd3526] px-4 py-5 text-center text-[9px] font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#201a15] sm:px-5 sm:text-[10px] sm:tracking-[0.14em]"
                >
                  Call for Pickup
                </a>

                <a
                  href="#visit"
                  className="border-2 border-[#201a15] bg-[#31533d] px-4 py-5 text-center text-[9px] font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#201a15] sm:px-5 sm:text-[10px] sm:tracking-[0.14em]"
                >
                  Delivery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section
        id="visit"
        className="border-y-2 border-[#201a15] bg-[#f4ead5]"
      >
        <div className="mx-auto grid w-full max-w-[1500px] min-w-0 border-x-2 border-[#201a15] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0 border-b-2 border-[#201a15] p-6 sm:p-12 lg:border-b-0 lg:border-r-2 lg:p-16">
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#bd3526] sm:text-[10px] sm:tracking-[0.2em]">
              Find us
            </p>

            <h2 className="mt-5 max-w-full font-serif text-[52px] font-black italic leading-[0.9] tracking-[-0.055em] sm:text-6xl sm:tracking-[-0.06em]">
              3511
              <span className="block">17 Ave SW.</span>
            </h2>

            <p className="mt-7 text-base leading-7 text-black/55 sm:text-lg">
              Calgary, Alberta
              <br />
              Killarney / Glengarry
            </p>

            <a
              href="tel:4032424597"
              className="mt-10 inline-block max-w-full text-[28px] font-black tracking-[-0.04em] text-[#31533d] sm:text-3xl"
            >
              403-242-4597
            </a>

            <p className="mt-3 text-[9px] font-black uppercase tracking-[0.13em] text-black/35 sm:text-[10px] sm:tracking-[0.15em]">
              Call ahead for takeout
            </p>

            <div className="mt-10 min-w-0 border-2 border-[#201a15] bg-[#bd3526] p-5 text-[#fff4dc] shadow-[5px_5px_0_#201a15] sm:mt-12 sm:p-6 sm:shadow-[6px_6px_0_#201a15]">
              <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#f5d36e] sm:text-[9px] sm:tracking-[0.2em]">
                Greco&apos;s + George&apos;s
              </p>

              <p className="mt-3 font-serif text-[28px] font-black italic leading-[1.05] sm:text-3xl">
                One address.
                <br />
                Two neighbourhood institutions.
              </p>
            </div>
          </div>

          <div className="min-w-0 p-6 sm:p-12 lg:p-16">
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#bd3526] sm:text-[10px] sm:tracking-[0.2em]">
              Restaurant hours
            </p>

            <div className="mt-7 border-t-2 border-[#201a15]">
              {hours.map(([day, time]) => (
                <div
                  key={day}
                  className="flex min-w-0 items-center justify-between gap-3 border-b border-[#201a15]/25 py-4"
                >
                  <span className="min-w-0 font-serif text-lg font-black italic sm:text-xl">
                    {day}
                  </span>

                  <span className="shrink-0 text-right text-[10px] font-black uppercase tracking-[0.05em] text-black/50 sm:text-xs sm:tracking-[0.08em]">
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-5 text-black/40">
              Hours shown for the restaurant and may change on holidays. Call
              ahead to confirm.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#201a15] text-[#f4ead5]">
        <div className="mx-auto w-full max-w-[1500px] min-w-0 px-5 py-12 sm:px-10 lg:px-12">
          <div className="flex min-w-0 flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="min-w-0">
              <p className="font-serif text-5xl font-black italic tracking-[-0.06em]">
                Greco&apos;s
              </p>

              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#f5d36e] sm:text-[11px] sm:tracking-[0.18em]">
                Pizza & George&apos;s Lounge
              </p>

              <p className="mt-5 text-sm text-white/40">
                Calgary neighbourhood dining since 1968.
              </p>
            </div>

            <div className="text-sm leading-6 text-white/45 md:text-right">
              <p>3511 17 Ave SW</p>
              <p>Calgary, Alberta</p>
              <p className="mt-2 text-[#f5d36e]">403-242-4597</p>
            </div>
          </div>

          <div className="mt-12 flex min-w-0 flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] leading-5 text-white/30 sm:flex-row">
            <span>
              Concept redesign only — not an official Greco&apos;s Pizza or
              George&apos;s Lounge website.
            </span>

            <a
              href="/"
              className="shrink-0 font-black uppercase tracking-[0.13em] text-[#f5d36e]/65 transition hover:text-[#f5d36e]"
            >
              Made by Caissie ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}