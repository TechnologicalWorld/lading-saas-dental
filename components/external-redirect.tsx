import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Logo } from "@/components/ui";

export function ExternalRedirect({ href, action }: { href: string; action: string }) {
  return <main className="grid min-h-screen place-items-center bg-slate-50 px-5"><meta httpEquiv="refresh" content={`0;url=${href}`} /><Container className="max-w-lg"><div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"><div className="flex justify-center"><Logo /></div><h1 className="mt-7 text-2xl font-bold text-slate-950">Redirigiendo al sistema</h1><p className="mt-3 text-sm leading-6 text-slate-600">Te estamos llevando a la plataforma para {action}.</p><Link href={href} className="button-base mt-6 w-full bg-teal-600 text-white hover:bg-teal-700">Continuar <ArrowUpRight className="size-4" /></Link></div></Container></main>;
}
