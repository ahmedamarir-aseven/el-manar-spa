// Inline SVG icons used (Instagram + TikTok) — avoids icon library mismatch.
import { IMG, navLinks, contactInfo } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <a href="#accueil" className="inline-block mb-6">
              <img
                src={IMG("images/logo white.png")}
                alt="El Manar Spa Marrakech"
                loading="lazy"
                className="h-20 w-auto object-contain"
              />
            </a>
            <p className="text-cream/80 leading-relaxed mb-6 text-sm">
              El Manar se positionne comme un refuge ultime pour ceux qui
              cherchent une approche globale du bien-être à Marrakech.
            </p>
            <div className="flex gap-3">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-primary transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zM17.5 6a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"/></svg>
              </a>
              <a
                href={contactInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream hover:text-primary transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.49a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.92Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/80 hover:text-cream hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Nos Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="text-cream/80 hover:text-cream transition-colors">Soins Massages</a></li>
              <li><a href="#services" className="text-cream/80 hover:text-cream transition-colors">Soins Visage & Corps</a></li>
              <li><a href="#services" className="text-cream/80 hover:text-cream transition-colors">Esthétique</a></li>
              <li><a href="#services" className="text-cream/80 hover:text-cream transition-colors">Manucure & Pédicure</a></li>
              <li><a href="#services" className="text-cream/80 hover:text-cream transition-colors">Packs sur mesure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-cream/80 text-sm mb-4">
              Recevez nos conseils bien-être et nos actualités.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Votre email"
                className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-xl focus:outline-none focus:bg-cream/20 text-cream placeholder-cream/50 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-cream text-primary font-bold py-3 rounded-xl hover:bg-gold transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 text-center text-cream/60 text-sm">
          <p>
            Mentions Légales · Politique de confidentialité · © {new Date().getFullYear()}{" "}
            El Manar Spa Marrakech
          </p>
        </div>
      </div>
    </footer>
  );
}
