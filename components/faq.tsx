import { Container, SectionHeading } from "@/components/ui";

const faqs = [
  ["¿Necesito instalar algún programa?", "No. La plataforma está pensada para utilizarse desde un navegador web en dispositivos compatibles."],
  ["¿Puedo administrar varias sucursales?", "Sí. Los planes que incluyen gestión multisucursal permiten cambiar de contexto y administrar varias sedes desde una sola cuenta."],
  ["¿Puedo asignar permisos diferentes a cada usuario?", "Sí. Puedes organizar el acceso de acuerdo con el rol y las responsabilidades de cada integrante del equipo."],
  ["¿La plataforma incluye odontograma?", "Sí. Incluye una representación digital con historial de cambios y opción de exportación a PDF, según la configuración del plan."],
  ["¿Puedo controlar los pagos de los tratamientos?", "Sí. Puedes registrar pagos y consultar totales, avances y saldos pendientes asociados a los tratamientos."],
  ["¿Existe un período de prueba?", "Sí. La propuesta actual contempla 14 días de prueba sin tarjeta y sin compromiso. Este texto puede ajustarse según las condiciones comerciales definitivas."],
  ["¿Puedo cambiar de plan posteriormente?", "La selección de plan está pensada para adaptarse al crecimiento de la clínica. Las condiciones de cambio se definirán en la política comercial final."],
  ["¿Qué sucede con mi información al cancelar?", "La política de conservación, exportación y eliminación de información se detallará en los términos del servicio antes del lanzamiento comercial."],
];

export function FAQ() {
  return <section id="preguntas" className="section-space scroll-mt-24 bg-white"><Container className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><SectionHeading align="left" eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas antes de empezar" description="Información clara para evaluar si Dentia encaja con la forma de trabajar de tu clínica." /><div className="divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([question, answer], index) => <details key={question} className="faq group" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-bold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"><span>{question}</span><span className="relative size-5 shrink-0 text-teal-700 before:absolute before:left-1/2 before:top-1/2 before:h-0.5 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-1/2 after:h-3 after:w-0.5 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-current after:transition-transform group-open:after:rotate-90" /></summary><p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div></Container></section>;
}
