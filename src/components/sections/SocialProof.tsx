import React from "react"
import { motion } from "framer-motion"
import { Quote, Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from "react-i18next"

const testimonials = [
    {
        name: "Heitor Castro",
        handle: "@heitorcastromqm",
        text: "Um grande aditivo à empresa. Em apenas um ano, recuperaram mais de 200 mil reais em vendas. Entrega resultados palpáveis e recomendo fortemente.",
        featured: true
    },
    {
        name: "Karina Vieira",
        handle: "@karinavieira.oficial",
        text: "Excepcional. Cumpriu com tudo que combinamos e facilitou muito meu lançamento. Gostei pra caramba do acompanhamento e super indico.",
        featured: true
    },
    {
        name: "Jerome",
        handle: "@falafrancescomjerome",
        text: "Mudou minha vida. São super comprometidos, eficientes e entregam resultados reais. Me trouxe tranquilidade e fez total diferença na operação.",
        featured: true
    },
    {
        name: "Cassim",
        handle: "@cassim",
        text: "Profissional incrível que entrega resultados. Em apenas um ano, nossa empresa cresceu muito. Contratar a Zaeom foi a melhor coisa que fiz.",
        featured: true
    },
    {
        name: "Franciany Madeira",
        handle: "@francianymadeira",
        text: "Só tenho elogios por toda a dedicação e profissionalismo. Presta um serviço impecável e indico totalmente como assistência virtual.",
        featured: true
    },
    {
        name: "Pedro Moreira",
        handle: "@phartemusica",
        text: "Deleguei o administrativo da minha empresa e estou bem satisfeito. Ótimo custo-benefício e praticidade. Admiro a rapidez e execução.",
        featured: true
    },
    {
        name: "Paula Polastro",
        handle: "@paulapolastro",
        text: "Experiência excelente! Super responsivos e atentos aos detalhes. Me deixa tranquila contar com uma equipe tão profissional que não deixa na mão.",
        featured: false
    },
    {
        name: "Sheila Galafassi",
        handle: "@sheila_galafassi",
        text: "Extremamente dedicada, ética e comprometida. Uma parceria de negócios que recomendo sem dúvidas pela entrega impecável.",
        featured: false
    },
    {
        name: "Ricardo Cerruti",
        handle: "@srcerruti",
        text: "Excelente profissional, competente, criativa e ágil! O trabalho de recuperação de leads trouxe um ROI impressionante para nós.",
        featured: false
    },
    {
        name: "Petschool",
        handle: "@petschool",
        text: "Trabalho de excelência! Recomendo fortemente a Zaeom para qualquer empresa que queira escalar sem perder a qualidade no atendimento.",
        featured: false
    },
    {
        name: "Caio Borges",
        handle: null,
        text: "Incrível sensibilidade em entender o que queremos. Comunicação, atendimento e prazos impecáveis! Recomendo muito pela seriedade.",
        featured: false
    },
    {
        name: "Rafael Padilha",
        handle: null,
        text: "Ótimo atendimento e projeto entregue antes do prazo. O suporte na operação fez toda a diferença no nosso crescimento este ano.",
        featured: false
    }
]

export const SocialProof = () => {
    const { t } = useTranslation()
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [slidesToShow, setSlidesToShow] = React.useState(1)

    React.useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth >= 1024) setSlidesToShow(3)
            else if (window.innerWidth >= 640) setSlidesToShow(2)
            else setSlidesToShow(1)
        }
        updateSlides()
        window.addEventListener('resize', updateSlides)
        return () => window.removeEventListener('resize', updateSlides)
    }, [])

    const maxIndex = Math.max(0, testimonials.length - slidesToShow)
    const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0))

    return (
        <section className="pt-12 md:pt-16 pb-24 md:pb-40 px-6 relative overflow-hidden" id="resultados">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39F265]/20 bg-[#39F265]/5 mb-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#39F265] animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#39F265]">{t('social_proof.badge')}</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-[#FEFDFA] mb-6 tracking-tight leading-[1.1]">
                                Quem já virou o jogo <br />
                                com a <span className="text-gradient">Zaeom</span>
                            </h2>
                            <p className="text-[#FEFDFA]/40 text-base md:text-lg max-w-xl font-medium leading-relaxed italic text-balance">
                                {t('social_proof.subtitle')}
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            disabled={currentIndex === 0}
                            className={`w-12 h-12 rounded-full border border-[#FEFDFA]/10 flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'text-[#FEFDFA]/40 hover:text-[#39F265] hover:border-[#39F265]/40 hover:bg-[#39F265]/5'}`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            disabled={currentIndex >= maxIndex}
                            className={`w-12 h-12 rounded-full border border-[#FEFDFA]/10 flex items-center justify-center transition-all ${currentIndex >= maxIndex ? 'opacity-20 cursor-not-allowed' : 'text-[#FEFDFA]/40 hover:text-[#39F265] hover:border-[#39F265]/40 hover:bg-[#39F265]/5'}`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * (100 / slidesToShow)}%` }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {testimonials.map((t_item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-3"
                                style={{ width: `${100 / slidesToShow}%` }}
                            >
                                <div className="group relative p-8 md:p-10 bg-[#0A0A0A] border border-[#FEFDFA]/5 rounded-[2.5rem] hover:border-[#39F265]/30 transition-all duration-500 overflow-hidden flex flex-col h-[380px] md:h-[420px]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#39F265]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <Quote className="w-8 h-8 text-[#39F265] mb-8 opacity-40 shrink-0" />

                                    <blockquote className="text-[#FEFDFA]/80 text-base md:text-lg leading-relaxed mb-8 italic relative z-10 flex-grow line-clamp-6">
                                        "{t_item.text}"
                                    </blockquote>

                                    <div className="pt-6 border-t border-[#FEFDFA]/5 flex justify-between items-end relative z-10 shrink-0">
                                        <div>
                                            <h4 className="font-bold text-[#FEFDFA] text-lg mb-1">{t_item.name}</h4>
                                            {t_item.handle && (
                                                <div className="flex items-center gap-1.5 text-[#39F265]/60 group-hover:text-[#39F265] transition-colors">
                                                    <Instagram className="w-3.5 h-3.5" />
                                                    <span className="text-xs font-medium">{t_item.handle}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="px-2.5 py-1 rounded-md bg-[#39F265]/10 border border-[#39F265]/20 text-[#39F265] text-[9px] font-black uppercase tracking-tighter">
                                            {t('social_proof.partner_badge')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="flex justify-center gap-2 mt-16">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 bg-[#39F265]' : 'w-2 bg-[#FEFDFA]/10'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#39F265]/20 to-transparent" />
            </div>
        </section>
    )
}
