export const WHATSAPP_NUMBER = "5511999999999"

export const getWhatsappLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_MESSAGES = {
    GENERAL: "Olá! Vim através do site e gostaria de saber mais sobre como a Zaeom pode otimizar minha operação.",
    AGENT_IA: "Olá! Gostaria de saber mais sobre o Agente de IA para automação de tarefas massivas.",
    AGENT_HUMAN: "Olá! Gostaria de falar com um especialista sobre o Agente Humano da Zaeom para demandas sensíveis.",
    AGENT_HYBRID: "Olá! Tenho interesse no Agente Híbrido para equilibrar tecnologia e sensibilidade na minha operação.",
    AGENT_CUSTOM: "Olá! Gostaria de uma solução sob medida (Agente Personalizado) para os fluxos únicos da minha empresa.",
    PROTOCOL: "Olá! Gostaria de iniciar o protocolo Zaeom e devolver o ativo mais valioso à minha gestão: o tempo."
}
