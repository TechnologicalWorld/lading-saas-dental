import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui";

export function PublicPageShell({ eyebrow, title, description, children, narrow = false }: { eyebrow: string; title: string; description: string; children: ReactNode; narrow?: boolean }) {
  return <><Header /><main className="min-h-[70vh] bg-slate-50"><Container className={`py-12 sm:py-16 ${narrow ? "max-w-4xl" : ""}`}><Link href="/" className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-slate-600 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"><ArrowLeft className="size-4" />Volver al inicio</Link><header className="mt-10 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.16em] text-teal-700">{eyebrow}</p><h1 className="mt-3 text-balance text-4xl font-bold tracking-[-.04em] text-slate-950 sm:text-5xl">{title}</h1><p className="mt-5 text-pretty text-lg leading-8 text-slate-600">{description}</p></header><div className="mt-10">{children}</div></Container></main><Footer /></>;
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="border-t border-slate-200 py-7 first:border-t-0 first:pt-0"><h2 className="text-xl font-bold text-slate-900">{title}</h2><div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">{children}</div></section>;
}
