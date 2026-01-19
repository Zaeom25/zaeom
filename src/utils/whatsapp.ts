import i18n from '@/i18n';

export const WHATSAPP_NUMBER = "5548999085144"

// --- CENTRAL DE MANUTENÇÃO DO WHATSAPP ---
// Edite os textos abaixo para alterar o que é enviado em Português.
export const WHATSAPP_MESSAGES = {
    GENERAL: "Olá! Vim através do site e gostaria de saber mais sobre como a Zaeom pode otimizar minha operação.",
    AGENT_IA: "Olá! Gostaria de saber mais sobre o Agente de IA para automação de tarefas massivas.",
    AGENT_HUMAN: "Olá! Gostaria de falar com um especialista sobre o Agente Humano da Zaeom para demandas sensíveis.",
    AGENT_HYBRID: "Olá! Tenho interesse no Agente Híbrido para equilibrar tecnologia e sensibilidade na minha operação.",
    AGENT_CUSTOM: "Olá! Gostaria de uma solução sob medida (Agente Personalizado) para os fluxos únicos da minha empresa.",
    PROTOCOL: "Olá! Gostaria de iniciar o protocolo Zaeom e devolver o ativo mais valioso à minha gestão: o tempo."
}

// Mapeamento interno para que o sistema saiba qual chave de tradução usar para cada texto
const MESSAGE_KEYS: Record<string, string> = {
    [WHATSAPP_MESSAGES.GENERAL]: "general",
    [WHATSAPP_MESSAGES.AGENT_IA]: "agent_ia",
    [WHATSAPP_MESSAGES.AGENT_HUMAN]: "agent_human",
    [WHATSAPP_MESSAGES.AGENT_HYBRID]: "agent_hybrid",
    [WHATSAPP_MESSAGES.AGENT_CUSTOM]: "agent_custom",
    [WHATSAPP_MESSAGES.PROTOCOL]: "protocol"
};

export const getWhatsappLink = (messageText: string) => {
    // Se estiver em português, usa o texto que veio direto (que é o que você editou acima)
    if (i18n.language?.startsWith('pt')) {
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`
    }

    // Se estiver em outro idioma, tenta encontrar a chave correspondente para traduzir
    const key = MESSAGE_KEYS[messageText];
    const finalMessage = key ? i18n.t(`whatsapp.${key}`, { defaultValue: messageText }) : messageText;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`
}
