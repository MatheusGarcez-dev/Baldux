import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { INSTAGRAM_URL, navLinks } from "../../data/pricing";
import { WHATSAPP_DISPLAY, whatsapp } from "../../data/whatsapp";
import { BrandLogo } from "../ui/BrandLogo";
import { Container } from "../ui/Container";

const footerLinks = [
  ...navLinks,
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#topo" aria-label="Baldux, início">
              <BrandLogo imgClassName="h-12 w-auto sm:h-14" />
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-silver-dark">
              Solução profissional para operações de sorveteria que buscam mais
              clareza no fluxo do dia a dia.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={whatsapp.team}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] text-graphite/80 transition-colors hover:text-graphite"
                aria-label="WhatsApp Baldux"
              >
                <WhatsappLogo size={18} weight="regular" aria-hidden />
                <span className="underline-reveal">{WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] text-graphite/80 transition-colors hover:text-graphite"
                aria-label="Instagram da Baldux"
              >
                <InstagramLogo size={18} weight="regular" aria-hidden />
                <span className="underline-reveal">@baldux_baldinhointeligente</span>
              </a>
            </div>
          </div>

          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="underline-reveal text-[13px] text-graphite/80 hover:text-graphite"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-[12px] text-silver-dark">
            © 2026 Baldux. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
