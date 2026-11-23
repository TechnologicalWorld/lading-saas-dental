"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AlertCircle, FlaskConical, RefreshCw } from "lucide-react";
import { Container, PrimaryButton, SectionHeading } from "@/components/ui";
import { PricingCard } from "@/components/pricing-card";
import { getPlans } from "@/services/plans";
import { siteConfig } from "@/config/site";
import type { PlansResult } from "@/types/plan";

export function PricingSkeleton() {
  return <section id="planes" className="section-space bg-slate-50"><Container><div className="mx-auto h-10 w-72 animate-pulse rounded-lg bg-slate-200 motion-reduce:animate-none" /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 3 }, (_, index) => <div key={index} className="h-[430px] animate-pulse rounded-2xl border border-slate-200 bg-white p-6 motion-reduce:animate-none"><div className="h-6 w-24 rounded bg-slate-200" /><div className="mt-4 h-4 w-full rounded bg-slate-100" /><div className="mt-2 h-4 w-3/4 rounded bg-slate-100" /><div className="mt-7 h-10 w-28 rounded bg-slate-200" /></div>)}</div><p className="sr-only" role="status">Cargando planes</p></Container></section>;
}

export function PricingSection() {
  const [result, setResult] = useState<PlansResult | null>(null);

  useEffect(() => {
    let active = true;
    getPlans().then((plans) => {
      if (active) setResult(plans);
    });
    return () => { active = false; };
  }, []);

  if (!result) return <PricingSkeleton />;

  const subscriptions = result.plans.filter(
    (plan) => !plan.esPrueba && plan.precioMensual !== 0,
  );

  return <section id="planes" className="section-space scroll-mt-24 bg-slate-50"><Container><SectionHeading eyebrow="Planes para cada etapa" title="Capacidad acorde al tamaño de tu clínica" description="Compara las opciones disponibles y conversa con nuestro equipo antes de contratar." />{result.source === "fallback" && <div className="mx-auto mt-7 flex max-w-2xl items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-xs font-semibold text-amber-800"><FlaskConical className="size-4 shrink-0" />Mostrando datos referenciales mientras conectas la API de planes.</div>}{result.source === "error" && <State icon={<AlertCircle />} title="No pudimos cargar los planes" text="Intenta nuevamente en unos minutos o contacta con nuestro equipo." />}{result.source === "empty" && <State icon={<RefreshCw />} title="Los planes estarán disponibles pronto" text="Contacta con nuestro equipo para recibir información comercial." />}{subscriptions.length > 0 && <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">{subscriptions.map((plan) => <PricingCard key={plan.id} plan={plan} />)}</div>}<p className="mt-6 text-center text-xs text-slate-500">Los límites y características pueden variar según la configuración del plan.</p></Container></section>;
}

function State({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center"><span className="mx-auto grid size-12 place-items-center rounded-xl bg-teal-50 text-teal-700 [&>svg]:size-5">{icon}</span><h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm text-slate-600">{text}</p><div className="mt-5"><PrimaryButton href={siteConfig.routes.contact}>Hablar con ventas</PrimaryButton></div></div>;
}
