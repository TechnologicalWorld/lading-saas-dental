import Link from "next/link";
import { Container, Logo } from "@/components/ui";
import { MobileNavigation } from "@/components/mobile-navigation";
import { navigation, siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-lg">
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Logo />
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href={siteConfig.routes.login} className="button-base text-slate-700 hover:bg-slate-100">Iniciar sesión</Link>
          <Link href={siteConfig.routes.contact} className="button-base bg-teal-600 text-white hover:bg-teal-700">Solicitar demo</Link>
        </div>
        <MobileNavigation />
      </Container>
    </header>
  );
}
