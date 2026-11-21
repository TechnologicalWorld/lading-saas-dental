import { BarChart3, CalendarCheck2, ClipboardPlus, Files, MapPinned, ScanLine, ShieldCheck, Stethoscope, UsersRound, WalletCards } from "lucide-react";
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
  return (
    <section id="funciones" className="section-space bg-slate-50 scroll-mt-24">
      <Container>
        <SectionHeading eyebrow="Todo conectado" title="Herramientas que acompañan cada etapa de la atención" description="Desde la reserva de una cita hasta el seguimiento financiero, cada módulo ayuda a tu equipo a trabajar con claridad." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, index) => <article key={title} className={`feature-card rounded-2xl border border-slate-200 bg-white p-6 ${index === 0 || index === 9 ? "lg:col-span-2" : ""}`}><span className="grid size-11 place-items-center rounded-xl bg-teal-50 text-teal-700"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">{text}</p></article>)}
        </div>
      </Container>
    </section>
  );
}
