import { BarChart3, CalendarDays, Stethoscope } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";

const roles = [
  { icon: Stethoscope, role: "Para odontólogos", title: "Más contexto durante la atención", text: "Consulta el expediente, las evoluciones y el plan de tratamiento sin perder tiempo buscando información." },
  { icon: CalendarDays, role: "Para recepción", title: "Una agenda que facilita el día", text: "Coordina profesionales, confirma citas y responde al paciente con información actualizada." },
  { icon: BarChart3, role: "Para administradores", title: "Visibilidad para decidir mejor", text: "Revisa actividad, pagos, equipo y sucursales desde una perspectiva centralizada." },
];

export function RoleBenefits() {
  return <section className="section-space bg-slate-50"><Container><SectionHeading eyebrow="Valor para todo el equipo" title="Cada rol trabaja mejor con la información correcta" description="SaaS Dental conecta el trabajo clínico y administrativo sin obligar a todos a usar las mismas herramientas." /><div className="mt-12 grid gap-5 lg:grid-cols-3">{roles.map(({ icon: Icon, role, title, text }) => <article key={role} className="rounded-2xl border border-slate-200 bg-white p-7"><span className="grid size-12 place-items-center rounded-xl bg-teal-950 text-teal-200"><Icon className="size-5" /></span><p className="mt-6 text-sm font-bold text-teal-700">{role}</p><h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></Container></section>;
}
