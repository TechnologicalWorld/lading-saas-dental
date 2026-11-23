import { fallbackPlans } from "@/mocks/plans";
import type { ApiPlan, Plan, PlanFeature, PlansApiResponse, PlansResult } from "@/types/plan";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

function features(values: Array<PlanFeature | string> = []): PlanFeature[] {
  return values.map((value) => typeof value === "string" ? { nombre: value } : value);
}

function normalize(plan: ApiPlan, index: number): Plan {
  return {
    id: plan.id ?? index,
    nombre: plan.nombre ?? "Plan",
    descripcion: plan.descripcion ?? "Plan configurable para tu clínica.",
    precioMensual: plan.precioMensual ?? plan.precio_mensual ?? null,
    moneda: plan.moneda ?? null,
    simboloMoneda: plan.simboloMoneda ?? plan.moneda_simbolo ?? null,
    limiteUsuarios: plan.limiteUsuarios ?? plan.limite_usuarios ?? plan.max_usuarios ?? null,
    limiteSucursales: plan.limiteSucursales ?? plan.limite_sucursales ?? plan.max_sucursales ?? null,
    caracteristicas: features(plan.caracteristicas ?? plan.features),
    esPrueba: plan.esPrueba ?? plan.es_prueba ?? false,
  };
}

function readPlans(payload: PlansApiResponse): Plan[] {
  const items = Array.isArray(payload) ? payload : "data" in payload ? payload.data : payload.planes;
  return items.map(normalize);
}

export async function getPlans(): Promise<PlansResult> {
  try {
    const response = await fetch(`${API_URL}/api/v1/planes`, {
      signal: AbortSignal.timeout(3500),
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error(`API de planes: ${response.status}`);
    const plans = readPlans((await response.json()) as PlansApiResponse);
    return plans.length ? { plans, source: "api" } : { plans: [], source: "empty" };
  } catch {
    if (process.env.NODE_ENV !== "production") {
      return { plans: fallbackPlans, source: "fallback" };
    }
    return { plans: [], source: "error" };
  }
}
