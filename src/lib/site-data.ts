export const IMG = (path: string) => `/${path}`;

export type Service = {
  name: string;
  subtitle?: string;
  description: string;
  duration: string;
  category: "Massage" | "Esthétique" | "Beauté";
  image: string;
};

export const services: Service[] = [
  {
    name: "Massage Relaxant",
    description:
      "Le soin signature El Manar. Apaisez les tensions et retrouvez votre sérénité complète.",
    duration: "60 min",
    category: "Massage",
    image: IMG("images/service1.jpg"),
  },
  {
    name: "Massage Réflexologie",
    description:
      "Stimulation des zones réflexes plantaires pour rétablir l'équilibre du corps.",
    duration: "60 min",
    category: "Massage",
    image: IMG("images/service2.jpg"),
  },
  {
    name: "Massage Tonique",
    description:
      "Idéal pour la récupération musculaire et redonner une énergie vitale au corps.",
    duration: "60 min",
    category: "Massage",
    image: IMG("images/service3.avif"),
  },
  {
    name: "Massage Drainage",
    description:
      "Stimule la circulation lymphatique pour éliminer les toxines et réduire les gonflements.",
    duration: "60 min",
    category: "Massage",
    image: IMG("images/service4.jpg"),
  },
  {
    name: "Massage Amincissant",
    description:
      "Techniques manuelles ciblant les zones rebelles pour affiner la silhouette.",
    duration: "60 min",
    category: "Massage",
    image: IMG("images/service5.jpg"),
  },
  {
    name: "Pierres Chaudes",
    description:
      "La chaleur des pierres volcaniques pour une relaxation musculaire profonde.",
    duration: "60 min",
    category: "Massage",
    image: IMG("images/service6.jpg"),
  },
  {
    name: "Soins du Visage",
    description:
      "Des soins personnalisés pour révéler l'éclat naturel de votre peau à domicile.",
    duration: "Esthétique",
    category: "Esthétique",
    image: IMG("images/service7.avif"),
  },
  {
    name: "Manucure",
    description: "Mise en beauté des mains, soin des ongles et pose de vernis.",
    duration: "Beauté",
    category: "Beauté",
    image: IMG("images/service8.jpg"),
  },
  {
    name: "Pédicure",
    description: "Soin complet des pieds pour allier esthétique et relaxation.",
    duration: "Beauté",
    category: "Beauté",
    image: IMG("images/service9.jpg"),
  },
  {
    name: "Massage Bébé",
    description:
      "Un moment de douceur pour apaiser, relaxer et favoriser le sommeil de votre bébé.",
    duration: "40 min",
    category: "Massage",
    image: IMG("images/service10.jpg"),
  },
];

export const galleryCol1 = [
  IMG("images/7.jpg"),
  IMG("images/1.jpg"),
  IMG("images/2.jpg"),
  IMG("images/3.jpg"),
  IMG("images/4.jpg"),
  IMG("images/5.jpg"),
  IMG("images/6.jpg"),
];

export const galleryCol2 = [
  IMG("images/8.jpg"),
  IMG("images/9.jpg"),
  IMG("images/10.jpg"),
  IMG("images/11.jpg"),
  IMG("images/12.jpg"),
  IMG("images/13.jpg"),
  IMG("images/14.jpg"),
];

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Prestations" },
  { href: "#apropos", label: "Vision" },
  { href: "#gallery", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export const contactInfo = {
  phone: "+212 701-692246",
  phoneRaw: "212701692246",
  email: "contact@elmanarspa.com",
  area: "Marrakech & Alentours (15km)",
  instagram: "https://www.instagram.com/elmanarspa/",
  tiktok: "https://www.tiktok.com/@elmanarspa",
};
