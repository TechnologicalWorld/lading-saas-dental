import Image from "next/image";
import Link from "next/link";
import { Container, PrimaryButton } from "@/components/ui";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-slate-100 py-20 sm:min-h-[720px] lg:min-h-[760px]"
    >
      <Image
        src="./hero-clinica-bolivia.webp"
        alt="Consultorio odontológico moderno con equipamiento clínico"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center]"
      />

      {/* Overlay mucho más suave: la imagen se ve claramente */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/85 via-white/55 to-transparent" />

      {/* Refuerzo de legibilidad solo detrás del texto en desktop */}
      <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-1/2 bg-gradient-to-r from-white/70 to-transparent sm:block" />

      <Container>
        <div className="max-w-2xl rounded-3xl bg-white/85 p-6 shadow-lg backdrop-blur-sm sm:bg-white/70 sm:p-9 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
          <p className="mb-5 text-sm font-bold uppercase tracking-[.16em] text-teal-700">
            Gestión odontológica en Bolivia
          </p>
          <h1 className="text-balance text-[2.6rem] font-bold leading-[1.06] tracking-[-.045em] text-slate-950 sm:text-6xl lg:text-[4rem]">
            La operación de tu clínica, clara y conectada.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-700">
            SaaS Odontológico reúne agenda, pacientes, historias clínicas,
            tratamientos y pagos para que tu equipo trabaje con la misma
            información.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={siteConfig.routes.contact}>
              Solicitar una demostración
            </PrimaryButton>
            <Link
              href="/#funciones"
              className="button-base border border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-teal-50"
            >
              Ver funciones
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}