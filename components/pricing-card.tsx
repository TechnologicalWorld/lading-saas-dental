import Link from "next/link";
import { Check, MapPin, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { Plan } from "@/types/plan";

function limit(value: number | null) {
  if (value === null || value >= 999999) return "Ilimitado";
  return String(value);
}

function price(plan: Plan) {
  if (typeof plan.precioMensual === "string") return plan.precioMensual;
  const value = new Intl.NumberFormat(siteConfig.locale, {
    maximumFractionDigits: 2,
  }).format(plan.precioMensual ?? 0);
  return `${siteConfig.currencySymbol} ${value}`;
}

export function PricingCard({ plan }: { plan: Plan }) {
  const popular = plan.nombre.toLocaleLowerCase() === siteConfig.popularPlan.toLocaleLowerCase();
  return <article className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 ${popular ? "border-teal-500 shadow-lg shadow-teal-900/8" : "border-slate-200"}`}>{popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Más popular</span>}<h3 className="text-xl font-bold text-slate-950">{plan.nombre}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{plan.descripcion}</p><div className="mt-5 flex items-end gap-1"><span className="text-4xl font-bold tracking-tight text-slate-950">{price(plan)}</span>{typeof plan.precioMensual === "number" && plan.precioMensual > 0 && <span className="mb-1 text-sm text-slate-500">/mes</span>}</div><div className="mt-5 grid grid-cols-2 gap-2 border-y border-slate-100 py-4"><span className="flex items-center gap-2 text-xs font-semibold text-slate-600"><Users className="size-4 text-teal-600" />{limit(plan.limiteUsuarios)} usuarios</span><span className="flex items-center gap-2 text-xs font-semibold text-slate-600"><MapPin className="size-4 text-teal-600" />{limit(plan.limiteSucursales)} sedes</span></div><ul className="mt-5 flex-1 space-y-3">{plan.caracteristicas.filter((item) => item.incluido !== false).map((feature) => <li key={feature.id ?? feature.nombre} className="flex items-start gap-2 text-sm leading-5 text-slate-600"><Check className="mt-0.5 size-4 shrink-0 text-teal-600" />{feature.nombre}</li>)}</ul><Link href={siteConfig.routes.register} className={`button-base mt-7 w-full ${popular ? "bg-teal-600 text-white hover:bg-teal-700" : "border border-slate-200 text-slate-800 hover:bg-slate-50"}`}>{plan.nombre === "Empresarial" ? "Hablar con ventas" : plan.nombre === "Gratuito" ? "Empezar gratis" : "Elegir plan"}</Link></article>;
}
