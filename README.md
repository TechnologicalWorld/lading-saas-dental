# SaaS Odontológico — landing SaaS odontológica

Landing comercial responsive para una plataforma de gestión de clínicas dentales. Construida con Next.js 16 (App Router), TypeScript, Tailwind CSS 4 y Lucide React.

## Ejecutar localmente

Requisitos: Node.js LTS (20, 22 o 24) y pnpm.

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Abre `http://localhost:3000`. Para generar los archivos estáticos de producción:

```bash
pnpm lint
pnpm build
```

El build genera la carpeta `out/`. Puedes subir su contenido directamente a Nginx, Apache, cPanel, un bucket o cualquier hosting estático.

## API de planes

La sección de precios consulta `GET ${NEXT_PUBLIC_API_URL}/api/v1/planes`. La presentación comercial está configurada para Bolivia y muestra importes en bolivianos (`BOB`, símbolo `Bs`). Configura:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=https://saas.dental.technologicalworldbolivia.com
```

Los planes se consultan desde el navegador porque el sitio se exporta como archivos estáticos. Durante desarrollo, si la API no responde, se muestran los datos claramente identificados de `mocks/plans.ts`. En producción se presenta un estado de error. El backend debe permitir solicitudes CORS desde el dominio de la landing.

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

- Nombre y URL del producto en `config/site.ts` (actualmente “SaaS Odontológico”).
- Nombre del plan popular en `config/site.ts`.
- URL pública y URL de la API en las variables de entorno.
- Condiciones comerciales y contractuales definitivas.
- Número de WhatsApp comercial en `config/site.ts`.
- Política final sobre conservación de información al cancelar.
- Datos de contacto y enlaces sociales, cuando estén disponibles.
- Precios, límites y características reales entregados por el backend.

Los mockups son representaciones visuales y sus datos son demostrativos. No contienen información médica real ni implementan un odontograma clínicamente operativo.
