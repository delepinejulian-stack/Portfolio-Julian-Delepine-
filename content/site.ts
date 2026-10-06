/* Tout le contenu du site est ici : textes, projets, images, vidéos.
   Pour ajouter une vraie production, remplace `cover` par ta photo
   (fichier dans /public/media, ex. "/media/clip.jpg") et renseigne `media`
   avec ton lien YouTube / Vimeo ou ton fichier vidéo, puis passe
   `placeholder` à false. */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Media =
  | { type: "youtube"; id: string }
  | { type: "vimeo"; id: string }
  | { type: "video"; src: string }
  | { type: "images"; srcs: string[] };

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: Category;
  role: string;
  description: string;
  cover: string;
  /** Courte vidéo muette (mp4) jouée au survol de la carte. */
  previewVideo?: string;
  media?: Media;
  /** true tant que le visuel est une image d'illustration, pas ta production. */
  placeholder?: boolean;
};

export const categories = [
  "Vidéo",
  "Événementiel",
  "Social media",
  "Communication",
  "Retail",
] as const;
export type Category = (typeof categories)[number];

export const identity = {
  name: "Julian Delepine",
  role: "Communication & création visuelle",
  location: "Nice · Côte d'Azur",
  email: "delepinejulian@gmail.com",
  availability:
    "En recherche d'alternance en communication dès septembre (2 jours école / 3 jours entreprise).",
  socials: [] as { label: string; href: string }[],
};

export const hero = {
  kicker: "Portfolio · 2024 — 2026",
  headline: ["Des images", "qui racontent."],
  intro:
    "Clips, événements, réseaux sociaux : je conçois et produis des contenus qui donnent envie de regarder.",
  /** Ton showreel en mp4 (ex. "/media/showreel.mp4"). Vide = image fixe. */
  video: "",
  poster: unsplash("1485846234645-a62644f84728", 2000),
  placeholder: true,
};

export const clients = [
  "PG Production",
  "Villa Cameline",
  "Mairie de Cagnes-sur-Mer",
  "JD Sports",
  "Scouts EEUDF Nice",
];

export const projects: Project[] = [
  {
    slug: "clip-pg-production",
    title: "Clip musical",
    client: "PG Production",
    year: "2025",
    category: "Vidéo",
    role: "Réalisation",
    description:
      "Réalisation d'un clip musical pour un artiste du label PG Production, de la préparation du tournage au montage.",
    cover: unsplash("1492691527719-9d1e07e534b4"),
    placeholder: true,
  },
  {
    slug: "release-party",
    title: "Release party",
    client: "PG Production",
    year: "2025",
    category: "Événementiel",
    role: "Organisation",
    description:
      "Organisation de la soirée de sortie du projet : logistique, programmation et communication autour de l'événement.",
    cover: unsplash("1470229722913-7c0e2dbbafd3"),
    placeholder: true,
  },
  {
    slug: "villa-cameline",
    title: "Vernissages",
    client: "Villa Cameline",
    year: "2025 — 2026",
    category: "Événementiel",
    role: "Organisation & accueil",
    description:
      "Participation à l'organisation de vernissages et d'événements culturels dans une galerie d'art contemporain.",
    cover: unsplash("1460661419201-fd4cecdf8a8b"),
    placeholder: true,
  },
  {
    slug: "reseaux-pg-production",
    title: "Réseaux sociaux",
    client: "PG Production",
    year: "2025",
    category: "Social media",
    role: "Gestion des réseaux",
    description:
      "Gestion des réseaux sociaux d'une agence de production et label de musique : contenus, calendrier et ton de marque.",
    cover: unsplash("1611162617474-5b21e879e113"),
    placeholder: true,
  },
  {
    slug: "scouts-eeudf",
    title: "Community management",
    client: "Scouts EEUDF Nice",
    year: "2024 — 2026",
    category: "Social media",
    role: "Responsable bénévole",
    description:
      "Responsable bénévole et community manager : animation de la communauté et valorisation des activités du groupe.",
    cover: unsplash("1493225457124-a3eb161ffa5f"),
    placeholder: true,
  },
  {
    slug: "mairie-cagnes",
    title: "Communication & protocole",
    client: "Mairie de Cagnes-sur-Mer",
    year: "2025",
    category: "Communication",
    role: "Stage",
    description:
      "Stage au service communication et protocole : supports de communication et gestion de projets municipaux.",
    cover: unsplash("1504384308090-c894fdcc538d"),
    placeholder: true,
  },
  {
    slug: "jd-sports",
    title: "Shop-fit",
    client: "JD Sports Cagnes-sur-Mer",
    year: "2025",
    category: "Retail",
    role: "Mise en espace & vente",
    description:
      "Réalisation du shop-fit du magasin et vente polyvalente : l'image de marque appliquée à l'espace physique.",
    cover: unsplash("1441986300917-64674bd600d8"),
    placeholder: true,
  },
];

export const expertises = [
  {
    title: "Réalisation vidéo & clips",
    text: "Écriture, tournage, montage.",
    image: unsplash("1492691527719-9d1e07e534b4", 900),
  },
  {
    title: "Direction artistique",
    text: "Une identité visuelle cohérente, du moodboard au rendu final.",
    image: unsplash("1460661419201-fd4cecdf8a8b", 900),
  },
  {
    title: "Social media & community",
    text: "Contenus, calendrier éditorial, animation de communauté.",
    image: unsplash("1611162617474-5b21e879e113", 900),
  },
  {
    title: "Événementiel & culture",
    text: "Vernissages, release party, coordination le jour J.",
    image: unsplash("1470229722913-7c0e2dbbafd3", 900),
  },
  {
    title: "Communication & projets",
    text: "Supports, protocole, gestion de projet de bout en bout.",
    image: unsplash("1504384308090-c894fdcc538d", 900),
  },
];

export const stats = [
  { value: "5", label: "structures accompagnées" },
  { value: "2 ans", label: "d'engagement associatif" },
  { value: "1", label: "clip musical réalisé" },
  { value: "19", label: "ans, et beaucoup d'envie" },
];

/* Galerie photo défilante : remplace par tes propres photos. */
export const photos = {
  placeholder: true,
  items: [
    { src: unsplash("1470229722913-7c0e2dbbafd3", 1000), alt: "Concert, lumières de scène" },
    { src: unsplash("1511671782779-c97d3d27a1d4", 1000), alt: "Microphone en studio" },
    { src: unsplash("1460661419201-fd4cecdf8a8b", 1000), alt: "Peinture colorée" },
    { src: unsplash("1493225457124-a3eb161ffa5f", 1000), alt: "Public d'un concert" },
    { src: unsplash("1485846234645-a62644f84728", 1000), alt: "Caméra de tournage" },
    { src: unsplash("1441986300917-64674bd600d8", 1000), alt: "Boutique de vêtements" },
  ],
};
