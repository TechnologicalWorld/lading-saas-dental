import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Container, PrimaryButton } from "@/components/ui";
import { siteConfig } from "@/config/site";

export function FinalCTA() {
  return <section className="bg-white pb-20 pt-8 sm:pb-28"><Container><div className="overflow-hidden rounded-[2rem] bg-teal-700 px-6 py-14 text-center text-white sm:px-12 sm:py-16"><h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Conoce SaaS Dental en una demostración</h2><p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-teal-50/85 sm:text-lg">Revisemos la operación de tu clínica y los módulos que mejor encajan con tu equipo.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><PrimaryButton light href={siteConfig.routes.contact}>Solicitar demostración</PrimaryButton><Link href={siteConfig.routes.whatsapp} target="_blank" rel="noreferrer" className="button-base border border-teal-300/60 text-white hover:bg-teal-800"><MessageCircle className="size-4" />Escribir por WhatsApp</Link></div></div></Container></section>;
}
