export type PlanFeature = {
  id?: number | string;
  nombre: string;
  descripcion?: string | null;
  incluido?: boolean;
};

export type Plan = {
  id: number | string;
  nombre: string;
  descripcion: string;
  precioMensual: number | string | null;
  moneda?: string | null;
  simboloMoneda?: string | null;
  limiteUsuarios: number | null;
  limiteSucursales: number | null;
  caracteristicas: PlanFeature[];
  esPrueba?: boolean;
};

export type ApiPlan = Omit<Partial<Plan>, "caracteristicas"> & {
  precio_mensual?: number | string | null;
  moneda_simbolo?: string | null;
  limite_usuarios?: number | null;
  max_usuarios?: number | null;
  limite_sucursales?: number | null;
  max_sucursales?: number | null;
  caracteristicas?: Array<PlanFeature | string>;
  features?: Array<PlanFeature | string>;
  es_prueba?: boolean;
};

export type PlansApiResponse =
  | ApiPlan[]
  | { data: ApiPlan[] }
  | { planes: ApiPlan[] };

export type PlansResult = {
  plans: Plan[];
  source: "api" | "fallback" | "empty" | "error";
};
