import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Clock, ChevronDown } from "lucide-react";
import { contactInfo, services } from "@/lib/site-data";

const TIMES = ["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const msg = `Bonjour, je souhaite réserver :%0A- Service: ${form.get("service")}%0A- Date: ${form.get("date")}%0A- Heure: ${form.get("time")}%0A- Nom: ${form.get("name")}%0A- Notes: ${form.get("details") || "—"}`;
    window.open(`https://wa.me/${contactInfo.phoneRaw}?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 lg:sticky lg:top-32"
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
                  Contact
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]">
                Parlons de<br />
                <span className="italic text-primary">votre bien-être.</span>
              </h2>
              <p className="mt-5 text-base text-ink-soft leading-relaxed max-w-md">
                Je suis à votre écoute pour évaluer vos besoins. Devis gratuit
                et réponse sous 2h.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <ContactCard icon={<Phone className="w-5 h-5" />} label="Téléphone" value={contactInfo.phone} />
              <ContactCard icon={<Mail className="w-5 h-5" />} label="Email" value={contactInfo.email} />
              <div className="sm:col-span-2 bg-card p-5 rounded-2xl shadow-soft border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-dark/40 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-ink-soft uppercase tracking-wider">
                      Zone d'intervention
                    </p>
                    <p className="text-lg font-display font-bold text-ink">
                      {contactInfo.area}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${contactInfo.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full flex items-center bg-ink hover:bg-primary rounded-2xl p-1 pr-2 transition-all duration-500 shadow-elevated hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#25D366] rounded-xl flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="flex-1 px-5">
                <span className="block text-[11px] font-bold text-cream/60 uppercase tracking-wider mb-0.5">
                  Réponse immédiate
                </span>
                <span className="block text-lg font-display font-bold text-cream">
                  Discussion WhatsApp
                </span>
              </div>
              <div className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream group-hover:bg-cream group-hover:text-primary transition-all">
                <ArrowRight className="w-4 h-4 group-hover:rotate-0 -rotate-45 transition-transform" />
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-7/12 relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blush/40 rounded-full blur-3xl -z-10" />

            <div className="bg-card rounded-[36px] shadow-elevated p-8 md:p-10 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cream-dark/40 rounded-bl-[80px] -z-0" />
              <div className="relative z-10">
                <h3 className="font-serif text-3xl text-ink mb-2">
                  Réserver votre soin
                </h3>
                <p className="text-ink-soft text-sm mb-8">
                  Sélectionnez votre prestation et votre créneau idéal.
                </p>

                <form onSubmit={onSubmit} className="space-y-5">
                  <Field label="Service souhaité">
                    <div className="relative">
                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="w-full bg-cream-dark/30 text-ink font-semibold rounded-2xl px-5 py-4 appearance-none cursor-pointer hover:bg-cream-dark/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      >
                        <option value="" disabled>
                          Choisir une prestation...
                        </option>
                        {services.map((s) => (
                          <option key={s.name} value={s.name}>
                            {s.name} ({s.duration})
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none" />
                    </div>
                  </Field>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Field label="Date" className="w-full sm:w-1/2">
                      <input
                        type="date"
                        name="date"
                        required
                        className="w-full bg-cream-dark/30 text-ink font-semibold rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-card transition-all cursor-pointer"
                      />
                    </Field>
                    <Field label="Heure" className="w-full sm:w-1/2">
                      <div className="relative">
                        <select
                          name="time"
                          className="w-full bg-cream-dark/30 text-ink font-semibold rounded-2xl px-5 py-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-card transition-all"
                        >
                          {TIMES.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                        <Clock className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none" />
                      </div>
                    </Field>
                  </div>

                  <Field label="Vos coordonnées">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nom complet"
                      className="w-full bg-cream-dark/30 text-ink placeholder-ink-soft/60 font-semibold rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-card transition-all mb-4"
                    />
                    <textarea
                      name="details"
                      placeholder="Informations complémentaires..."
                      rows={4}
                      className="w-full bg-cream-dark/30 text-ink placeholder-ink-soft/60 font-semibold rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-card transition-all resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full group bg-ink hover:bg-primary text-cream font-semibold text-base py-5 rounded-2xl shadow-elevated hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    {submitted ? "Demande envoyée — à bientôt !" : "Confirmer la demande"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-card p-5 rounded-2xl shadow-soft border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-cream-dark/40 text-primary flex items-center justify-center mb-3">
        {icon}
      </div>
      <p className="text-[11px] font-bold text-ink-soft uppercase tracking-wider">
        {label}
      </p>
      <p className="text-base md:text-lg font-display font-bold text-ink truncate">
        {value}
      </p>
    </div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-[11px] font-bold uppercase text-ink-soft mb-1.5 ml-3 tracking-wider">
        {label}
      </label>
      {children}
    </div>
  );
}
