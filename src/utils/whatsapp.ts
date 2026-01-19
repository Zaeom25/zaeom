import i18n from '@/i18n';

export const WHATSAPP_NUMBER = "5548999085144"

export const getWhatsappLink = (messageKey: string) => {
    // Try to get the translated message, fallback to the key itself if not found
    const message = i18n.t(`whatsapp.${messageKey.toLowerCase()}`, messageKey);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_MESSAGES = {
    GENERAL: "GENERAL",
    AGENT_IA: "AGENT_IA",
    AGENT_HUMAN: "AGENT_HUMAN",
    AGENT_HYBRID: "AGENT_HYBRID",
    AGENT_CUSTOM: "AGENT_CUSTOM",
    PROTOCOL: "PROTOCOL"
}
