import React from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from "framer-motion"
import { Clock, MousePointer2, Brain, Target, MessageSquare, Shield, Activity, BarChart3 } from "lucide-react"

const NumberTicker = ({ value, suffix = "", decimals = 0, delay = 0 }: { value: number, suffix?: string, decimals?: number, delay?: number }) => {
    const ref = React.useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    })
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    React.useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                motionValue.set(value)
            }, delay * 1000)
            return () => clearTimeout(timer)
        }
    }, [isInView, value, motionValue, delay])

    React.useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(decimals) + suffix
            }
        })
    }, [springValue, decimals, suffix])

    return (
        <span ref={ref} className="tabular-nums">
            0{suffix}
        </span>
    )
}

const NeuralFeature = ({ icon: Icon, title, description, badge }: { icon: any, title: string, description: string, badge?: string }) => {
    return (
        <div className="relative p-8 flex flex-col items-start text-left group transition-all duration-500">
            {/* Technical HUD Marker */}
            <div className="absolute top-0 left-0 w-3 h-px bg-[#39F265]/30" />
            <div className="absolute top-0 left-0 h-3 w-px bg-[#39F265]/30" />

            <div className="relative">
                <div className="inline-flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#39F265]/5 border border-[#39F265]/10 flex items-center justify-center group-hover:bg-[#39F265]/10 group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-5 h-5 text-[#39F265]" />
                    </div>
                    {badge && (
                        <span className="text-[9px] font-black text-[#39F265]/40 uppercase tracking-[0.2em]">
                            {badge}
                        </span>
                    )}
                </div>

                <h3 className="text-lg font-bold text-[#FEFDFA] mb-3 tracking-tight group-hover:text-[#39F265] transition-colors duration-500">{title}</h3>
                <p className="text-sm md:text-sm text-[#FEFDFA]/40 md:text-[#FEFDFA]/30 leading-relaxed max-w-full md:max-w-[280px] group-hover:text-[#FEFDFA]/50 transition-colors duration-500">{description}</p>
            </div>

            {/* Subtle glow behind icon on hover */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#39F265]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
    )
}

export const Hero = () => {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const containerRef = React.useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const cards = containerRef.current.getElementsByClassName("spotlight-card")
        for (const card of cards as any) {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            card.style.setProperty("--mouse-x", `${x}px`)
            card.style.setProperty("--mouse-y", `${y}px`)
        }
    }

    return (
        <section className="relative pt-32 pb-48 px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#39F265]/5 rounded-full blur-[80px] lg:blur-[160px]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#39F265]/20 bg-[#39F265]/5 mb-8 md:mb-12 overflow-hidden group">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#39F265] animate-pulse" />
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#39F265]">Neural System Active</span>
                        </div>
                        <div className="w-px h-3 bg-[#39F265]/20" />
                        <span className="text-[9px] md:text-[10px] font-bold text-[#FEFDFA]/40 uppercase tracking-[0.2em]">Protocolo Z-1 / 2026</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-[6.5rem] 2xl:text-[7.5rem] font-bold mb-8 md:mb-10 max-w-6xl mx-auto px-4 text-balance leading-[1.1] md:leading-[0.9] tracking-tight md:tracking-[-0.04em] text-[#FEFDFA]">
                        {"Transforme a sua".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="inline-block mr-[0.2em]"
                            >
                                {word}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="text-gradient block"
                        >
                            Gestão Comercial
                        </motion.span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-4xl mx-auto mb-16 px-4"
                    >
                        <p className="text-lg md:text-xl lg:text-2xl text-[#FEFDFA]/50 leading-relaxed font-medium text-balance">
                            Ative agentes de IA de alta fidelidade para converter, agendar e gerir seus leads no piloto automático.
                            Reduza custos operacionais em <span className="text-[#39F265]">38%</span> e garanta a previsibilidade que sua escala exige.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-24 md:mb-32">
                        <div className="inline-block group relative w-full md:w-auto px-4 md:px-0">
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
                                className="group inline-flex w-full md:min-w-[300px] cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] border border-white/10 text-xs md:text-sm font-bold text-white tracking-[0.1em] bg-white/5 backdrop-blur-3xl rounded-2xl py-6 md:py-7 px-8 md:px-10 relative items-center justify-center gap-4 md:gap-5 overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)]"
                            >
                                <span className="relative z-10 uppercase font-black tracking-[0.2em]">INICIAR PROTOCOLO</span>
                                <MousePointer2 className="w-5 h-5 md:w-6 md:h-6 text-[#39F265] fill-current drop-shadow-[0_0_8px_rgba(57,242,101,0.5)] rotate-90" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#39F265]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39F265]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                            </button>
                            <span className="pointer-events-none absolute -bottom-10 left-1/2 z-0 h-20 w-72 -translate-x-1/2 rounded-full opacity-0 transition-all duration-700 ease-out group-hover:opacity-100" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(57, 242, 101, 0.25), transparent 85%)', filter: 'blur(30px)' }} aria-hidden="true"></span>
                        </div>

                        <div className="flex items-center gap-6 md:gap-8 md:pl-10 md:border-l border-[#FEFDFA]/10">
                            <div className="text-center md:text-left">
                                <p className="text-[9px] md:text-[10px] font-black text-[#FEFDFA]/30 uppercase tracking-[0.3em] mb-2 md:mb-3">Supporting Infrastructure</p>
                                <div className="flex gap-4 md:gap-6 items-center justify-center md:justify-start opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                                    <span className="text-[10px] md:text-xs font-black text-[#FEFDFA] tracking-tighter uppercase">ABSTARTUPS</span>
                                    <span className="text-[10px] md:text-xs font-black text-[#FEFDFA] tracking-tighter uppercase">SEBRAE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Neural Blueprint Grid - CLEAN, NO CARDS */}
                <div className="relative max-w-6xl mx-auto mb-24 md:mb-32 px-4">
                    <motion.div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16 relative py-12"
                    >
                        <div
                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen"
                            style={{
                                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(57, 242, 101, 0.08), transparent 80%)`
                            }}
                        />

                        {[
                            { icon: Brain, badge: "Core Logic", title: "Enriquecimento de Dados", desc: "Captura automática de informações detalhadas de cada lead para personalização extrema." },
                            { icon: Target, badge: "Execution", title: "Qualificação em Tempo Real", desc: "Algoritmos que identificam o potencial de compra instantaneamente após o contato." },
                            { icon: MessageSquare, badge: "Interface", title: "Agendamento Direto", desc: "Nossa IA reserva a agenda do seu vendedor com leads prontos para o fechamento." },
                            { icon: Activity, badge: "Learning", title: "Otimização de Conversão", desc: "Ajuste contínuo do script baseado em milhões de interações bem-sucedidas." },
                            { icon: BarChart3, badge: "Output", title: "Insights Preditivos", desc: "Previsibilidade real de faturamento com base no comportamento atual do seu funil." },
                            { icon: Shield, badge: "System", title: "Segurança e Escala", desc: "Infraestrutura dedicada capaz de processar milhares de leads sem perda de qualidade." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                            >
                                <NeuralFeature
                                    icon={feature.icon}
                                    badge={feature.badge}
                                    title={feature.title}
                                    description={feature.desc}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Authority Bar / Numbers - MONUMENTAL HUD STYLE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-[#FEFDFA]/5 py-16 md:py-24 gap-y-12 md:gap-y-16 relative"
                >
                    <div className="text-center relative px-8 flex flex-col items-center">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-black text-[#FEFDFA] mb-4 tracking-tighter">
                            <NumberTicker value={4.8} suffix="M+" decimals={1} delay={0.2} />
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.4em] font-black text-[#39F265]/50 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#39F265] animate-pulse" />
                            Interações IA
                        </div>
                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-[#FEFDFA]/10 to-transparent" />
                    </div>

                    <div className="text-center relative px-8 flex flex-col items-center">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-black text-[#FEFDFA] mb-4 tracking-tighter">
                            <NumberTicker value={30} suffix="k+" decimals={0} delay={0.4} />
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.4em] font-black text-[#FEFDFA]/30">Leads Gerados</div>
                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-[#FEFDFA]/10 to-transparent" />
                    </div>

                    <div className="text-center relative px-8 flex flex-col items-center">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-black text-[#FEFDFA] mb-4 tracking-tighter">
                            <NumberTicker value={150} suffix="+" decimals={0} delay={0.6} />
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.4em] font-black text-[#FEFDFA]/30">Empresas Escalam</div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FEFDFA]/5 to-transparent" />
                </motion.div>

            </div>

            {/* Vertical HUD Scroll Indicator - Restored */}
            <div className="absolute bottom-12 left-12 hidden lg:flex flex-col items-center gap-3 pointer-events-none opacity-40">
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#39F265] to-transparent" />
                <span className="text-[9px] font-black text-[#FEFDFA] uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">Scroll Discovery</span>
            </div>
        </section>
    )
}
