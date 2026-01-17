import React from "react"
import { motion } from "framer-motion"
import { Target, ArrowRight, Zap, ShieldCheck } from "lucide-react"
import soniaImg from "@/assets/Sonia Ribeiro - 01.webp"
import { getWhatsappLink, WHATSAPP_MESSAGES } from "@/utils/whatsapp"

export const About = () => {
    return (
        <section
            id="sobre"
            className="relative py-24 md:py-32 px-6 overflow-hidden bg-black"
        >
            {/* Soft Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#39F265]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Visual Column - Refined & Clean */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Minimalism Frame */}
                            <div className="absolute -inset-4 border border-[#FEFDFA]/5 rounded-[3.5rem] pointer-events-none" />
                            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#39F265] rounded-tl-[3.5rem]" />

                            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] bg-[#121212] group">
                                <img
                                    src={soniaImg}
                                    alt="Sônia Ribeiro - CEO Zaeom"
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                {/* Refined Descriptor Label */}
                                <div className="absolute bottom-10 left-10 text-left">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-bold text-[#FEFDFA] tracking-tighter">Sônia Ribeiro</span>
                                        <span className="text-[10px] font-black text-[#39F265] uppercase tracking-[0.3em] mt-1">Founder & CEO</span>
                                    </div>
                                </div>
                            </div>

                            {/* FILLING THE VOID: Brand Stats/Pillars - Hidden on Mobile */}
                            <div className="mt-10 hidden md:grid grid-cols-2 gap-4">
                                <div className="p-5 rounded-[2rem] bg-[#FEFDFA]/[0.02] border border-[#FEFDFA]/5 group hover:border-[#39F265]/30 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-[#39F265]/10 flex items-center justify-center mb-3">
                                        <Zap className="w-4 h-4 text-[#39F265]" />
                                    </div>
                                    <span className="text-[9px] font-black text-[#39F265] uppercase tracking-[0.2em] block mb-1">Eficiência</span>
                                    <p className="text-xs font-bold text-[#FEFDFA]/60 leading-tight">Processos até 10x mais velozes que humanos.</p>
                                </div>
                                <div className="p-5 rounded-[2rem] bg-[#FEFDFA]/[0.02] border border-[#FEFDFA]/5 group hover:border-[#39F265]/30 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-[#39F265]/10 flex items-center justify-center mb-3">
                                        <ShieldCheck className="w-4 h-4 text-[#39F265]" />
                                    </div>
                                    <span className="text-[9px] font-black text-[#39F265] uppercase tracking-[0.2em] block mb-1">Confiança</span>
                                    <p className="text-xs font-bold text-[#FEFDFA]/60 leading-tight">Segurança de dados e curadoria especializada.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Column - Structured & Premium */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Section Label */}
                            <div className="flex items-center gap-3 mb-10">
                                <span className="h-px w-8 bg-[#39F265]/30" />
                                <span className="text-[11px] font-black text-[#39F265] uppercase tracking-[0.4em]">Propósito / DNA</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-bold text-[#FEFDFA] mb-12 tracking-tighter leading-[0.9]">
                                A Visão por trás <br />da <span className="text-gradient">Zaeom</span>
                            </h2>

                            <div className="space-y-12">
                                {/* The Problem/Insight (Quote Style but Clean) */}
                                <p className="text-2xl md:text-3xl font-medium text-[#FEFDFA] leading-tight tracking-tight border-l-2 border-[#39F265] pl-8">
                                    "A Zaeom nasceu de uma verdade inevitável: a maioria das empresas estagna por excesso de processos manuais que geram paralisia operacional."
                                </p>

                                {/* The Solution (Body Text) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#FEFDFA]/50 text-base leading-relaxed">
                                    <div className="space-y-4">
                                        <p>
                                            Somos uma empresa de <span className="text-[#FEFDFA]">Inteligência Operacional Híbrida</span>. Acreditamos que o empreendedor deve criar e liderar, não apenas processar tarefas repetitivas.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <p>
                                            Unimos o melhor de dois mundos: a eficiência incansável da <span className="text-[#39F265]">IA</span> e a capacidade analítica e empática do ser humano para entregas de alta qualidade.
                                        </p>
                                    </div>
                                </div>

                                {/* The Mission - Callout Style */}
                                <a
                                    href={getWhatsappLink(WHATSAPP_MESSAGES.PROTOCOL)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block group overflow-hidden rounded-[2rem] bg-[#FEFDFA]/[0.02] border border-[#FEFDFA]/5 p-8 md:p-10 transition-colors hover:bg-[#FEFDFA]/[0.04] cursor-pointer"
                                >
                                    <div className="absolute top-0 right-0 p-6 opacity-10">
                                        <Target className="w-12 h-12 text-[#39F265]" />
                                    </div>
                                    <span className="text-[9px] font-black text-[#39F265] uppercase tracking-[0.3em] block mb-4">Nossa Missão</span>
                                    <p className="text-xl md:text-2xl font-bold text-[#FEFDFA] italic leading-snug">
                                        Devolver a você o ativo mais valioso do mundo: <br /> <span className="text-[#39F265]">o seu tempo</span>.
                                    </p>
                                    <div className="mt-8 flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
                                        <span className="text-[11px] font-black text-[#FEFDFA] uppercase tracking-[0.2em]">Conhecer Protocolo</span>
                                        <ArrowRight className="w-4 h-4 text-[#39F265]" />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -bottom-20 right-[-10%] opacity-[0.03] select-none pointer-events-none hidden lg:block">
                <span className="text-[300px] font-black tracking-tighter text-[#FEFDFA] uppercase">OS_Z</span>
            </div>
        </section>
    )
}
