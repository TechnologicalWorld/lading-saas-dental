import type { Metadata } from "next";
import Link from "next/link";
import { LegalSection, PublicPageShell } from "@/components/public-page-shell";

export const metadata: Metadata = {
  title: "Términos de uso | SaaS Odontológico",
  description: "Términos preliminares de uso de SaaS Odontológico.",
};

export default function TermsPage() {
  return (
    <PublicPageShell narrow eyebrow="Información legal" title="Términos de uso" description="Condiciones generales previstas para el acceso al sitio y a SaaS Odontológico.">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><strong>Documento preliminar.</strong> Los términos comerciales y legales definitivos deben ser revisados por asesoría legal en Bolivia antes de formalizar contrataciones o pagos.</div>
        <p className="mb-8 text-sm font-semibold text-slate-500">Última actualización: 20 de noviembre de 2026</p>
        <LegalSection title="1. Objeto"><p>SaaS Odontológico es una plataforma de apoyo para la gestión clínica, administrativa y financiera de consultorios y clínicas odontológicas. Estos términos regulan el acceso al sitio y, cuando esté disponible, al servicio.</p></LegalSection>
        <LegalSection title="2. Cuenta y acceso"><p>La clínica contratante debe proporcionar información correcta, proteger sus credenciales y gestionar adecuadamente los permisos otorgados a su equipo. Las cuentas son de uso autorizado y no deben compartirse fuera de la organización.</p></LegalSection>
        <LegalSection title="3. Uso permitido"><p>El servicio deberá utilizarse para fines legítimos de gestión odontológica. No se permite intentar vulnerar la plataforma, interferir con su funcionamiento, acceder a información ajena ni utilizarla para actividades contrarias a la normativa aplicable.</p></LegalSection>
        <LegalSection title="4. Responsabilidad clínica"><p>La plataforma organiza información y procesos, pero no reemplaza el criterio profesional, el diagnóstico ni las decisiones de un odontólogo habilitado. Cada clínica conserva la responsabilidad sobre la atención y los datos que incorpora.</p></LegalSection>
        <LegalSection title="5. Planes y precios"><p>Los precios para Bolivia se mostrarán en bolivianos (Bs). Los límites, características, impuestos y condiciones de facturación se informarán antes de contratar.</p></LegalSection>
        <LegalSection title="6. Disponibilidad y cambios"><p>Podrán realizarse mejoras, mantenimientos o cambios razonables en las funciones. Los compromisos de disponibilidad, soporte y continuidad deberán establecerse en el contrato o plan definitivo.</p></LegalSection>
        <LegalSection title="7. Cancelación y datos"><p>Las condiciones de cancelación, exportación, conservación y eliminación de información se comunicarán de forma clara antes de la contratación. La versión definitiva deberá establecer plazos y responsabilidades para ambas partes.</p></LegalSection>
        <LegalSection title="8. Propiedad intelectual"><p>La interfaz, marca, componentes y materiales de SaaS Odontológico pertenecen a sus respectivos titulares. El uso del servicio no transfiere derechos de propiedad sobre la plataforma.</p></LegalSection>
        <LegalSection title="9. Consultas"><p>Para consultas sobre estos términos, utiliza la página de <Link href="/contacto" className="font-bold text-teal-700 hover:underline">contacto</Link>. Los datos formales del proveedor y el canal legal se incorporarán antes del lanzamiento.</p></LegalSection>
      </div>
    </PublicPageShell>
  );
}
