import type { Metadata } from "next";
import { PublicPageShell } from "@/components/public-page-shell";
import { PublicForm } from "@/components/public-form";

export const metadata: Metadata = { title: "Iniciar sesión | Dentia", description: "Accede a tu cuenta de Dentia.", robots: { index: false, follow: false } };

export default function LoginPage() {
  return <PublicPageShell narrow eyebrow="Acceso a la plataforma" title="Bienvenido de nuevo" description="Ingresa tus datos para acceder a la gestión de tu clínica."><div className="mx-auto max-w-lg"><PublicForm type="login" /></div></PublicPageShell>;
}
