import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import logoZaeom from "@/assets/logo-zaeom.svg"

export const Navbar = () => {
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
        { name: "Soluções", href: "#solucoes" },
        { name: "Explorar", href: "#explorar" },
        { name: "Resultados", href: "#resultados" },
        { name: "Insights", href: "#insights" }
    ]

    return (
        <div className="fixed top-0 left-0 w-full z-[100]">
            {/* Desktop Navbar - Glass Morphing */}
            <div className="hidden lg:flex w-full justify-center px-6 py-8 pointer-events-none">
                <motion.nav
                    style={{ opacity, y, scale }}
                    className="pointer-events-auto"
                >
                    <div className="glass-card rounded-2xl px-10 py-4 flex items-center gap-14 border border-[#FEFDFA]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center gap-3">
                            <img src={logoZaeom} alt="Zaeom Logo" className="h-8 w-auto" />
                        </div>

                        <div className="flex items-center gap-12">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleAnchorClick(e, item.href)}
                                    className="text-[11px] font-black text-[#FEFDFA]/50 hover:text-[#39F265] transition-all duration-500 tracking-[0.2em] uppercase cursor-pointer"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="h-6 w-[1px] bg-[#FEFDFA]/10 mx-2" />

                        <div className="group relative">
                            <button
                                onClick={(e) => handleAnchorClick(e, "#solucoes")}
                                className="group inline-flex min-w-[180px] cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:scale-105 border border-white/10 text-[11px] font-black text-white tracking-[0.2em] bg-white/5 backdrop-blur-xl rounded-xl py-4 px-8 relative items-center justify-center overflow-hidden"
                            >
                                <span className="relative z-10 uppercase">INICIAR PROTOCOLO</span>
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#39F265]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span aria-hidden="true" className="transition-all duration-500 group-hover:opacity-80 opacity-20 w-[60%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{ background: 'linear-gradient(90deg, rgba(57, 242, 101, 0) 0%, rgba(57, 242, 101, 1) 50%, rgba(57, 242, 101, 0) 100%)' }}></span>
                            </button>
                        </div>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Header - Always Fixed & Visible */}
            <div className={`lg:hidden w-full transition-all duration-500 px-6 py-4 flex items-center justify-between relative z-[110] ${isScrolled || isMenuOpen ? 'bg-[#080808]/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
                <img src={logoZaeom} alt="Zaeom Logo" className="h-7 w-auto" />

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative z-[110]"
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
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-[#080808] lg:hidden flex flex-col p-8 pt-32"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#39F265]/5 blur-[120px] rounded-full pointer-events-none" />

                        <div className="relative z-10 space-y-8">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleAnchorClick(e, item.href)}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="flex items-center justify-between group"
                                >
                                    <span className="text-4xl font-black text-[#FEFDFA] uppercase tracking-tighter group-hover:text-[#39F265] transition-colors">
                                        {item.name}
                                    </span>
                                    <ChevronRight className="w-8 h-8 text-[#39F265] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-auto relative z-10">
                            <button
                                onClick={(e) => handleAnchorClick(e, "#solucoes")}
                                className="w-full py-6 rounded-2xl bg-[#39F265] text-[#080808] font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(57,242,101,0.3)] active:scale-95 transition-transform"
                            >
                                INICIAR AGORA
                            </button>
                            <p className="text-center mt-8 text-[9px] font-bold text-[#FEFDFA]/20 uppercase tracking-[0.5em]">
                                PROTOCOLO ZAEOM Z-01
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Corner ID Signature (Scrolled View) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isScrolled ? 1 : 0 }}
                className="absolute top-10 left-12 hidden xl:block pointer-events-none"
            >
                <span className="text-2xl font-black text-[#FEFDFA]/20 tracking-tighter border-l-2 border-[#39F265] pl-4">Z-01</span>
            </motion.div>
        </div>
    )
}
