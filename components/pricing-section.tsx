import type { ReactNode } from "react";
import { AlertCircle, FlaskConical, RefreshCw } from "lucide-react";
import { Container, PrimaryButton, SectionHeading } from "@/components/ui";
import { PricingCard } from "@/components/pricing-card";
import { getPlans } from "@/services/plans";
import { siteConfig } from "@/config/site";

export function PricingSkeleton() {
  return <section id="planes" className="section-space bg-slate-50"><Container><div className="mx-auto h-10 w-72 animate-pulse rounded-lg bg-slate-200 motion-reduce:animate-none" /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <div key={index} className="h-[430px] animate-pulse rounded-2xl border border-slate-200 bg-white p-6 motion-reduce:animate-none"><div className="h-6 w-24 rounded bg-slate-200" /><div className="mt-4 h-4 w-full rounded bg-slate-100" /><div className="mt-2 h-4 w-3/4 rounded bg-slate-100" /><div className="mt-7 h-10 w-28 rounded bg-slate-200" /></div>)}</div><p className="sr-only" role="status">Cargando planes</p></Container></section>;
}

export async function PricingSection() {
  const result = await getPlans();
  const trial = result.plans.find((plan) => plan.esPrueba || plan.nombre.toLocaleLowerCase().includes("prueba"));
  const subscriptions = result.plans.filter((plan) => plan !== trial);
  return <section id="planes" className="section-space scroll-mt-24 bg-slate-50"><Container><SectionHeading eyebrow="Planes para cada etapa" title="Empieza simple. Crece a tu ritmo." description="Elige el nivel de capacidad que mejor acompaña la operación de tu clínica." />{result.source === "fallback" && <div className="mx-auto mt-7 flex max-w-2xl items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-xs font-semibold text-amber-800"><FlaskConical className="size-4 shrink-0" />Mostrando datos de demostración mientras conectas la API de planes.</div>}{result.source === "error" && <State icon={<AlertCircle />} title="No pudimos cargar los planes" text="Intenta nuevamente en unos minutos o contacta con nuestro equipo." />}{result.source === "empty" && <State icon={<RefreshCw />} title="Los planes estarán disponibles pronto" text="Estamos preparando las opciones comerciales. Puedes comenzar la prueba mientras tanto." />}{subscriptions.length > 0 && <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{subscriptions.map((plan) => <PricingCard key={plan.id} plan={plan} />)}</div>}{trial && <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-2xl bg-teal-950 p-6 text-white sm:flex-row sm:items-center sm:p-8"><div className="flex gap-4"><span className="hidden size-12 shrink-0 place-items-center rounded-xl bg-teal-800 text-teal-200 sm:grid"><FlaskConical className="size-5" /></span><div><p className="text-sm font-bold text-teal-300">{trial.nombre}</p><h3 className="mt-1 text-xl font-bold">Conoce la plataforma antes de elegir</h3><p className="mt-2 text-sm text-teal-100/70">{trial.descripcion} Sin tarjeta · Sin compromiso.</p></div></div><PrimaryButton light href={siteConfig.routes.register}>Comenzar prueba</PrimaryButton></div>}<p className="mt-6 text-center text-xs text-slate-500">Los límites y características pueden variar según la configuración del plan.</p></Container></section>;
}

function State({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center"><span className="mx-auto grid size-12 place-items-center rounded-xl bg-teal-50 text-teal-700 [&>svg]:size-5">{icon}</span><h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm text-slate-600">{text}</p><div className="mt-5"><PrimaryButton href={siteConfig.routes.register}>Probar Dentia</PrimaryButton></div></div>;
}
