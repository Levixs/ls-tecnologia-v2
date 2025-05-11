"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HelpCircle, Settings, MessageSquare, Mail, ThumbsUp, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

type Question = {
    question: string
    answer: string
    likes: number
}

type Category = {
    id: string
    title: string
    icon: React.ReactNode
    questions: Question[]
}

const categories: Category[] = [
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
    },
]

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState("general")
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const current = categories.find((c) => c.id === activeCategory)

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-950 to-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Encontre respostas para dúvidas comuns sobre nossos serviços
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <Button
                            key={cat.id}
                            onClick={() => {
                                setActiveCategory(cat.id)
                                setOpenIndex(null)
                            }}
                            variant={activeCategory === cat.id ? "default" : "outline"}
                            className={cn(
                                "flex items-center gap-2 px-5 py-2 rounded-full",
                                activeCategory === cat.id
                                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                                    : "border-gray-700 text-gray-400 hover:text-gray-300"
                            )}
                        >
                            {cat.icon}
                            <span>{cat.title}</span>
                        </Button>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {current?.questions.map((q, i) => {
                        const isOpen = openIndex === i
                        return (
                            <Card key={i} className="bg-gray-900 border border-gray-700">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full text-left px-4 py-3 flex items-center justify-between text-gray-200"
                                >
                                    <span>{q.question}</span>
                                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                </button>
                                {isOpen && (
                                    <div className="px-4 py-4 pb-4 text-gray-400 text-sm border-t border-gray-700">
                                        <div className="mb-3">{q.answer}</div>
                                        <div className="flex justify-between items-center">
                                            <Button variant="ghost" size="sm" className="gap-1 text-gray-500">
                                                <ThumbsUp className="w-4 h-4" />
                                                Útil ({q.likes})
                                            </Button>
                                            <Button
                                                variant="link"
                                                size="sm"
                                                className="text-blue-400"
                                                onClick={() => window.open("mailto:contato@lstecnologia.com", "_blank")}
                                            >
                                                <Mail className="w-4 h-4 mr-1" />
                                                Ainda com dúvidas?
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
