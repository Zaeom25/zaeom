import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Shield, Lock, Eye, FileText } from "lucide-react"

interface PrivacyModalProps {
    isOpen: boolean
    onClose: () => void
}

export const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl max-h-[80vh] bg-[#080808] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#39F265]/10 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-[#39F265]" />
                                </div>
                                <h2 className="text-xl font-bold text-[#FEFDFA] uppercase tracking-tighter">Política de Privacidade</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors text-white/40 hover:text-[#39F265]"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Body - Scrollable */}
                        <div
                            className="p-8 overflow-y-auto custom-scrollbar bg-dot-pattern"
                            data-lenis-prevent
                        >
                            <div className="space-y-8 text-[#FEFDFA]/60 text-sm leading-relaxed">
                                <section>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Lock className="w-4 h-4 text-[#39F265]" />
                                        <h3 className="text-[#FEFDFA] font-bold uppercase tracking-widest text-xs">Proteção de Dados</h3>
                                    </div>
                                    <p>
                                        Na Zaeom, a privacidade e a segurança dos seus dados operacionais são nossa prioridade absoluta. Esta política detalha como tratamos as informações coletadas através do nosso SOS (System).
                                    </p>
                                </section>

                                <section>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Eye className="w-4 h-4 text-[#39F265]" />
                                        <h3 className="text-[#FEFDFA] font-bold uppercase tracking-widest text-xs">Coleta de Informações</h3>
                                    </div>
                                    <p>
                                        Coletamos dados estritamente necessários para o funcionamento dos nossos protocolos de IA, incluindo:
                                    </p>
                                    <ul className="list-disc pl-5 mt-3 space-y-2">
                                        <li>Dados de Contato: Nome, e-mail e WhatsApp para agendamentos.</li>
                                        <li>Metadados de Uso: Informações técnicas para otimização da performance do agente.</li>
                                        <li>Fluxos Operacionais: Dados fornecidos voluntariamente para o treinamento de modelos personalizados.</li>
                                    </ul>
                                </section>

                                <section>
                                    <div className="flex items-center gap-2 mb-3">
                                        <FileText className="w-4 h-4 text-[#39F265]" />
                                        <h3 className="text-[#FEFDFA] font-bold uppercase tracking-widest text-xs">Uso dos Dados</h3>
                                    </div>
                                    <p>
                                        Seus dados são utilizados exclusivamente para:
                                    </p>
                                    <ul className="list-disc pl-5 mt-3 space-y-2">
                                        <li>Personalização de respostas dos agentes autônomos.</li>
                                        <li>Garantia da segurança da infraestrutura híbrida.</li>
                                        <li>Comunicações diretas sobre o status do seu protocolo Z-01.</li>
                                    </ul>
                                </section>

                                <section className="p-6 rounded-2xl bg-[#39F265]/5 border border-[#39F265]/10">
                                    <h3 className="text-[#39F265] font-bold mb-2">Transparência Total</h3>
                                    <p className="text-[#39F265]/80">
                                        Não vendemos, compartilhamos ou alugamos seus dados para terceiros. O ativo mais valioso da sua empresa é a sua inteligência de negócio, e nós a protegemos como tal.
                                    </p>
                                </section>

                                <p className="text-center pt-8 border-t border-white/5 opacity-40 text-[10px] uppercase tracking-widest">
                                    Ultima atualização: Janeiro 2026 • Protocolo Zaeom
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
