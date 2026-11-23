import Link from "next/link";
import { Container, PrimaryButton } from "@/components/ui";
import { DashboardPreview } from "@/components/dashboard-preview";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="inicio" className="hero-grid overflow-hidden bg-white pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-10">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[.16em] text-teal-700">Gestión odontológica en Bolivia</p>
          <h1 className="text-balance text-[2.6rem] font-bold leading-[1.06] tracking-[-.045em] text-slate-950 sm:text-6xl lg:text-[4rem]">La operación de tu clínica, clara y conectada.</h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-600">SaaS Dental reúne agenda, pacientes, historias clínicas, tratamientos y pagos para que tu equipo trabaje con la misma información.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={siteConfig.routes.contact}>Solicitar una demostración</PrimaryButton>
            <Link href="/#funciones" className="button-base border border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-teal-50">Ver funciones</Link>
          </div>
        </div>
        <DashboardPreview />
      </Container>
    </section>
  );
}
