import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/lib/site-data";

export function Services() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-4 block">
              Spa & Soins Esthétique à Domicile
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              Nos <span className="italic text-primary">prestations</span>
              <br />
              bien-être & beauté
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-lg">
              Découvrez notre carte complète de massages et soins esthétiques
              réalisés avec des produits naturels certifiés.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Précédent"
              className="group w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Suivant"
              className="group w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory -mx-4 px-4"
        >
          {services.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.4) }}
              className="snap-start group min-w-[320px] md:min-w-[380px] bg-card rounded-[28px] p-6 flex flex-col justify-between relative h-[520px] shadow-soft hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-border/50"
            >
              <div className="flex justify-between items-start z-20">
                <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                  {s.duration}
                </span>
                <a
                  href="#contact"
                  aria-label={`Réserver ${s.name}`}
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center group-hover:rotate-45 group-hover:bg-gold transition-all duration-500"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-8 z-20">
                <h3 className="font-serif text-3xl md:text-[2.25rem] text-ink leading-[1.05] mb-3">
                  {s.name}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed max-w-[90%]">
                  {s.description}
                </p>
              </div>

              <div className="mt-auto relative h-[220px] w-full overflow-hidden rounded-[20px]">
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent z-10" />
                <a
                  href="#contact"
                  className="absolute bottom-4 left-4 bg-cream/90 backdrop-blur-md px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-ink z-20 hover:bg-cream hover:scale-105 transition-all"
                >
                  Réserver
                </a>
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
