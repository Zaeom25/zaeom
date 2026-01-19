import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const languages = [
    {
        code: 'pt',
        name: 'Português',
        flag: (
            <svg className="w-5 h-5" viewBox="0 0 640 480">
                <path fill="#009c3b" d="M0 0h640v480H0z" />
                <path fill="#ffdf00" d="M320 40L40 240l280 200 280-200Z" />
                <circle cx="320" cy="240" r="120" fill="#002776" />
                <path fill="#fff" d="M192 248a120 120 0 0 0 256 0c0-10-80-30-128-30s-128 20-128 30Z" />
            </svg>
        ),
    },
    {
        code: 'en',
        name: 'English',
        flag: (
            <svg className="w-5 h-5" viewBox="0 0 640 480">
                <path fill="#bd3d44" d="M0 0h640v480H0z" />
                <path stroke="#fff" strokeWidth="37" d="M0 55.4h640m0 73.8H0m0 73.8h640m0 73.8H0m0 73.8h640m0 73.8H0" />
                <path fill="#192f5d" d="M0 0h256v258.5H0z" />
                <circle cx="48" cy="48" r="10" fill="#fff" />
                <circle cx="96" cy="48" r="10" fill="#fff" />
                <circle cx="144" cy="48" r="10" fill="#fff" />
                <circle cx="192" cy="48" r="10" fill="#fff" />
                <circle cx="72" cy="80" r="10" fill="#fff" />
                <circle cx="120" cy="80" r="10" fill="#fff" />
                <circle cx="168" cy="80" r="10" fill="#fff" />
            </svg>
        ),
    },
    {
        code: 'es',
        name: 'Español',
        flag: (
            <svg className="w-5 h-5" viewBox="0 0 640 480">
                <path fill="#c60b1e" d="M0 0h640v480H0z" />
                <path fill="#ffc400" d="M0 120h640v240H0z" />
            </svg>
        ),
    },
    {
        code: 'fr',
        name: 'Français',
        flag: (
            <svg className="w-5 h-5" viewBox="0 0 640 480">
                <path fill="#fff" d="M0 0h640v480H0z" />
                <path fill="#002395" d="M0 0h213.3v480H0z" />
                <path fill="#ed2939" d="M426.7 0H640v480H426.7z" />
            </svg>
        ),
    },
    {
        code: 'de',
        name: 'Deutsch',
        flag: (
            <svg className="w-5 h-5" viewBox="0 0 640 480">
                <path fill="#ffce00" d="M0 0h640v480H0z" />
                <path d="M0 0h640v320H0z" />
                <path fill="#d00" d="M0 160h640v160H0z" />
            </svg>
        ),
    },
    {
        code: 'it',
        name: 'Italiano',
        flag: (
            <svg className="w-5 h-5" viewBox="0 0 640 480">
                <path fill="#fff" d="M0 0h640v480H0z" />
                <path fill="#009246" d="M0 0h213.3v480H0z" />
                <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
            </svg>
        ),
    },
];

export const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = languages.find((lang) => i18n.language.startsWith(lang.code)) || languages[0];

    const toggleLanguage = (code: string) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
                <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                    {currentLanguage.flag}
                </div>
                <span className="text-[10px] font-black text-[#FEFDFA]/70 uppercase tracking-widest hidden sm:block">
                    {currentLanguage.code}
                </span>
                <ChevronDown className={`w-3 h-3 text-[#FEFDFA]/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 right-0 w-40 glass-card rounded-2xl border border-[#FEFDFA]/10 shadow-2xl overflow-hidden z-[110]"
                    >
                        <div className="p-1">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => toggleLanguage(lang.code)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${currentLanguage.code === lang.code
                                        ? 'bg-[#39F265]/10 text-[#39F265]'
                                        : 'hover:bg-white/5 text-[#FEFDFA]/60 hover:text-[#FEFDFA]'
                                        }`}
                                >
                                    <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                                        {lang.flag}
                                    </div>
                                    <span className="text-xs font-bold tracking-tight">
                                        {lang.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
