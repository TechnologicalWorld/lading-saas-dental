"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, BarChart3, CalendarCheck2, ClipboardPlus, Files, MapPinned, ScanLine, ShieldCheck, Stethoscope, UsersRound, WalletCards } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";

const features = [
  { icon: CalendarCheck2, title: "Agenda inteligente", text: "Coordina citas, disponibilidad y bloqueos sin cruces de horarios." },
  { icon: UsersRound, title: "Gestión de pacientes", text: "Encuentra datos, antecedentes y actividad de cada paciente en segundos." },
  { icon: Files, title: "Historia clínica digital", text: "Mantén evoluciones y archivos adjuntos ordenados en un mismo historial." },
  { icon: ScanLine, title: "Odontograma digital", text: "Registra cambios visualmente, conserva el historial y expórtalo a PDF." },
  { icon: Stethoscope, title: "Diagnósticos y recetas", text: "Documenta la atención de forma clara dentro del expediente." },
  { icon: ClipboardPlus, title: "Planes de tratamiento", text: "Organiza procedimientos y da seguimiento al avance de cada caso." },
  { icon: WalletCards, title: "Pagos y saldos", text: "Conoce lo pagado y lo pendiente sin revisar hojas separadas." },
  { icon: BarChart3, title: "Reportes y estadísticas", text: "Convierte la actividad clínica y financiera en información útil." },
  { icon: ShieldCheck, title: "Personal, roles y permisos", text: "Da a cada integrante acceso solo a lo que necesita para trabajar." },
  { icon: MapPinned, title: "Gestión multisucursal", text: "Supervisa varias sedes desde una cuenta, con contexto independiente." },
];

export function FeaturesGrid() {
  const trackRef = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: "smooth" });
  }

  return (
    <section id="funciones" className="section-space bg-slate-50 scroll-mt-24">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading align="left" eyebrow="Módulos principales" title="Una plataforma para el trabajo diario" description="Explora las herramientas disponibles para el equipo clínico y administrativo." />
          <div className="hidden shrink-0 gap-2 sm:flex" aria-label="Controles del carrusel">
            <button type="button" onClick={() => move(-1)} className="grid size-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" aria-label="Ver funciones anteriores"><ArrowLeft className="size-4" /></button>
            <button type="button" onClick={() => move(1)} className="grid size-11 place-items-center rounded-full bg-slate-950 text-white hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" aria-label="Ver más funciones"><ArrowRight className="size-4" /></button>
          </div>
        </div>
        <div ref={trackRef} className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:thin] [scrollbar-color:#94a3b8_transparent]" aria-label="Funciones de SaaS Dental">
          {features.map(({ icon: Icon, title, text }) => <article key={title} className="feature-card min-w-[86%] snap-start rounded-2xl border border-slate-200 bg-white p-6 sm:min-w-[47%] lg:min-w-[31%]"><span className="grid size-11 place-items-center rounded-xl bg-teal-50 text-teal-700"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">{text}</p></article>)}
        </div>
      </Container>
    </section>
  );
}
