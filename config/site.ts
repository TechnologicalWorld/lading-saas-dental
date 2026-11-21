export const siteConfig = {
  name: "Dentia",
  description:
    "Gestiona citas, pacientes, historias clínicas, odontogramas, tratamientos, pagos y sucursales desde una sola plataforma odontológica.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  currency: "BOB",
  currencySymbol: "Bs",
  locale: "es-BO",
  popularPlan: "Profesional",
  routes: {
    home: "/",
    login: "/login",
    register: "/register",
    pricing: "/#planes",
    contact: "/contacto",
    privacy: "/privacidad",
    terms: "/terminos",
  },
} as const;

export const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Funciones", href: "/#funciones" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Planes", href: "/#planes" },
  { label: "Preguntas frecuentes", href: "/#preguntas" },
] as const;
