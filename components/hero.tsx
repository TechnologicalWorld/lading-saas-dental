import Link from "next/link";
import { CheckCircle2, Play, Sparkles } from "lucide-react";
import { Container, PrimaryButton } from "@/components/ui";
import { DashboardPreview } from "@/components/dashboard-preview";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="inicio" className="hero-grid overflow-hidden bg-white pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-10">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800 sm:text-sm"><Sparkles className="size-3.5" />Software integral para clínicas dentales</div>
          <h1 className="text-balance text-[2.6rem] font-bold leading-[1.04] tracking-[-.055em] text-slate-950 sm:text-6xl lg:text-[4.15rem]">Todo lo que tu clínica dental necesita, <span className="text-teal-600">en un solo lugar.</span></h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-600">Organiza citas, pacientes, historias clínicas, odontogramas, tratamientos y pagos desde una plataforma segura y diseñada para equipos odontológicos.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={siteConfig.routes.register}>Comenzar prueba gratis</PrimaryButton>
            <Link href="/#como-funciona" className="button-base border border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-teal-50"><Play className="size-4 fill-current" />Ver cómo funciona</Link>
          </div>
          <p className="mt-4 text-sm font-medium text-slate-500">14 días gratis · Sin tarjeta · Sin compromiso</p>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3" aria-label="Beneficios principales">
            {["Información centralizada", "Acceso por roles", "Múltiples sucursales"].map((item) => <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="size-4 text-teal-600" />{item}</li>)}
          </ul>
        </div>
        <DashboardPreview />
      </Container>
    </section>
  );
}
