import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Shield, Lock, Eye, FileText } from "lucide-react"
import { useTranslation } from "react-i18next"

interface PrivacyModalProps {
    isOpen: boolean
    onClose: () => void
}

export const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
    const { t } = useTranslation()
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
                                <h2 className="text-xl font-bold text-[#FEFDFA] uppercase tracking-tighter">{t('privacy_modal.title')}</h2>
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
                                        <h3 className="text-[#FEFDFA] font-bold uppercase tracking-widest text-xs">{t('privacy_modal.sections.data_protection.title')}</h3>
                                    </div>
                                    <p>
                                        {t('privacy_modal.sections.data_protection.content')}
                                    </p>
                                </section>

                                <section>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Eye className="w-4 h-4 text-[#39F265]" />
                                        <h3 className="text-[#FEFDFA] font-bold uppercase tracking-widest text-xs">{t('privacy_modal.sections.collection.title')}</h3>
                                    </div>
                                    <p>
                                        {t('privacy_modal.sections.collection.content')}
                                    </p>
                                    <ul className="list-disc pl-5 mt-3 space-y-2">
                                        {(t('privacy_modal.sections.collection.items', { returnObjects: true }) as string[]).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <div className="flex items-center gap-2 mb-3">
                                        <FileText className="w-4 h-4 text-[#39F265]" />
                                        <h3 className="text-[#FEFDFA] font-bold uppercase tracking-widest text-xs">{t('privacy_modal.sections.usage.title')}</h3>
                                    </div>
                                    <p>
                                        {t('privacy_modal.sections.usage.content')}
                                    </p>
                                    <ul className="list-disc pl-5 mt-3 space-y-2">
                                        {(t('privacy_modal.sections.usage.items', { returnObjects: true }) as string[]).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="p-6 rounded-2xl bg-[#39F265]/5 border border-[#39F265]/10">
                                    <h3 className="text-[#39F265] font-bold mb-2">{t('privacy_modal.sections.transparency.title')}</h3>
                                    <p className="text-[#39F265]/80">
                                        {t('privacy_modal.sections.transparency.content')}
                                    </p>
                                </section>

                                <p className="text-center pt-8 border-t border-white/5 opacity-40 text-[10px] uppercase tracking-widest">
                                    {t('privacy_modal.footer')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
