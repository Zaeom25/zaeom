import React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
    {
        question: "Quais são as condições financeiras?",
        answer: "Trabalhamos com pacotes flexíveis dependendo do volume de atendimento. Temos desde modelos de taxa fixa até modelos baseados em performance/sucesso."
    },
    {
        question: "O que exatamente eu posso delegar?",
        answer: "Basicamente qualquer fluxo comercial ou de suporte digital: triagem de leads, agendamento de consultas, suporte técnico nível 1, fechamento de vendas diretas e muito mais."
    },
    {
        question: "Vocês atendem demandas personalizadas?",
        answer: "Sim! Nosso Agente Personalizado é focado justamente em negócios com fluxos atípicos que exigem integrações complexas com CRMs ou sistemas proprietários."
    },
    {
        question: "A IA realmente consegue ter empatia?",
        answer: "Nossa IA é treinada com modelos de linguagem avançados focados em tom de voz humano. Além disso, o Agente Híbrido garante que, em casos complexos, um humano assuma com todo o contexto."
    }
]

export const FAQ = () => {
    return (
        <section className="py-16 md:py-32 px-6 relative" id="insights">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#FEFDFA] mb-6">
                        Dúvidas Frequentes
                    </h2>
                    <p className="text-[#FEFDFA]/60 text-lg">
                        Tudo o que você precisa saber antes de contratar seu primeiro agente.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-[#FEFDFA]/10 bg-[#111111] rounded-2xl px-6 data-[state=open]:border-[#39F265]/50 transition-all duration-300"
                            >
                                <AccordionTrigger className="text-[#FEFDFA] hover:text-[#39F265] transition-colors text-left font-bold py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#FEFDFA]/60 leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
