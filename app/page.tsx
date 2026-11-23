import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeaturesGrid } from "@/components/features-grid";
import { HowItWorks } from "@/components/how-it-works";
import { PricingSection } from "@/components/pricing-section";
import { RoleBenefits } from "@/components/role-benefits";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    url: siteConfig.url,
    audience: {
      "@type": "Audience",
      audienceType: "Clínicas y consultorios odontológicos",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <FeaturesGrid />
        <HowItWorks />
        <PricingSection />
        <RoleBenefits />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
