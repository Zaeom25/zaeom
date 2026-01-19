import React from "react"
import { motion } from "framer-motion"
import { FileWarning, UserX, ThermometerSnowflake, BrainCircuit, AlertCircle } from "lucide-react"
import { useTranslation } from "react-i18next"

export const Diagnosis = () => {
    const { t } = useTranslation()

    const painPoints = [
        {
            icon: FileWarning,
            title: t('diagnosis.pain_points.boring_work.title'),
            status: t('diagnosis.pain_points.boring_work.status'),
            description: t('diagnosis.pain_points.boring_work.desc'),
            value: 85
        },
        {
            icon: UserX,
            title: t('diagnosis.pain_points.personal_life.title'),
            status: t('diagnosis.pain_points.personal_life.status'),
            description: t('diagnosis.pain_points.personal_life.desc'),
            value: 92
        },
        {
            icon: ThermometerSnowflake,
            title: t('diagnosis.pain_points.leads_cooling.title'),
            status: t('diagnosis.pain_points.leads_cooling.status'),
            description: t('diagnosis.pain_points.leads_cooling.desc'),
            value: 74
        },
        {
            icon: BrainCircuit,
            title: t('diagnosis.pain_points.decision_stress.title'),
            status: t('diagnosis.pain_points.decision_stress.status'),
            description: t('diagnosis.pain_points.decision_stress.desc'),
            value: 81
        }
    ]

    return (
        <section className="py-32 px-6 relative" id="diagnostico">
            {/* Top transition glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#39F265]/20 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Heading & Highlight */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-[1px] bg-[#39F265]" />
                                <span className="text-[11px] font-black text-[#39F265] uppercase tracking-[0.4em]">{t('diagnosis.badge')}</span>
                            </div>

                            <h2 className="heading-xl text-5xl md:text-6xl lg:text-7xl mb-12 text-left text-balance leading-[1.05] tracking-tight">
                                <span className="md:hidden text-[#FEFDFA]">
                                    {t('diagnosis.title_part1')} <span className="text-gradient">{t('diagnosis.title_part2')}</span> {t('diagnosis.title_part3')}
                                </span>

                                <span className="hidden md:inline">
                                    {t('diagnosis.title_part1').split(" ").map((word, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            className="inline-block mr-[0.2em] text-[#FEFDFA]"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                    <motion.span
                                        initial={{ opacity: 0, filter: "blur(10px)" }}
                                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="text-gradient block"
                                    >
                                        {t('diagnosis.title_part2')}
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        className="text-[#FEFDFA]"
                                    >
                                        {t('diagnosis.title_part3')}
                                    </motion.span>
                                </span>
                            </h2>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="text-[#FEFDFA]/50 text-xl leading-relaxed mb-12 max-w-md"
                            >
                                {t('diagnosis.description')}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 1 }}
                                className="p-8 glass-card border-l-4 border-l-[#39F265] bg-gradient-to-br from-[#39F265]/10 via-transparent to-transparent rounded-[2.5rem]"
                            >
                                <div className="flex items-start gap-4">
                                    <AlertCircle className="w-6 h-6 text-[#39F265] shrink-0" />
                                    <div>
                                        <p className="text-xl font-bold text-[#FEFDFA] leading-tight mb-2">{t('diagnosis.fact_title')}</p>
                                        <p className="text-[#FEFDFA]/60 text-base">{t('diagnosis.fact_desc')}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive Diagnostic Grid */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15
                                    }
                                }
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {painPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                                        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    className="group p-8 glass-card border-[#FEFDFA]/5 hover:border-[#39F265]/20 transition-all duration-500 overflow-hidden relative rounded-[2.5rem]"
                                >

                                    <div className="flex justify-between items-start mb-10 relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-[#111111] border border-[#FEFDFA]/10 flex items-center justify-center group-hover:bg-[#39F265]/10 group-hover:border-[#39F265]/30 transition-all duration-500">
                                            <point.icon className="w-7 h-7 text-[#FEFDFA]/40 group-hover:text-[#39F265] transition-colors" />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-black tracking-widest text-[#39F265] mb-1">{point.status}</div>
                                            <div className="text-2xl font-black text-[#FEFDFA]">{point.value}%</div>
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-[#FEFDFA] mb-4">{point.title}</h3>
                                        <p className="text-[#FEFDFA]/40 text-sm leading-relaxed mb-8">{point.description}</p>

                                        {/* Diagnostic Bar */}
                                        <div className="w-full h-1 bg-[#FEFDFA]/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${point.value}%` }}
                                                transition={{ duration: 1.5, delay: 0.8 }}
                                                className="h-full bg-gradient-to-r from-[#39F265]/20 to-[#39F265]"
                                            />
                                        </div>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#39F265]/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
