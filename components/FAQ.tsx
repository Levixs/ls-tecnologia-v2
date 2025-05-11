"use client";
import { motion } from "framer-motion"
import { HelpCircle, Mail, MessageSquare, Settings, ThumbsUp } from "lucide-react"
import * as React from "react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const faqCategories = [
    {
        id: "general",
        title: "Geral",
        icon: <HelpCircle className="w-4 h-4" />,
        questions: [
            {
                question: "Como posso iniciar um novo projeto?",
                answer: "Você pode iniciar um novo projeto entrando em contato através do nosso formulário ou agendando uma reunião inicial. Nós guiaremos você por todo o processo desde a concepção até a entrega.",
                likes: 24
            },
            {
                question: "Quais são os métodos de pagamento aceitos?",
                answer: "Aceitamos diversas formas de pagamento incluindo cartão de crédito, transferência bancária, PIX e parcelamento em até 12x para projetos de maior valor.",
                likes: 18
            },
            {
                question: "Qual o prazo médio para desenvolvimento?",
                answer: "O prazo varia conforme a complexidade do projeto. Aplicativos simples podem levar 2-3 meses, enquanto sistemas complexos podem requerer 6 meses ou mais. Entregamos em fases com sprints de 2 semanas.",
                likes: 32
            }
        ]
    },
    {
        id: "technical",
        title: "Técnico",
        icon: <Settings className="w-4 h-4" />,
        questions: [
            {
                question: "Quais tecnologias vocês utilizam?",
                answer: "Trabalhamos com as principais tecnologias modernas como React, Next.js, Node.js, Python, Flutter, e bancos de dados SQL e NoSQL. Escolhemos a stack técnica mais adequada para cada projeto.",
                likes: 45
            },
            {
                question: "Vocês fazem integração com outras APIs?",
                answer: "Sim, temos vasta experiência em integração com APIs de terceiros como pagamento, geolocalização, redes sociais e sistemas legados. Garantimos segurança e estabilidade nessas integrações.",
                likes: 29
            },
            {
                question: "Como é o processo de deploy e hospedagem?",
                answer: "Utilizamos infraestrutura escalável em cloud (AWS, Google Cloud ou Azure) com CI/CD automatizado. Você pode optar por nossa hospedagem gerenciada ou receber o projeto para deploy em seu próprio servidor.",
                likes: 37
            }
        ]
    },
    {
        id: "support",
        title: "Suporte",
        icon: <MessageSquare className="w-4 h-4" />,
        questions: [
            {
                question: "Qual o tempo de resposta do suporte?",
                answer: "Nosso tempo médio de resposta é de 2 horas úteis para questões críticas e 24 horas para demais solicitações. Oferecemos diferentes planos de suporte conforme sua necessidade.",
                likes: 15
            },
            {
                question: "Vocês oferecem treinamento?",
                answer: "Não, não realizamos treinamento.",
                likes: 22
            },
            {
                question: "Há custos adicionais para manutenção?",
                answer: "Oferecemos planos de manutenção mensais que incluem atualizações, correções e suporte. O valor varia conforme a complexidade do projeto e nível de serviço desejado.",
                likes: 19
            }
        ]
    }
]

function emailRedirect() {
    window.open("mailto:contato@lstecnologia.com", "_blank")
}

export default function FAQ() {
    const [activeCategory, setActiveCategory] = React.useState("general")

    return (
        <section id="FAQ" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-blue-500 blur-3xl opacity-20" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-purple-500 blur-3xl opacity-15" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Perguntas Frequentes
                        </span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto">
                        Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos
                    </p>
                </motion.div>

                {/* Categorias */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                >
                    {faqCategories.map((category) => (
                        <motion.div
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Button
                                onClick={() => setActiveCategory(category.id)}
                                variant={activeCategory === category.id ? "default" : "outline"}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full transition-all",
                                    activeCategory === category.id
                                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                                        : "border-gray-700 hover:border-gray-600 text-gray-400 hover:text-gray-300"
                                )}
                            >
                                {category.icon}
                                <span className="text-sm md:text-base">{category.title}</span>
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Perguntas e Respostas */}
                <div className="max-w-4xl mx-auto">
                    {faqCategories.map((category) => (
                        <div key={category.id} className={cn(activeCategory === category.id ? "block" : "hidden")}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Accordion type="single" collapsible className="w-full space-y-2 md:space-y-4">
                                    {category.questions.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                        >
                                            <Card className="border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 transition-colors py-1">
                                                <AccordionItem value={`item-${index}`} className="border-none">
                                                    <AccordionTrigger className="hover:no-underline px-4 md:px-6">
                                                        <h3 className="text-left text-sm md:text-base font-medium text-gray-200">
                                                            {item.question}
                                                        </h3>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="px-4 md:px-6 pb-4 pt-0">
                                                        <div className="border-t border-gray-800/50 pt-4">
                                                            <p className="text-sm md:text-base text-gray-400 mb-4">{item.answer}</p>
                                                            <div className="flex items-center justify-between">
                                                                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-400 gap-2">
                                                                    <ThumbsUp className="w-4 h-4" />
                                                                    <span>Útil ({item.likes})</span>
                                                                </Button>
                                                                <Button variant="link" size="sm" className="text-blue-400 hover:text-blue-300 gap-1">
                                                                    <Mail className="w-4 h-4" />
                                                                    <span>Ainda com dúvidas?</span>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </Accordion>
                            </motion.div>
                        </div>
                    ))}
                </div>


                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Card className="relative overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 backdrop-blur-md p-[1px] shadow-2xl">
                        <div className="relative rounded-[inherit] px-8 py-12">
                            <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
                                <div className="absolute -top-24 -left-24 w-42 h-42 bg-blue-600 rounded-full blur-[100px]" />
                                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500 rounded-full blur-[100px]" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        Ainda com dúvidas?
                                    </span>
                                </h3>
                                <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                                    Nossa equipe está disponível para te ajudar com qualquer questão. Entre em contato ou explore nossa base de conhecimento.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button
                                        onClick={emailRedirect}
                                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:brightness-110 transition-all shadow-lg shadow-blue-500/30"
                                        size="lg"
                                    >
                                        Fale conosco agora
                                        <Mail className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div >
        </section >
    )
}