const WHATSAPP_NUMBER = "553197773383";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Links de WhatsApp com mensagens pré-montadas por intenção de CTA. */
export const whatsapp = {
  know: buildWhatsAppUrl(
    "Olá! Quero conhecer o Baldux e entender a melhor configuração para a minha sorveteria.",
  ),
  knowHeader: buildWhatsAppUrl(
    "Olá! Vim pelo site e quero conhecer o Baldux.",
  ),
  smart: buildWhatsAppUrl(
    "Olá! Tenho interesse no Kit Baldux Smart (R$ 1.750,00) e gostaria de alinhar a aquisição.",
  ),
  standard: buildWhatsAppUrl(
    "Olá! Tenho interesse no Baldux Standard (R$ 695,00 por unidade) e gostaria de alinhar a aquisição.",
  ),
  specialist: buildWhatsAppUrl(
    "Olá! Gostaria de falar com um especialista sobre o Baldux para a minha operação.",
  ),
  team: buildWhatsAppUrl(
    "Olá! Quero falar com a equipe Baldux sobre a configuração ideal para a minha sorveteria.",
  ),
} as const;

export const WHATSAPP_DISPLAY = "+55 31 9777-3383";
