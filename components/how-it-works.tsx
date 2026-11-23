import { Building, CalendarCheck, Settings2 } from "lucide-react";
import { Container, PrimaryButton, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/config/site";

const steps = [
  { icon: Building, title: "Cuéntanos sobre tu clínica", text: "Conocemos tu forma de trabajo, tus sucursales y las necesidades del equipo." },
  { icon: Settings2, title: "Preparamos la configuración", text: "Definimos horarios, profesionales, roles y accesos para tu operación." },
  { icon: CalendarCheck, title: "Acompañamos la puesta en marcha", text: "Tu equipo recibe orientación para comenzar a gestionar la jornada." },
];

export function HowItWorks() {
  return <section id="como-funciona" className="section-space scroll-mt-24 bg-white"><Container><SectionHeading eyebrow="Implementación acompañada" title="Ponemos en marcha SaaS Dental contigo" description="Un proceso directo para adaptar la plataforma al trabajo real de tu clínica." /><ol className="relative mt-12 grid gap-5 md:grid-cols-3">{steps.map(({ icon: Icon, title, text }, index) => <li key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center"><span className="absolute -top-3 left-5 grid size-7 place-items-center rounded-full bg-slate-950 text-xs font-bold text-white">{index + 1}</span><span className="mx-auto grid size-12 place-items-center rounded-xl bg-teal-50 text-teal-700"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></li>)}</ol><div className="mt-9 flex justify-center"><PrimaryButton href={siteConfig.routes.contact}>Solicitar una demostración</PrimaryButton></div></Container></section>;
}
