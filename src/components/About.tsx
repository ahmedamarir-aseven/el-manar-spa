import { motion } from "framer-motion";
import { Leaf, Users, Award, Sparkles } from "lucide-react";
import { IMG } from "@/lib/site-data";

export function About() {
  return (
    <section id="apropos" className="py-24 md:py-32">
      <div className="max-w-[1380px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[420px] lg:h-full rounded-[36px] overflow-hidden shadow-elevated group"
          >
            <img
              src={IMG("images/apropo.jpg")}
              alt="El Manar — Thérapeute certifiée"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-cream/95 backdrop-blur-md px-5 py-2 rounded-full flex items-center gap-2 shadow-soft">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-ink">
                Disponible
              </span>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-ink/80 to-transparent">
              <p className="text-cream font-display font-bold text-xl">
                El Manar · Thérapeute Certifiée
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-[1.5] bg-card rounded-[36px] p-8 md:p-10 flex flex-col justify-center shadow-soft border border-border/50"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
                  À propos d'<span className="italic text-primary">El Manar</span>
                </h2>
                <div className="w-12 h-12 bg-cream-dark/50 rounded-full flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
              </div>
              <div className="w-16 h-1 bg-primary/20 rounded-full mb-6" />
              <p className="text-base md:text-lg text-ink-soft leading-relaxed">
                Le bien-être n'est pas un luxe, c'est une nécessité. Je suis El
                Manar, votre thérapeute indépendante. Ma mission est simple :{" "}
                <span className="text-ink font-semibold">
                  vous offrir l'excellence du spa directement chez vous.
                </span>
                <br className="hidden md:block" />
                Avec plus de 10 ans d'expérience, je combine techniques
                traditionnelles et modernes pour des soins sur-mesure.
              </p>
            </motion.div>

            <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-blush rounded-[28px] p-6 flex flex-col justify-between shadow-soft hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold uppercase text-ink/60 tracking-wider">
                    Qualité
                  </span>
                  <div className="w-10 h-10 bg-cream/40 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-ink" />
                  </div>
                </div>
                <div>
                  <p className="font-serif text-3xl md:text-4xl text-ink">100% Bio</p>
                  <p className="text-sm text-ink/80 mt-1 leading-tight">
                    Huiles & produits naturels certifiés.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative bg-primary text-primary-foreground rounded-[28px] p-6 flex flex-col justify-between shadow-soft hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-cream/10 rounded-full blur-2xl" />
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-xs font-bold uppercase text-cream/70 tracking-wider">
                    Confiance
                  </span>
                  <div className="w-10 h-10 bg-cream/15 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-cream" />
                  </div>
                </div>
                <div className="relative z-10">
                  <p className="font-serif text-3xl md:text-4xl">1200+</p>
                  <p className="text-sm text-cream/85 mt-1 leading-tight">
                    Clients satisfaits à Marrakech.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-2 bg-card rounded-[28px] p-6 flex items-center gap-4 shadow-soft border border-border/50 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-serif text-xl text-ink">10 ans d'expertise</p>
                  <p className="text-sm text-ink-soft mt-0.5">
                    Techniques traditionnelles & modernes maîtrisées.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
