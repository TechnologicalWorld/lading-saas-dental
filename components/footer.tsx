import Link from "next/link";
import { Container, Logo } from "@/components/ui";
import { siteConfig } from "@/config/site";

const columns = [
  {
    title: "Producto",
    links: [
      ["Funciones", "/#funciones"],
      ["Planes", siteConfig.routes.pricing],
      ["Cómo funciona", "/#como-funciona"],
    ],
  },
  {
    title: "Ayuda",
    links: [
      ["Contacto", siteConfig.routes.contact],
      ["WhatsApp", siteConfig.routes.whatsapp],
      ["Iniciar sesión", siteConfig.routes.login],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacidad", siteConfig.routes.privacy],
      ["Términos", siteConfig.routes.terms],
    ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <Container>
        <div className="grid gap-10 border-b border-slate-800 pb-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Gestión clínica, administrativa y financiera para equipos
              odontológicos.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold text-white">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 transition-colors hover:text-teal-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {CURRENT_YEAR} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>Hecho para equipos odontológicos de Bolivia.</p>
        </div>
      </Container>
    </footer>
  );
}
