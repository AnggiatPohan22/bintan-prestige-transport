import { ChevronLeft, ChevronRight, Luggage, Users } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { carTypes } from "@data/carTypes";

export default function PremiumCarSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeCar = carTypes[activeIndex];

  const previous = () => {
    setActiveIndex((current) => (current === 0 ? carTypes.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === carTypes.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="luxury-surface fleet-selector overflow-hidden rounded-[8px]">
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-72 overflow-hidden border-b border-[#bfa46f]/18 bg-[#07130f] lg:min-h-[420px] lg:border-b-0 lg:border-r lg:border-[#bfa46f]/18">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_30%,rgba(248,231,161,0.18),transparent_20rem),radial-gradient(circle_at_75%_55%,rgba(6,78,59,0.54),transparent_24rem),linear-gradient(145deg,#07130f,#0b0c10_68%)]" />
          <div className="absolute inset-x-8 bottom-10 h-px bg-gradient-to-r from-transparent via-[#f8e7a1]/45 to-transparent" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCar.slug}
              className="absolute inset-0 flex items-center justify-center p-6 sm:p-8"
              initial={reduceMotion ? false : { opacity: 0, x: 28 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -28 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <div
                aria-label={activeCar.alt}
                className="fleet-car-image h-52 w-full max-w-2xl rounded-[8px] border border-[#f8e7a1]/18 bg-[#0b0c10]/60 shadow-[0_34px_90px_rgba(6,78,59,0.26)] sm:h-64 lg:h-72"
                role="img"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(11,12,16,.04), rgba(11,12,16,.42)), url('${activeCar.image}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-5 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f8e7a1]/72">Premium Fleet</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCar.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.26, ease: "easeOut" }}
            >
              <h3 className="mt-3 font-[var(--font-editorial-heading)] text-3xl font-medium text-[#f8fafc] sm:text-4xl">{activeCar.name}</h3>
              <p className="mt-1 text-sm font-bold text-[#f8e7a1]/82">{activeCar.type}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{activeCar.shortDescription}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[8px] border border-[#bfa46f]/20 bg-[#064e3b]/22 p-4">
                  <Users className="h-5 w-5 text-[#f8e7a1]/80" aria-hidden="true" />
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-500">Capacity</p>
                  <p className="text-sm font-semibold text-[#e2e8f0]">{activeCar.capacity}</p>
                </div>
                <div className="rounded-[8px] border border-[#bfa46f]/20 bg-[#064e3b]/22 p-4">
                  <Luggage className="h-5 w-5 text-[#f8e7a1]/80" aria-hidden="true" />
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-500">Luggage</p>
                  <p className="text-sm font-semibold text-[#e2e8f0]">{activeCar.luggage}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {activeCar.features.map((feature) => (
                  <span className="rounded-full border border-[#bfa46f]/24 bg-[#064e3b]/42 px-3 py-1 text-xs font-semibold text-[#f8e7a1]" key={feature}>
                    {feature}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm font-bold text-[#f8e7a1]">From {activeCar.priceFrom}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {carTypes.map((car, index) => (
                <button
                  aria-label={`Show ${car.name}`}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-[#f8e7a1]" : "w-2.5 bg-white/20"}`}
                  key={car.slug}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button aria-label="Previous vehicle" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#bfa46f]/24 bg-[#064e3b]/24 text-[#f8e7a1] transition hover:bg-[#064e3b]/40" onClick={previous} type="button">
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button aria-label="Next vehicle" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#bfa46f]/24 bg-[#064e3b]/24 text-[#f8e7a1] transition hover:bg-[#064e3b]/40" onClick={next} type="button">
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
