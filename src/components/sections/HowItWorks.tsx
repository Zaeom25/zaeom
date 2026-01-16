import React from "react"
import { motion } from "framer-motion"
import { Search, Settings, ShieldCheck, TrendingUp, Cpu } from "lucide-react"

const steps = [
    {
        icon: Search,
        id: "STEP_01",
        title: "Mapeamos Dores",
        label: "ANALYSIS",
        description: "Analisamos seu fluxo atual e identificamos os gargalos operacionais que impedem seu crescimento."
    },
    {
        icon: Settings,
        id: "STEP_02",
        title: "Configuração Express",
        label: "DEPLOYMENT",
        description: "Ativamos seu agente personalizado em tempo recorde. Velocidade russa em infraestrutura global."
    },
    {
        icon: ShieldCheck,
        id: "STEP_03",
        title: "Definição de Limites",
        label: "AUTHORIZATION",
        description: "Você decide até onde a IA vai e onde o toque humano assume o controle total da negociação."
    },
    {
        icon: TrendingUp,
        id: "STEP_04",
        title: "Otimização Contínua",
        label: "SCALING",
        description: "Monitoramento real-time e ajustes finos para garantir que cada lead seja convertido com precisão."
    }
]

export const HowItWorks = () => {
    return (
        <section className="py-40 px-6 relative overflow-hidden" id="explorar">
            {/* Background Tech Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#39F265]/5 rounded-full pointer-events-none opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#39F265]/10 rounded-full pointer-events-none opacity-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-32">
                    <div className="glass-card px-4 py-1.5 rounded-lg border-[#39F265]/20 mb-8 flex items-center gap-3">
                        <Cpu className="w-4 h-4 text-[#39F265]" />
                        <span className="text-[10px] font-black text-[#FEFDFA]/40 uppercase tracking-[0.3em]">Protocolo de Implementação</span>
                    </div>
                    <h2 className="heading-xl text-5xl md:text-8xl">
                        Simples, Rápido e <br />
                        <span className="text-gradient">Sem Burocracia</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full glass-card p-10 rounded-[2.5rem] border-[#FEFDFA]/5 hover:border-[#39F265]/30 transition-all duration-700 flex flex-col relative overflow-hidden">
                                {/* Step ID Decal */}
                                <div className="absolute top-8 right-10 text-[10px] font-black font-mono text-[#FEFDFA]/20 tracking-widest group-hover:text-[#39F265] transition-colors">
                                    {step.id}
                                </div>

                                <div className="w-16 h-16 rounded-2xl bg-[#39F265]/10 flex items-center justify-center mb-12 group-hover:bg-[#39F265] group-hover:text-[#111111] transition-all duration-700 shadow-[0_0_30px_rgba(57,242,101,0)] group-hover:shadow-[0_0_40px_rgba(57,242,101,0.4)]">
                                    <step.icon className="w-8 h-8 text-[#39F265] group-hover:text-[#111111] transition-colors" />
                                </div>

                                <div className="mb-4">
                                    <span className="text-[10px] font-black text-[#39F265] uppercase tracking-widest bg-[#39F265]/10 px-2 py-0.5 rounded">
                                        {step.label}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-[#FEFDFA] mb-6 leading-tight font-heading">
                                    {step.title}
                                </h3>

                                <p className="text-[#FEFDFA]/40 text-sm leading-relaxed mb-10 flex-grow group-hover:text-[#FEFDFA]/70 transition-colors">
                                    {step.description}
                                </p>

                                {/* Progress Indicator */}
                                <div className="flex items-center gap-1 mt-auto">
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 flex-grow rounded-full transition-all duration-[1s] ${i <= index ? 'bg-[#39F265] shadow-[0_0_10px_#39F265]' : 'bg-[#FEFDFA]/10'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
