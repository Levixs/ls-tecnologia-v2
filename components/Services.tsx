"use client";
import { Database, HardDrive, LayoutDashboard, Link2, Server, Terminal } from 'lucide-react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

export default function Services() {
    const services = [
        {
            icon: <Server className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
            title: "Desenvolvimento de APIs",
            description: "APIs de alta performance, documentação com Swagger/Postman e integração com diversos sistemas.",
            highlights: ["Flask", "Django", "Spring Boot"]
        },
        {
            icon: <HardDrive className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
            title: "Aplicativos Desktop",
            description: "Soluções desktop multiplataforma para automação de processos internos e gestão empresarial.",
            highlights: ["Python Tkinter", "Delphi", "C#"]
        },
        {
            icon: <LayoutDashboard className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />,
            title: "Dashboards Analíticos",
            description: "Visualização de dados em tempo real com gráficos interativos e relatórios personalizáveis.",
            highlights: ["Power BI", "Grafana", "Tableau", "Targit (MyBi)"]
        },
        {
            icon: <Link2 className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />,
            title: "Integração com ERPs",
            description: "Conexão entre sistemas e ERPs corporativos como WinThor e Consinco para otimização de processos.",
            highlights: ["TOTVS Winthor", "TOTVS Consinco"]
        },
        {
            icon: <Terminal className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" />,
            title: "Automatização de Processos",
            description: "Robôs para automação de tarefas repetitivas e integração entre sistemas legados.",
            highlights: ["Python (Selenium)", "RPA", "Web Scraping", "Automação de planilhas", "Pandas", "Openpyxl"]
        },
        {
            icon: <Database className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />,
            title: "Banco de Dados",
            description: "Modelagem, otimização e migração de bancos de dados relacionais e não-relacionais.",
            highlights: ["PostgreSQL", "MongoDB", "Oracle", "PLSQL", "Otimização de queries"]
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    }

    const item = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.1,
                ease: "easeInOut"
            }
        }
    }

    const hoverScale = {
        scale: 1,
        y: 0,
        transition: {
            duration: 0.1,
            ease: "easeInOut"
        }
    }

    const techHover = {
        scale: 1.05,
        backgroundColor: "rgba(55, 65, 81, 0.6)",
        color: "#f3f4f6",
        transition: {
            duration: 0.1,
            ease: "easeInOut"
        }
    }

    const WhatsappRedirect = () => {
        window.open('https://wa.me/5516992276144?text=Olá%2C+vi+o+seu+site+e+tenho+interesse+em+negociar.', '_blank');
    };

    return (
        <section id="services" className="relative py-20 overflow-hidden">
            {/* Background overlay with subtle pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent" />
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:32px_32px]" />

                {/* Subtle animated elements */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16 py-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4">
                        Serviços <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Especializados</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Soluções técnicas personalizadas para impulsionar sua operação e otimizar processos empresariais.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 select-none"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={hoverScale}
                            className="group bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/20 transition-all pointer-events-none" />
                            <div className="relative z-10">
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-gray-800/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-gray-700/70 transition-all group-hover:shadow-[0_0_20px_-3px_rgba(59,130,246,0.4)]">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">{service.description}</p>
                                <div className="mt-4 pt-4 border-t border-gray-700/50 group-hover:border-gray-700/70 transition-colors">
                                    <h4 className="text-sm font-medium text-gray-300 mb-2 group-hover:text-gray-200 transition-colors">Tecnologias relacionadas:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.highlights.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                className="text-xs bg-gray-700/40 text-gray-300 px-3 py-1 rounded-full group-hover:bg-gray-700/60 group-hover:text-gray-200 transition-all"
                                                whileHover={techHover}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400 mb-6">
                        Não encontrou exatamente o que precisa? Posso desenvolver uma solução personalizada para seu caso específico.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Button onClick={WhatsappRedirect} className="px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/30">
                            Falar sobre um projeto personalizado
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}