const appUrl = (
  process.env.NEXT_PUBLIC_APP_URL ??
  "https://saas.dental.technologicalworldbolivia.com"
).replace(/\/$/, "");

export const siteConfig = {
  name: "SaaS Odontológico",
  description:
    "Gestiona citas, pacientes, historias clínicas, odontogramas, tratamientos, pagos y sucursales desde una sola plataforma odontológica.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:31000",
  appUrl,
  currency: "BOB",
  currencySymbol: "Bs",
  locale: "es-BO",
  whatsappNumber: "59177793901",
  popularPlan: "Profesional",
  routes: {
    home: "/",
    login: `${appUrl}/login`,
    pricing: "/#planes",
    contact: "/contacto",
    whatsapp: "https://wa.me/59177793901",
    privacy: "/privacidad",
    terms: "/terminos",
  },
} as const;

export const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Funciones", href: "/#funciones" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Planes", href: "/#planes" },
] as const;
