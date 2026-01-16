import React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import logoZaeom from "@/assets/logo-zaeom.svg"
import logoLumo from "@/assets/logo-lumo.svg"

export const FinalCTA = () => {
    return (
        <section className="py-32 px-6 relative overflow-visible">
            {/* Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#39F265]/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto rounded-[3rem] p-12 md:p-24 text-center bg-[#080808] border border-[#FEFDFA]/5 relative z-10 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,1)]"
            >
                {/* HUD Top Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#39F265] to-transparent opacity-50 shadow-[0_0_20px_#39F265]" />

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39F265]/20 bg-[#39F265]/5 mb-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39F265] animate-pulse" />
                        <span className="text-[10px] font-black text-[#39F265] uppercase tracking-[0.2em]">Sessão Final de Protocolo</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FEFDFA] mb-10 leading-[1.05] tracking-tight text-balance max-w-4xl mx-auto">
                        Sobra tempo de verdade ou seu dinheiro continua parado no <span className="text-gradient">funil?</span>
                    </h2>

                    <p className="text-[#FEFDFA]/40 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                        Deixe o operacional com quem entende e foque na estratégia que vai fazer seu negócio dobrar de tamanho este ano.
                    </p>

                    <div className="flex justify-center">
                        <div className="inline-block group relative">
                            <button
                                onClick={() => {
                                    const el = document.getElementById('solucoes');
                                    if (el) {
                                        const offset = 80;
                                        const bodyRect = document.body.getBoundingClientRect().top;
                                        const elementRect = el.getBoundingClientRect().top;
                                        const elementPosition = elementRect - bodyRect;
                                        const offsetPosition = elementPosition - offset;
                                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                    }
                                }}
                                className="group inline-flex min-w-[280px] cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] border border-white/10 text-md font-extrabold text-white tracking-tight bg-white/5 backdrop-blur-2xl rounded-2xl py-6 px-10 relative items-center justify-center gap-4 overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
                            >
                                <span className="relative z-10 uppercase font-black tracking-widest">QUERO COMEÇAR AGORA</span>
                                <Zap className="w-5 h-5 text-[#39F265] fill-current drop-shadow-[0_0_8px_rgba(57,242,101,0.5)]" />

                                {/* Inner Gradient Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#39F265]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button>

                            {/* External Aesthetic Glow */}
                            <span className="pointer-events-none absolute -bottom-4 left-1/2 z-0 h-10 w-48 -translate-x-1/2 rounded-full opacity-0 transition-all duration-500 ease-out group-hover:opacity-100" style={{ background: 'radial-gradient(60% 100% at 50% 50%, rgba(57, 242, 101, 0.4), transparent 80%)', filter: 'blur(15px)' }} aria-hidden="true"></span>
                        </div>
                    </div>
                </div>

                {/* Decorative Tech Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </motion.div>
        </section>
    )
}

export const Footer = () => {
    return (
        <footer className="py-20 px-6 border-t border-[#FEFDFA]/5 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
                    <div className="max-w-xs">
                        <img src={logoZaeom} alt="Zaeom Logo" className="h-10 w-auto mb-6" />
                        <p className="text-[#FEFDFA]/40 text-sm leading-relaxed">
                            Inteligência e autonomia para negócios que não aceitam limites. Transformando a gestão comercial em uma máquina de escala.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-16">
                        <div>
                            <h4 className="text-[#FEFDFA] font-bold mb-6 text-sm uppercase tracking-widest">Empresa</h4>
                            <ul className="space-y-4 text-[#FEFDFA]/40 text-sm">
                                <li><a href="#" className="hover:text-[#39F265] transition-colors">Sobre Nós</a></li>
                                <li><a href="#" className="hover:text-[#39F265] transition-colors">Carreiras</a></li>
                                <li><a href="#" className="hover:text-[#39F265] transition-colors">Politica de Privacidade</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[#FEFDFA] font-bold mb-6 text-sm uppercase tracking-widest">Contato</h4>
                            <ul className="space-y-4 text-[#FEFDFA]/40 text-sm">
                                <li><a href="#" className="hover:text-[#39F265] transition-colors">suporte@zaeom.com</a></li>
                                <li><a href="#" className="hover:text-[#39F265] transition-colors">vendas@zaeom.com</a></li>
                                <li><a href="#" className="hover:text-[#39F265] transition-colors">+55 (11) 9999-9999</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-[#FEFDFA]/5 relative">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-[#FEFDFA]/25 text-[9px] font-bold uppercase tracking-[0.3em]">
                        {/* Legal Info */}
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-1 rounded-full bg-[#39F265]" />
                                <p>ZAEOM LTDA © 2026</p>
                            </div>
                            <p className="hidden md:block opacity-20">|</p>
                            <p>TODOS OS DIREITOS RESERVADOS</p>
                            <p className="hidden md:block opacity-20">|</p>
                            <p>CNPJ: 00.000.000/0000-00</p>
                        </div>

                        {/* Credits */}
                        <div className="flex items-center gap-6 whitespace-nowrap">
                            <a
                                href="https://lumostudio.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group/lumo transition-all duration-300"
                            >
                                <span className="opacity-50 group-hover:opacity-80 transition-opacity">Feito com</span>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-3.5 h-3.5 text-[#39F265] drop-shadow-[0_0_8px_rgba(57,242,101,0.4)]"
                                    animate={{ scale: [1, 1.25, 1] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </motion.svg>
                                <span className="opacity-50 group-hover:opacity-80 transition-opacity">por</span>
                                <img src={logoLumo} alt="Lumo Studio" className="h-3 object-contain opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0" />
                            </a>
                            <div className="w-1 h-1 rounded-full bg-[#39F265]/40" />
                        </div>
                    </div>
                </div>

                {/* Dramatic Brand Signature Backdrop */}
                <div className="mt-24 relative overflow-hidden pointer-events-none select-none flex flex-col items-center">
                    <h2 className="text-[15vw] font-black text-[#FEFDFA]/[0.015] leading-[0.8] tracking-[-0.05em] uppercase italic inline-block">
                        ZAEOM
                    </h2>
                    <h2 className="text-[15vw] font-black text-[#FEFDFA]/[0.015] leading-[0.8] tracking-[-0.05em] uppercase italic inline-block -mt-[2vw]">
                        CORE
                    </h2>

                    {/* Perspective Line */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FEFDFA]/5 to-transparent" />
                </div>
            </div>
        </footer>
    )
}
