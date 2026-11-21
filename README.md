# Dentia — landing SaaS odontológica

Landing comercial responsive para una plataforma de gestión de clínicas dentales. Construida con Next.js 16 (App Router), TypeScript, Tailwind CSS 4 y Lucide React.

## Ejecutar localmente

Requisitos: Node.js LTS (20, 22 o 24) y pnpm.

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Abre `http://localhost:3000`. Para verificar producción:

```bash
pnpm lint
pnpm build
pnpm start
```

## API de planes

La sección de precios consulta `GET ${NEXT_PUBLIC_API_URL}/api/v1/planes`. La presentación comercial está configurada para Bolivia y muestra importes en bolivianos (`BOB`, símbolo `Bs`). Configura:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Durante desarrollo, si la API no responde, se muestran los datos claramente identificados de `mocks/plans.ts`. En producción se presenta un estado de error. La interfaz contempla carga con `Suspense`, error, lista vacía y datos cargados.

## Estructura

```text
app/                  página, metadata, robots, sitemap y Open Graph
components/           secciones y componentes reutilizables
config/site.ts        marca, rutas, moneda y plan destacado
mocks/plans.ts        datos de desarrollo
services/plans.ts     consumo y normalización de la API
types/plan.ts         contratos TypeScript
```

## Personalización pendiente

- Nombre y URL del producto en `config/site.ts` (actualmente “Dentia”).
- Nombre del plan popular en `config/site.ts`.
- URL pública y URL de la API en las variables de entorno.
- Condiciones definitivas de la prueba gratuita.
- Integración backend de los formularios de `/login`, `/register` y `/contacto`.
- Política final sobre conservación de información al cancelar.
- Datos de contacto y enlaces sociales, cuando estén disponibles.
- Precios, límites y características reales entregados por el backend.

Los mockups son representaciones visuales y sus datos son demostrativos. No contienen información médica real ni implementan un odontograma clínicamente operativo.
