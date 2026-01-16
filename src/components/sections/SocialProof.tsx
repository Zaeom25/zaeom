import React from "react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        name: "Heitor Castro",
        role: "CEO na Mais que Musica",
        text: "A implementação do Agente Híbrido mudou o patamar do nosso suporte acadêmico. Recuperamos 25% de churn em apenas 2 meses.",
        image: "https://i.pravatar.cc/150?u=heitor"
    },
    {
        name: "Vanessa P. Santos",
        role: "Diretora Comercial",
        text: "O que mais me impressionou foi a velocidade de ativação. Em menos de uma hora já tínhamos uma IA fazendo a triagem inicial perfeitamente.",
        image: "https://i.pravatar.cc/150?u=vanessa"
    },
    {
        name: "Cybele",
        role: "Founder & Product",
        text: "Delegar o meu digital era um medo real, mas a Zaeom trouxe transparência e resultados que eu nunca conseguiria sozinha.",
        image: "https://i.pravatar.cc/150?u=cybele"
    }
]

export const SocialProof = () => {
    return (
        <section className="py-16 md:py-32 px-6 relative" id="resultados">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#FEFDFA] mb-6">
                        Quem já virou o jogo com a Zaeom
                    </h2>
                    <p className="text-[#FEFDFA]/60 text-lg max-w-2xl mx-auto">
                        Empresas de todos os tamanhos estão escalando com nossos agentes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 bg-[#111111] border-[#FEFDFA]/10 h-full relative overflow-hidden group rounded-[2.5rem]">
                                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#39F265] to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

                                <Quote className="w-10 h-10 text-[#39F265]/20 mb-6" />

                                <p className="text-[#FEFDFA]/80 text-lg leading-relaxed mb-8 italic">
                                    "{t.text}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full border border-[#39F265]/20"
                                    />
                                    <div>
                                        <h4 className="font-bold text-[#FEFDFA]">{t.name}</h4>
                                        <p className="text-[#FEFDFA]/40 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
