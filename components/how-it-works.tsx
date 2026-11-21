import { Building, CalendarCheck, Settings2 } from "lucide-react";
import { Container, PrimaryButton, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/config/site";

const steps = [
  { icon: Building, title: "Registra tu clínica", text: "Crea tu cuenta y añade la información esencial de tu consultorio." },
  { icon: Settings2, title: "Configura sucursal y equipo", text: "Invita a tu personal y define horarios, roles y permisos." },
  { icon: CalendarCheck, title: "Empieza a gestionar", text: "Organiza citas y pacientes desde una operación centralizada." },
];

export function HowItWorks() {
  return <section id="como-funciona" className="section-space scroll-mt-24 bg-white"><Container><SectionHeading eyebrow="Empieza sin complicaciones" title="Tu clínica organizada en tres pasos" description="Configura lo esencial y comienza a trabajar con una vista clara de tu operación." /><ol className="relative mt-12 grid gap-5 md:grid-cols-3">{steps.map(({ icon: Icon, title, text }, index) => <li key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"><span className="absolute -top-3 left-5 grid size-7 place-items-center rounded-full bg-slate-950 text-xs font-bold text-white">{index + 1}</span><span className="mx-auto grid size-12 place-items-center rounded-xl bg-teal-50 text-teal-700"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></li>)}</ol><div className="mt-9 flex justify-center"><PrimaryButton href={siteConfig.routes.register}>Crear mi cuenta</PrimaryButton></div></Container></section>;
}
