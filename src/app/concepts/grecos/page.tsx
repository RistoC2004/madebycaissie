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
    <main className="overflow-hidden bg-[#f4ead5] text-[#201a15]">
      {/* Concept disclosure */}
      <div className="bg-[#201a15] px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4ead5]/55">
        Independent concept redesign by Made by Caissie — not affiliated with or
        commissioned by Greco&apos;s Pizza & George&apos;s Lounge
      </div>

      {/* Navigation */}
      <header className="relative z-20 border-b-2 border-[#201a15] bg-[#f4ead5]">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="group">
            <div className="-rotate-2 border-2 border-[#201a15] bg-[#bd3526] px-4 py-2 text-[#f8e8be] shadow-[4px_4px_0_#201a15] transition group-hover:rotate-0">
              <span className="block text-[9px] font-black uppercase tracking-[0.22em]">
                Calgary
              </span>

              <span className="block font-serif text-2xl font-black italic leading-none tracking-[-0.05em]">
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
            className="bg-[#31533d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#fff5df] transition hover:bg-[#bd3526]"
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

        <div className="relative mx-auto grid min-h-[760px] max-w-[1500px] border-x-2 border-[#201a15] lg:grid-cols-[0.92fr_1.08fr]">
          {/* Hero copy */}
          <div className="flex flex-col justify-between border-b-2 border-[#201a15] p-6 sm:p-10 lg:border-b-0 lg:border-r-2 lg:p-12">
            <div className="flex items-center justify-between text-[#f7dfb1]">
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                17 Avenue SW · Calgary
              </span>

              <span className="rounded-full border border-[#f7dfb1]/60 px-3 py-1 text-[9px] font-black uppercase tracking-[0.15em]">
                Family Owned
              </span>
            </div>

            <div className="py-16">
              <p className="mb-5 font-serif text-2xl font-black italic text-[#f8e8be] sm:text-3xl">
                Feeding the neighbourhood since
              </p>

              <p className="font-serif text-[110px] font-black italic leading-[0.62] tracking-[-0.09em] text-[#201a15] sm:text-[150px] lg:text-[185px]">
                19
                <span className="text-[#f7dfb1]">68</span>
              </p>

              <h1 className="mt-14 max-w-[780px] text-[49px] font-black uppercase leading-[0.82] tracking-[-0.065em] text-[#fff5df] sm:text-[66px] lg:text-[80px] xl:text-[94px]">
                Calgary&apos;s
                <span className="block text-[#201a15]">Neighbourhood</span>
                <span className="block">Pizza Joint.</span>
              </h1>
            </div>

            <div className="grid gap-6 border-t-2 border-[#201a15]/60 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-md text-base font-medium leading-7 text-[#fff5df]/80">
                Greek-style pizza. Big portions. Familiar faces. The kind of
                place that doesn&apos;t need to reinvent itself every six
                months.
              </p>

              <a
                href="#tonight"
                className="border-2 border-[#201a15] bg-[#f7dfb1] px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.14em] text-[#201a15] shadow-[5px_5px_0_#201a15] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Dinner&apos;s handled ↓
              </a>
            </div>
          </div>

          {/* Hero photography placeholder */}
          <div className="relative min-h-[650px] overflow-hidden bg-[#e3d6bc]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-sm px-8 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bd3526]">
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
            <div className="absolute right-6 top-6 flex h-32 w-32 rotate-6 items-center justify-center rounded-full border-4 border-[#f8e8be] bg-[#31533d] text-center shadow-[5px_5px_0_#201a15] sm:right-10 sm:top-10 sm:h-40 sm:w-40">
              <p className="-rotate-6 text-[11px] font-black uppercase leading-5 tracking-[0.14em] text-[#f8e8be]">
                Thick
                <span className="block font-serif text-3xl italic tracking-[-0.04em]">
                  & Loaded
                </span>
                Calgary Style
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#201a15]/95 via-[#201a15]/70 to-transparent p-7 pt-36 sm:p-10 sm:pt-44 lg:p-12 lg:pt-48">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#f6d990]">
                No tiny portions here
              </p>

              <p className="mt-3 max-w-2xl font-serif text-4xl font-black italic leading-[0.92] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Pizza made for the whole table.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {["Dine In", "Takeout", "Delivery"].map((item) => (
                  <span
                    key={item}
                    className="border border-white/40 bg-black/20 px-4 py-2 text-[9px] font-black uppercase tracking-[0.14em] text-white"
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
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 border-x-2 border-[#201a15] sm:grid-cols-3 lg:grid-cols-6">
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
              className={`flex items-center justify-center gap-3 px-3 py-5 text-center ${
                index !== 5
                  ? "lg:border-r lg:border-[#201a15]/20"
                  : ""
              }`}
            >
              <span className="text-sm text-[#bd3526]">★</span>

              <span className="text-base font-black uppercase tracking-[-0.04em] xl:text-lg">
                {item}
              </span>

              <span className="text-sm text-[#bd3526]">★</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pizza anatomy */}
      <section id="pizza" className="bg-[#f4ead5]">
        <div className="mx-auto max-w-[1500px] border-x-2 border-[#201a15] px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bd3526]">
                The main event
              </p>

              <h2 className="mt-5 font-serif text-6xl font-black italic leading-[0.82] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                The
                <span className="block pl-[12%] text-[#bd3526]">
                  Greco&apos;s
                </span>
                <span className="block">Pie.</span>
              </h2>

              <p className="mt-8 max-w-md text-lg leading-8 text-black/60">
                This isn&apos;t thin-crust minimalism. Greco&apos;s is known for
                thick Greek-style pizza loaded with cheese and toppings — the
                sort of pizza you remember the next day.
              </p>
            </div>

            {/* Illustrated pizza */}
            <div className="relative mx-auto aspect-square w-full max-w-[620px]">
              <div className="absolute inset-[6%] rounded-full border-[18px] border-[#b7763f] bg-[#dca461] shadow-[15px_18px_0_rgba(32,26,21,0.12)]">
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

              <div className="absolute -left-2 top-[10%] -rotate-6 border-2 border-[#201a15] bg-[#31533d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.15em] text-[#fff5df] shadow-[4px_4px_0_#201a15]">
                Loaded toppings
              </div>

              <div className="absolute -right-3 top-[48%] rotate-5 border-2 border-[#201a15] bg-[#bd3526] px-5 py-3 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-[4px_4px_0_#201a15]">
                Plenty of cheese
              </div>

              <div className="absolute bottom-[5%] left-[5%] rotate-2 border-2 border-[#201a15] bg-[#f5d36e] px-5 py-3 text-[10px] font-black uppercase tracking-[0.15em] shadow-[4px_4px_0_#201a15]">
                Built for sharing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classics */}
      <section className="border-y-2 border-[#201a15] bg-[#31533d] text-[#fff6e3]">
        <div className="mx-auto max-w-[1500px] border-x-2 border-[#201a15] px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f4ca63]">
                The classics
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-7xl">
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

          <div className="grid gap-5 lg:grid-cols-3">
            {classics.map((item) => (
              <article
                key={item.title}
                className="group border-2 border-[#f7dfb1]/50 bg-[#203829]"
              >
                {/* Photo placeholder */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#d9c9aa]">
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

                <div className="p-7">
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
        <div className="mx-auto max-w-[1500px] border-x-2 border-[#201a15] px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bd3526]">
                More than pizza
              </p>

              <h2 className="mt-5 text-6xl font-black uppercase leading-[0.83] tracking-[-0.065em] sm:text-7xl">
                Come
                <span className="block text-[#31533d]">hungry.</span>
              </h2>

              <p className="mt-8 max-w-md text-lg leading-8 text-black/55">
                Pizza may be the headline, but the menu has always gone much
                further — Greek favourites, Italian comfort food, pasta,
                calamari, salads and hearty dinner plates.
              </p>
            </div>

            <div className="border-t-2 border-[#201a15]">
              {moreThanPizza.map((category) => (
                <div
                  key={category.title}
                  className="grid gap-5 border-b-2 border-[#201a15] py-8 sm:grid-cols-[70px_0.7fr_1.3fr] sm:items-center"
                >
                  <span className="text-[10px] font-black tracking-[0.18em] text-[#bd3526]">
                    {category.number}
                  </span>

                  <h3 className="font-serif text-4xl font-black italic tracking-[-0.045em]">
                    {category.title}
                  </h3>

                  <p className="text-sm font-bold uppercase leading-6 tracking-[0.08em] text-black/45">
                    {category.items}
                  </p>
                </div>
              ))}

              <div className="mt-8 flex flex-col justify-between gap-5 bg-[#f5d36e] p-7 sm:flex-row sm:items-center">
                <div>
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

        <div className="relative mx-auto grid min-h-[720px] max-w-[1500px] border-x-2 border-[#201a15] lg:grid-cols-[0.95fr_1.05fr]">
          {/* Lounge photography placeholder */}
          <div className="relative min-h-[600px] border-b-2 border-[#201a15] bg-[#25352b] lg:border-b-0 lg:border-r-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-sm px-8 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#d8b95f]">
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

            <div className="absolute left-8 top-8 border border-[#e5c677]/50 bg-black/20 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#e5c677]">
              The other half of Greco&apos;s
            </div>

            <div className="absolute bottom-8 left-8 right-8 border-t border-white/20 pt-6 sm:bottom-12 sm:left-12 sm:right-12">
              <p className="max-w-xl font-serif text-5xl font-black italic leading-[0.93] tracking-[-0.05em] text-white sm:text-6xl">
                Booths.
                <span className="block text-[#d8b95f]">Cold drinks.</span>
                <span className="block">The game on.</span>
              </p>
            </div>
          </div>

          <div className="flex items-center p-8 sm:p-12 lg:p-16">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#d8b95f]">
                Welcome to
              </p>

              <h2 className="mt-5 text-6xl font-black uppercase leading-[0.8] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                George&apos;s
                <span className="block font-serif italic text-[#d8b95f]">
                  Lounge.
                </span>
              </h2>

              <p className="mt-10 max-w-xl text-lg leading-8 text-white/55">
                No velvet ropes. No twelve-dollar garnish. Just an old-school
                neighbourhood lounge with comfortable booths, cold drinks,
                televisions and a reason to stay after dinner.
              </p>

              <div className="mt-12 grid gap-px bg-white/15 sm:grid-cols-3">
                {[
                  ["01", "Grab a booth"],
                  ["02", "Order some food"],
                  ["03", "Stay awhile"],
                ].map(([number, text]) => (
                  <div key={number} className="bg-[#1e2a22] p-6">
                    <p className="text-[9px] font-black tracking-[0.15em] text-[#d8b95f]">
                      {number}
                    </p>

                    <p className="mt-8 text-sm font-black uppercase tracking-[0.06em]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-10 border-l-2 border-[#d8b95f] pl-5 font-serif text-2xl italic leading-8 text-white/75">
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
        <div className="mx-auto max-w-[1500px] border-x-2 border-[#201a15] px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <div className="inline-block -rotate-3 border-2 border-[#201a15] bg-[#f5d36e] px-6 py-4 text-[#201a15] shadow-[5px_5px_0_#201a15]">
                <p className="text-[9px] font-black uppercase tracking-[0.2em]">
                  Established
                </p>

                <p className="font-serif text-6xl font-black italic leading-none tracking-[-0.08em]">
                  1968
                </p>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f5d36e]">
                Killarney · Calgary
              </p>

              <h2 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
                Same neighbourhood.
                <span className="block font-serif italic text-[#f5d36e]">
                  Same kind of pizza.
                </span>
              </h2>

              <div className="mt-12 grid gap-8 border-t border-[#fff4dc]/35 pt-8 md:grid-cols-2">
                <p className="max-w-lg text-lg leading-8 text-white/70">
                  Greco&apos;s has been part of Calgary&apos;s Killarney
                  neighbourhood since 1968 — family-owned and feeding generations
                  of customers from 17 Avenue SW.
                </p>

                <p className="max-w-lg text-lg leading-8 text-white/70">
                  A new website shouldn&apos;t erase that history. It should make
                  the history the reason somebody wants to visit.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 border-y-2 border-[#fff4dc]/35 py-8">
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
        <div className="mx-auto max-w-[1500px] border-x-2 border-[#201a15] px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#bd3526]">
                Tonight
              </p>

              <h2 className="mt-5 text-[58px] font-black uppercase leading-[0.78] tracking-[-0.075em] sm:text-[78px] lg:text-[104px]">
                Dinner
                <span className="block font-serif italic text-[#bd3526]">
                  is handled.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 text-black/60">
                Sit down at the restaurant, pick it up on your way home, or have
                it delivered. Either way, nobody has to cook.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <a
                  href="#visit"
                  className="border-2 border-[#201a15] bg-[#f4ead5] px-5 py-5 text-center text-[10px] font-black uppercase tracking-[0.14em] transition hover:bg-[#201a15] hover:text-white"
                >
                  Dine In
                </a>

                <a
                  href="tel:4032424597"
                  className="border-2 border-[#201a15] bg-[#bd3526] px-5 py-5 text-center text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#201a15]"
                >
                  Call for Pickup
                </a>

                <a
                  href="#visit"
                  className="border-2 border-[#201a15] bg-[#31533d] px-5 py-5 text-center text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#201a15]"
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
        <div className="mx-auto grid max-w-[1500px] border-x-2 border-[#201a15] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b-2 border-[#201a15] p-8 sm:p-12 lg:border-b-0 lg:border-r-2 lg:p-16">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bd3526]">
              Find us
            </p>

            <h2 className="mt-5 font-serif text-6xl font-black italic leading-[0.9] tracking-[-0.06em]">
              3511
              <span className="block">17 Ave SW.</span>
            </h2>

            <p className="mt-7 text-lg text-black/55">
              Calgary, Alberta
              <br />
              Killarney / Glengarry
            </p>

            <a
              href="tel:4032424597"
              className="mt-10 inline-block text-3xl font-black tracking-[-0.04em] text-[#31533d]"
            >
              403-242-4597
            </a>

            <p className="mt-3 text-[10px] font-black uppercase tracking-[0.15em] text-black/35">
              Call ahead for takeout
            </p>

            <div className="mt-12 border-2 border-[#201a15] bg-[#bd3526] p-6 text-[#fff4dc] shadow-[6px_6px_0_#201a15]">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#f5d36e]">
                Greco&apos;s + George&apos;s
              </p>

              <p className="mt-3 font-serif text-3xl font-black italic">
                One address.
                <br />
                Two neighbourhood institutions.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bd3526]">
              Restaurant hours
            </p>

            <div className="mt-7 border-t-2 border-[#201a15]">
              {hours.map(([day, time]) => (
                <div
                  key={day}
                  className="flex items-center justify-between border-b border-[#201a15]/25 py-4"
                >
                  <span className="font-serif text-xl font-black italic">
                    {day}
                  </span>

                  <span className="text-xs font-black uppercase tracking-[0.08em] text-black/50">
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
        <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="font-serif text-5xl font-black italic tracking-[-0.06em]">
                Greco&apos;s
              </p>

              <p className="mt-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#f5d36e]">
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

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] text-white/30 sm:flex-row">
            <span>
              Concept redesign only — not an official Greco&apos;s Pizza or
              George&apos;s Lounge website.
            </span>

            <a
              href="/"
              className="font-black uppercase tracking-[0.13em] text-[#f5d36e]/65 transition hover:text-[#f5d36e]"
            >
              Made by Caissie ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}