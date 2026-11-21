import Link from "next/link";
import { Container, PrimaryButton } from "@/components/ui";
import { siteConfig } from "@/config/site";

export function FinalCTA() {
  return <section className="bg-white pb-20 pt-8 sm:pb-28"><Container><div className="cta-pattern overflow-hidden rounded-[2rem] bg-teal-600 px-6 py-14 text-center text-white sm:px-12 sm:py-16"><h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Transforma la gestión de tu clínica dental</h2><p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-teal-50/85 sm:text-lg">Empieza a organizar tu equipo, tus pacientes y tu operación desde una sola plataforma.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><PrimaryButton light href={siteConfig.routes.register}>Comenzar prueba gratis</PrimaryButton><Link href={siteConfig.routes.contact} className="button-base border border-teal-300/60 text-white hover:bg-teal-700">Hablar con ventas</Link></div><p className="mt-5 text-sm font-semibold text-teal-50/80">14 días gratis · Sin tarjeta · Sin compromiso</p></div></Container></section>;
}
