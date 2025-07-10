"use client";
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { Code, GitFork, Rocket, Server } from 'lucide-react'
import React from 'react'

const processSteps = [
    {
        icon: <GitFork className="w-5 h-5" />,
        title: "Descoberta & Planejamento",
        description: "Análise técnica detalhada e arquitetura do sistema",
        techs: ["Miro", "Figma"],
        color: "from-blue-400 to-cyan-400",
        bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
    },
    {
        icon: <Code className="w-5 h-5" />,
        title: "Sprint de Desenvolvimento",
        description: "Código limpo e modular com versionamento contínuo",
        techs: ["Git Flow", "Clean Code", "Kanban", "GIT"],
        color: "from-purple-400 to-fuchsia-400",
        bgColor: "bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10"
    },
    {
        icon: <Server className="w-5 h-5" />,
        title: "Implementação de API",
        description: "Construção de endpoints robustos e documentados",
        techs: ["Microservices", "Documentação Swagger"],
        color: "from-amber-400 to-orange-400",
        bgColor: "bg-gradient-to-br from-amber-500/10 to-orange-500/10"
    },
    {
        icon: <Rocket className="w-5 h-5" />,
        title: "Deploy na Nuvem",
        description: "CI/CD automatizado com monitoramento em tempo real",
        techs: ["Kubernetes", "Prometheus", "Sentry"],
        color: "from-rose-400 to-pink-500",
        bgColor: "bg-gradient-to-br from-rose-500/10 to-pink-500/10"
    }
]

export function Process() {
    return (
        <section id="process" className="relative py-20 overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent" />
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#8b5cf608_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf608_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Subtle animated elements */}
                <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-purple-500/8 rounded-full blur-xl animate-pulse" style={{ animationDuration: '5s' }} />
                <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-fuchsia-500/8 rounded-full blur-xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2.5s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-20 py-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-4">
                        <span className="text-gray-100">Processo de </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Desenvolvimento
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Uma jornada transparente desde a concepção até a entrega final
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true, margin: "-30px" }}
                        >
                            <Card className="h-full bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-blue-400/40 transition-all duration-300 group hover:shadow-[0_8px_20px_-10px_rgba(59,130,246,0.25)]">
                                <CardHeader>
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg mb-3 bg-gradient-to-br ${step.color} shadow-lg group-hover:opacity-90 transition-opacity`}>
                                        {React.cloneElement(step.icon, {
                                            className: "text-white",
                                            size: 20
                                        })}
                                    </div>
                                    <CardTitle className="text-gray-100 group-hover:text-white transition-colors">
                                        {step.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {step.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Separator className="mb-3 bg-gray-800/50" />
                                    <div className="flex flex-wrap gap-2">
                                        {step.techs.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className={`text-xs border-none bg-gradient-to-br ${step.color} text-white hover:brightness-110`}
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    viewport={{ once: true }}
                >
                </motion.div>
            </div>
        </section>
    )
}
