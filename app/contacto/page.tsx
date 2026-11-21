import type { Metadata } from "next";
import { Building2, Clock3, MapPin } from "lucide-react";
import { PublicPageShell } from "@/components/public-page-shell";
import { PublicForm } from "@/components/public-form";

export const metadata: Metadata = { title: "Contacto | Dentia", description: "Contacta con el equipo de Dentia en Bolivia para conocer la plataforma odontológica." };

export default function ContactPage() {
  return <PublicPageShell eyebrow="Contacto" title="Hablemos sobre tu clínica" description="Cuéntanos cómo trabaja tu equipo y te ayudaremos a evaluar la mejor forma de organizar su operación."><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><aside className="space-y-4">{[{ icon: MapPin, title: "Atención en Bolivia", text: "Servicio orientado a clínicas y consultorios del país." }, { icon: Clock3, title: "Horario de referencia", text: "Lunes a viernes, de 09:00 a 18:00 (hora de Bolivia)." }, { icon: Building2, title: "Para todo tipo de clínica", text: "Odontólogos independientes, consultorios y equipos multisucursal." }].map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><Icon className="size-5 text-teal-700" /><h2 className="mt-3 font-bold text-slate-900">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>)}</aside><PublicForm type="contact" /></div></PublicPageShell>;
}
