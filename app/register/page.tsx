import type { Metadata } from "next";
import { PublicPageShell } from "@/components/public-page-shell";
import { PublicForm } from "@/components/public-form";

export const metadata: Metadata = { title: "Crear cuenta | Dentia", description: "Crea una cuenta y comienza la prueba gratuita de Dentia.", robots: { index: false, follow: false } };

export default function RegisterPage() {
  return <PublicPageShell narrow eyebrow="Prueba gratuita" title="Organiza tu clínica con Dentia" description="Crea tu cuenta para comenzar 14 días gratis, sin tarjeta y sin compromiso."><div className="mx-auto max-w-lg"><PublicForm type="register" /><p className="mt-4 text-center text-xs leading-5 text-slate-500">Al crear tu cuenta declararás haber leído los <a className="font-semibold text-teal-700 hover:underline" href="/terminos">términos</a> y el aviso de <a className="font-semibold text-teal-700 hover:underline" href="/privacidad">privacidad</a>.</p></div></PublicPageShell>;
}
