import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export const FAQ = () => {
    const { t } = useTranslation()

    const faqs = [
        {
            question: t('faq.questions.q1'),
            answer: t('faq.questions.a1')
        },
        {
            question: t('faq.questions.q2'),
            answer: t('faq.questions.a2')
        },
        {
            question: t('faq.questions.q3'),
            answer: t('faq.questions.a3')
        },
        {
            question: t('faq.questions.q4'),
            answer: t('faq.questions.a4')
        }
    ]

    return (
        <section className="py-16 md:py-32 px-6 relative" id="insights">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#FEFDFA] mb-6">
                        {t('faq.title')}
                    </h2>
                    <p className="text-[#FEFDFA]/60 text-lg">
                        {t('faq.subtitle')}
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
