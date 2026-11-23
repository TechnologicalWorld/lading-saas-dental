import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500" aria-label={`${siteConfig.name}, inicio`}>
      <span className="relative grid size-9 place-items-center rounded-xl bg-teal-600 text-white shadow-sm shadow-teal-900/15">
        <span className="absolute size-3.5 rounded-full border-[3px] border-white" />
        <span className="absolute bottom-1.5 h-2.5 w-1 rounded-full bg-white" />
      </span>
      <span className={`text-xl font-bold tracking-tight ${light ? "text-white" : "text-slate-950"}`}>{siteConfig.name}</span>
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[.16em] text-teal-700">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-bold tracking-[-.035em] text-slate-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">{title}</h2>
      {description && <p className="mt-5 text-pretty text-base leading-7 text-slate-600 sm:text-lg">{description}</p>}
    </div>
  );
}

export function PrimaryButton({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={`button-base group ${light ? "bg-white text-slate-950 hover:bg-teal-50" : "bg-teal-600 text-white hover:bg-teal-700"}`}>
      {children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
