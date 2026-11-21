"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button type="button" className="grid size-11 place-items-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((value) => !value)}>
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open && (
        <div id="mobile-menu" className="absolute inset-x-4 top-[4.75rem] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10">
          <nav aria-label="Navegación móvil" className="flex flex-col">
            {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-800">{item.label}</Link>)}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
            <Link href={siteConfig.routes.login} className="button-base border border-slate-200 text-slate-800">Iniciar sesión</Link>
            <Link href={siteConfig.routes.register} className="button-base bg-teal-600 text-white">Prueba gratis</Link>
          </div>
        </div>
      )}
    </div>
  );
}
