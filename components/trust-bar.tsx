import { Building2, Cloud, ShieldCheck, Stethoscope } from "lucide-react";
import { Container } from "@/components/ui";

const items = [
  { icon: Stethoscope, text: "Diseñado para odontología" },
  { icon: Building2, text: "Información organizada por clínica" },
  { icon: ShieldCheck, text: "Control de acceso por roles" },
  { icon: Cloud, text: "Disponible desde cualquier dispositivo" },
];

export function TrustBar() {
  return <section aria-label="Características de confianza" className="border-y border-slate-200 bg-slate-50"><Container className="grid grid-cols-2 divide-x-0 divide-y divide-slate-200 sm:grid-cols-4 sm:divide-x sm:divide-y-0">{items.map(({ icon: Icon, text }) => <div key={text} className="flex min-h-24 items-center gap-3 px-2 py-5 sm:justify-center sm:px-4"><Icon className="size-5 shrink-0 text-teal-600" /><span className="text-sm font-semibold leading-5 text-slate-700">{text}</span></div>)}</Container></section>;
}
