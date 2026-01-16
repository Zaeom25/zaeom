import React from "react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Bot, User, Zap, Gem, CheckCircle2, ArrowUpRight, Cpu, Layers, Globe } from "lucide-react"

const agents = [
    {
        icon: Bot,
        id: "01",
        label: "AUTOMATED",
        title: "Agente de IA",
        description: "Automação total 24/7 para triagem e suporte básico. O motor que nunca dorme.",
        features: ["Resposta Instantânea", "Atendimento Infinito", "Custo Mínimo"],
        colSpan: "md:col-span-2",
        bg: "bg-[#39F265]/5"
    },
    {
        icon: User,
        id: "02",
        label: "ELITE CLOSERS",
        title: "Agente Humano",
        description: "Especialistas treinados para fechamento de vendas complexas e delicadas.",
        features: ["Alta Conversão", "Negociação Real", "Empatia Total"],
        colSpan: "md:col-span-1",
        bg: "bg-transparent"
    },
    {
        icon: Zap,
        id: "03",
        label: "BALANCE",
        title: "Agente Híbrido",
        description: "O melhor dos dois mundos. IA triagem e Humano fecha em sincronia total.",
        features: ["Eficiência Máxima", "Escalabilidade", "Quesito Especial"],
        colSpan: "md:col-span-1",
        bg: "bg-transparent"
    },
    {
        icon: Gem,
        id: "04",
        label: "BESPOKE",
        title: "Agente Personalizado",
        description: "Soluções sob medida para fluxos comerciais ultra-específicos e complexos.",
        features: ["White Label", "Integração Full", "Suporte VIP"],
        colSpan: "md:col-span-2",
        bg: "bg-[#39F265]/5"
    }
]

export const Solution = () => {
    return (
        <section className="py-24 md:py-40 px-6 relative" id="solucoes">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20 border-b border-[#FEFDFA]/5 pb-12 md:pb-16">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="w-8 h-8 rounded-lg bg-[#39F265]/10 flex items-center justify-center">
                                <Layers className="w-5 h-5 text-[#39F265]" />
                            </div>
                            <span className="text-[11px] font-black text-[#FEFDFA]/40 uppercase tracking-[0.4em]">Infraestrutura de Agentes</span>
                        </motion.div>
                        <h2 className="heading-xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl flex flex-col items-start">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[#FEFDFA]"
                            >
                                Qual Agente Resolve
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-gradient"
                            >
                                Seu Problema Hoje?
                            </motion.span>
                        </h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-[#FEFDFA]/40 text-sm font-medium uppercase tracking-[0.2em] max-w-[320px] leading-relaxed border-l border-[#39F265]/20 pl-6 mb-2 text-left"
                    >
                        Explore os motores neurais projetados para escalar sua operação comercial.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className={`${agent.colSpan}`}
                        >
                            <Card className={`group relative h-full flex flex-col p-10 glass-card border-[#FEFDFA]/5 hover:border-[#39F265]/30 transition-all duration-700 overflow-hidden rounded-[2.5rem] ${agent.bg}`}>

                                <div className="absolute top-10 right-10 text-5xl font-black text-[#FEFDFA]/[0.03] leading-none pointer-events-none group-hover:text-[#39F265]/[0.1] transition-all duration-700 font-mono italic">
                                    /{agent.id}
                                </div>

                                <div className="mb-12 relative z-10 w-fit">
                                    <div className="p-4 rounded-2xl bg-[#111111] border border-[#FEFDFA]/10 group-hover:border-[#39F265]/40 transition-all duration-500 text-[#39F265]">
                                        <agent.icon className="w-8 h-8" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow">
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#39F265] mb-2">{agent.label}</div>
                                    <h3 className="text-3xl font-bold text-[#FEFDFA] mb-6 group-hover:translate-x-2 transition-transform duration-500 font-heading">{agent.title}</h3>
                                    <p className="text-[#FEFDFA]/50 text-base leading-relaxed mb-10 max-w-sm">
                                        {agent.description}
                                    </p>
                                </div>

                                <div className="relative z-10 space-y-6 pt-8 border-t border-[#FEFDFA]/5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                        {agent.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#39F265]" />
                                                <span className="text-[11px] font-bold text-[#FEFDFA]/60 uppercase tracking-widest">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 flex items-center justify-between group/btn">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#39F265] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                                            Deploy Protocol
                                        </span>
                                        <div className="w-12 h-12 rounded-full border border-[#FEFDFA]/10 flex items-center justify-center group-hover:border-[#39F265] group-hover:bg-[#39F265] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(57,242,101,0.5)]">
                                            <ArrowUpRight className="w-5 h-5 text-[#FEFDFA] group-hover:text-[#111111] transition-colors" />
                                        </div>
                                    </div>
                                </div>

                                {/* Interior Glow Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#39F265]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
