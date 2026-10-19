import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroSpa from "@/assets/hero-spa.jpg";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen w-full overflow-hidden rounded-b-[3rem] bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src={heroSpa}
          alt="Bien-être à domicile à Marrakech"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 md:pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-cream font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight font-medium text-balance">
            L'excellence du{" "}
            <span className="italic text-gold">soin à domicile</span>
            <br />à Marrakech.
          </h1>

          <p className="mt-8 text-cream/80 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            Votre experte bien-être dédiée se déplace chez vous. Profitez d'une
            expérience spa haut de gamme, sans quitter le confort de votre
            domicile.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream text-ink rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:shadow-elevated hover:-translate-y-0.5"
            >
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream/10 text-cream border border-cream/30 rounded-full font-semibold backdrop-blur-md hover:bg-cream/20 transition-all duration-300"
            >
              Découvrir les soins
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-2xl"
          >
            {[
              { n: "10+", l: "Années d'expérience" },
              { n: "1200+", l: "Clients satisfaits" },
              { n: "100%", l: "Produits bio" },
            ].map((s) => (
              <div key={s.l} className="border-l border-cream/20 pl-4">
                <div className="font-serif text-3xl md:text-4xl text-cream">
                  {s.n}
                </div>
                <div className="text-xs uppercase tracking-wider text-cream/60 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
