import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, IMG } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
      >
        <div
          className={`bg-cream/85 backdrop-blur-xl rounded-full border border-border/60 px-4 md:px-6 lg:px-8 transition-shadow duration-300 ${
            scrolled ? "shadow-elevated" : "shadow-soft"
          }`}
        >
          <div className="flex justify-between items-center h-16 md:h-20">
            <a href="#accueil" className="flex items-center gap-2 shrink-0">
              <img
                src={IMG("images/logo.png")}
                alt="El Manar Spa"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative text-sm font-medium text-ink-soft hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary-glow transition-all duration-300 shadow-soft hover:shadow-elevated hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>Réserver</span>
              </a>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-cream-dark/50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-ink" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-50"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.4 }}
              className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-cream z-50 shadow-2xl"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-10">
                  <span className="font-serif text-xl text-ink">Menu</span>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full hover:bg-cream-dark/50 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-ink" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="py-3 px-4 text-ink font-medium rounded-xl hover:bg-cream-dark/50 transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-auto text-center py-4 bg-primary text-primary-foreground font-semibold rounded-full"
                >
                  Réserver mon soin
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
