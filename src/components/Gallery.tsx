import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Lock, RotateCcw } from "lucide-react";
import { galleryCol1, galleryCol2 } from "@/lib/site-data";

function Card({ url }: { url: string }) {
  return (
    <div className="relative w-full h-72 lg:h-96 flex-shrink-0 overflow-hidden rounded-3xl group shadow-soft">
      <img
        src={url}
        alt="El Manar Spa"
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute bottom-3 left-3 right-3 bg-cream/30 backdrop-blur-md p-3 rounded-2xl border border-cream/40 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-sm text-cream font-semibold tracking-wide drop-shadow">
          El Manar Spa
        </span>
      </div>
    </div>
  );
}

export function Gallery() {
  const col1 = [...galleryCol1, ...galleryCol1];
  const col2 = [...galleryCol2, ...galleryCol2];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream-dark/30 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8 z-10"
          >
            <span className="text-primary font-display font-bold text-2xl tracking-tight">
              El Manar Gallery
            </span>

            <h2 className="font-serif text-5xl lg:text-7xl tracking-tight leading-[1.05] text-ink">
              L'expérience<br />
              <span className="italic text-primary">El Manar Spa</span><br />
              à domicile.
            </h2>

            <p className="text-ink-soft text-lg max-w-md leading-relaxed">
              Une immersion visuelle dans mes soins. Découvrez le matériel
              professionnel et l'ambiance que je crée chez vous.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="group bg-primary text-primary-foreground pl-7 pr-5 py-3.5 rounded-full inline-flex items-center gap-3 hover:bg-primary-glow transition-all duration-300 shadow-soft hover:shadow-elevated hover:-translate-y-0.5"
              >
                <span className="font-semibold">Réserver</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#services"
                className="group bg-card text-ink pl-7 pr-5 py-3.5 rounded-full inline-flex items-center gap-3 hover:bg-cream-dark/50 transition-all duration-300 font-semibold border border-border"
              >
                Nos soins
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-7 relative h-[600px] lg:h-[820px] w-full mask-fade-y">
            <div className="grid grid-cols-2 gap-5 h-full w-full">
              <div className="relative h-full">
                <div className="flex flex-col gap-5 w-full scroll-down will-change-transform">
                  {col1.map((u, i) => (
                    <Card key={`a${i}`} url={u} />
                  ))}
                </div>
              </div>
              <div className="relative h-full">
                <div className="flex flex-col gap-5 w-full scroll-up will-change-transform">
                  {col2.map((u, i) => (
                    <Card key={`b${i}`} url={u} />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
              {[MessageCircle, Lock, RotateCcw].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-cream/70 backdrop-blur-xl p-3.5 rounded-full shadow-soft border border-cream/60 hover:scale-110 transition-transform"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
