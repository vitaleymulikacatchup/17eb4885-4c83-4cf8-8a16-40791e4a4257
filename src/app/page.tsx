"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarLayoutFloatingInline 
        logoSrc="/images/logo.svg"
        logoAlt="NovaScale Logo"
        navItems={
          [
            { name: "Hero", id: "#hero" },
            { name: "About", id: "#about" },
            { name: "How to Buy", id: "#how-to-buy" },
            { name: "Tokenomics", id: "#tokenomics" },
            { name: "Footer", id: "#footer" }
          ]
        }
        buttonText="Get Started"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero 
          title="Welcome to NovaScale"
          subtitle="Your journey to the next dimension begins here."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Us"
          descriptions={[
            "We are a SaaS company focused on providing top-notch solutions to your challenges.",
            "Our innovative approach and customer-first mentality set us apart in the market."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D 
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Explore the stats behind NovaScale."
          kpiItems={[
            { value: "10M", description: "Total Supply" },
            { value: "5M", description: "Circulating Supply" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          columns={[
            { title: "Links", items: [
              { label: "Home", onClick: () => {} },
              { label: "About", onClick: () => {} },
              { label: "Services", onClick: () => {} },
              { label: "Contact", onClick: () => {} }
            ] },
            { title: "Social", items: [
              { label: "Twitter", onClick: () => {} },
              { label: "LinkedIn", onClick: () => {} }
            ] },
            { title: "Legal", items: [
              { label: "Privacy Policy", onClick: () => {} },
              { label: "Terms of Service", onClick: () => {} }
            ] }
          ]}
          copyrightText="© 2023 NovaScale. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}