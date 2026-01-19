import React, { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import logoZaeom from "@/assets/logo-zaeom.svg"

import { getWhatsappLink, WHATSAPP_MESSAGES } from "@/utils/whatsapp"
import { CTAButton } from "@/components/ui/CTAButton"
import { LanguageSelector } from "@/components/ui/LanguageSelector"
import { useTranslation } from "react-i18next"

export const Navbar = () => {
    const { t } = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()

    // Desktop transforms
    const opacity = useTransform(scrollY, [0, 100], [0, 1])
    const y = useTransform(scrollY, [0, 100], [-20, 0])
    const scale = useTransform(scrollY, [0, 100], [1.05, 1])

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50)
        })
        return () => unsubscribe()
    }, [scrollY])

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
        e.preventDefault()
        const targetId = href.replace("#", "")
        const element = document.getElementById(targetId)
        if (element) {
            const offset = 80 // Navbar offset
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
        setIsMenuOpen(false)
    }

    const navItems = [
        { name: t('navbar.solutions'), href: "#solucoes" },
        { name: t('navbar.explore'), href: "#explorar" },
        { name: t('navbar.results'), href: "#resultados" },
        { name: t('navbar.insights'), href: "#insights" }
    ]

    return (
        <div className="fixed top-0 inset-x-0 z-[100]">
            {/* Desktop Language Selector - Premium Floating Positioning */}
            <div className="hidden lg:block fixed right-10 top-16 -translate-y-1/2 z-[130] pointer-events-auto">
                <LanguageSelector />
            </div>

            {/* Desktop Navbar - Center Floating Glass */}
            <div className="hidden lg:flex inset-x-0 justify-center px-6 py-8 pointer-events-none">
                <motion.nav
                    style={{ opacity, y, scale }}
                    className="pointer-events-auto"
                >
                    <div className="glass-card rounded-2xl px-10 py-4 flex items-center gap-12 border border-[#FEFDFA]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center pr-6 border-r border-white/5 mr-2">
                            <img src={logoZaeom} alt="Zaeom Logo" className="h-7 w-auto" />
                        </div>

                        <div className="flex items-center gap-10">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleAnchorClick(e, item.href)}
                                    className="text-[11px] font-black text-[#FEFDFA]/50 hover:text-[#39F265] transition-all duration-500 tracking-[0.2em] uppercase cursor-pointer"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Separator */}
                        <div className="w-px h-6 bg-white/10 mx-4" />

                        <CTAButton
                            href={getWhatsappLink(WHATSAPP_MESSAGES.PROTOCOL)}
                            variant="nav"
                        >
                            {t('navbar.cta')}
                        </CTAButton>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Header - Compact Design */}
            <div className={`lg:hidden inset-x-0 transition-all duration-300 px-6 py-6 flex items-center justify-between relative z-[115] ${isScrolled || isMenuOpen ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/5' : ''}`}>
                <img src={logoZaeom} alt="Zaeom Logo" className="h-6 w-auto" />

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative z-[115]"
                >
                    <AnimatePresence mode="wait">
                        {isMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                            >
                                <X className="w-6 h-6 text-[#39F265]" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                            >
                                <Menu className="w-6 h-6 text-[#FEFDFA]" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[105] bg-[#080808]/98 backdrop-blur-xl lg:hidden flex flex-col p-8 pt-40 overflow-y-auto"
                    >
                        <div className="relative z-10 space-y-6">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleAnchorClick(e, item.href)}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: i * 0.05 }}
                                    className="flex items-center justify-between group py-3 border-b border-white/[0.03]"
                                >
                                    <span className="text-2xl font-black text-[#FEFDFA] uppercase tracking-tighter group-hover:text-[#39F265] transition-colors">
                                        {item.name}
                                    </span>
                                    <ChevronRight className="w-6 h-6 text-[#39F265] opacity-50 block group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-12 space-y-8 relative z-10">
                            <CTAButton
                                href={getWhatsappLink(WHATSAPP_MESSAGES.PROTOCOL)}
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full h-16 text-lg"
                            >
                                {t('navbar.cta')}
                            </CTAButton>

                            <div className="flex flex-col items-center gap-4">
                                <span className="text-[10px] font-bold text-[#FEFDFA]/20 uppercase tracking-[0.3em]">Idioma / Language</span>
                                <LanguageSelector />
                            </div>
                        </div>

                        <div className="mt-auto pt-12">
                            <p className="text-center text-[8px] font-bold text-[#FEFDFA]/20 uppercase tracking-[0.5em]">
                                PROTOCOLO ZAEOM Z-01
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
