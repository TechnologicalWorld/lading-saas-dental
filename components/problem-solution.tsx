import { ArrowRight, CalendarX2, CircleDollarSign, CopyX, FileX2, Network } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";

const problems = [
  { icon: CalendarX2, label: "Agenda dispersa" },
  { icon: FileX2, label: "Historias en papel" },
  { icon: CopyX, label: "Información duplicada" },
  { icon: CircleDollarSign, label: "Pagos sin control" },
  { icon: Network, label: "Sucursales desconectadas" },
];

export function ProblemSolution() {
  return (
    <section className="section-space bg-white">
      <Container>
        <SectionHeading eyebrow="Una operación más simple" title="Menos tareas administrativas. Más tiempo para tus pacientes." description="Reúne la información que hoy vive en agendas, hojas y sistemas separados. Tu equipo trabaja con el mismo contexto, desde el primer contacto hasta el último pago." />
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <span className="text-sm font-bold text-slate-500">Antes</span>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {problems.map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600"><span className="grid size-9 place-items-center rounded-lg bg-rose-50 text-rose-500"><Icon className="size-4" /></span>{label}</div>)}
            </div>
          </div>
          <div className="relative z-10 mx-auto -my-1 grid size-12 place-items-center rounded-full bg-teal-600 text-white shadow-lg shadow-teal-900/20 lg:my-auto lg:-mx-1"><ArrowRight className="size-5 rotate-90 lg:rotate-0" /></div>
          <div className="flex flex-col justify-center rounded-3xl border border-teal-200 bg-teal-950 p-7 text-white sm:p-9">
            <span className="text-sm font-bold text-teal-300">Con Dentia</span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Una sola fuente de información para toda tu clínica</h3>
            <p className="mt-4 leading-7 text-teal-50/75">Agenda, expediente clínico, tratamientos, pagos y equipo conectados en un flujo claro. Menos búsquedas, menos pasos manuales y más visibilidad.</p>
            <div className="mt-7 flex flex-wrap gap-2">{["Operación centralizada", "Información actualizada", "Trabajo coordinado"].map((item) => <span key={item} className="rounded-full border border-teal-700 bg-teal-900/60 px-3 py-1.5 text-xs font-semibold text-teal-100">{item}</span>)}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
