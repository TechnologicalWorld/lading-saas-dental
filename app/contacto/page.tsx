import type { Metadata } from "next";
import { Building2, Clock3, Phone } from "lucide-react";
import { PublicPageShell } from "@/components/public-page-shell";
import { PublicForm } from "@/components/public-form";

export const metadata: Metadata = {
  title: "Contacto | SaaS Odontológico",
  description:
    "Contacta con el equipo de SaaS Odontológico en Bolivia para conocer la plataforma odontológica.",
};

export default function ContactPage() {
  return (
    <PublicPageShell
      eyebrow="Contacto"
      title="Hablemos sobre tu clínica"
      description="Cuéntanos cómo trabaja tu equipo y coordinaremos una demostración de la plataforma."
    >
      <div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]">
        <aside className="space-y-4">
          {[
            { icon: Phone, title: "WhatsApp", text: "+591 77793901" },
            {
              icon: Clock3,
              title: "Horario de referencia",
              text: "Lunes a viernes, de 09:00 a 18:00 (hora de Bolivia).",
            },
            {
              icon: Building2,
              title: "Atención en Bolivia",
              text: "Para odontólogos, consultorios y equipos multisucursal.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <Icon className="size-5 text-teal-700" />
              <h2 className="mt-3 font-bold text-slate-900">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </aside>
        <PublicForm />
      </div>
    </PublicPageShell>
  );
}
