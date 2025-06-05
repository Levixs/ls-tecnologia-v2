"use client";
import { motion, Variants } from 'framer-motion';
import { Button } from './ui/button';
import Image from 'next/image';

export default function Hero() {
    const whatsappRedirect = () => {
        window.open('https://wa.me/5516992276144?text=Olá%2C+vi+o+seu+site+e+tenho+interesse+em+negociar.', '_blank');
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const floatingAnimation = {
        y: [-5, 5],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut"
        }
    };

    return (
        <section id='hero' className="relative overflow-hidden flex items-center justify-center min-h-screen">
            <div id="hero-bg" className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-900/30 to-blue-900/30"
                    initial={{ backgroundPosition: '0% 50%' }}
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />

                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{
                            x: ['-100%', `${100 + (i % 2 === 0 ? 20 : -20)}%`],
                            opacity: [0, 0.5, 0],
                            width: ['10%', `${40 + Math.random() * 20}%`, '10%']
                        }}
                        transition={{
                            duration: 12 + Math.random() * 8,
                            repeat: Infinity,
                            ease: [0.16, 1, 0.3, 1],
                            delay: i * 0.3
                        }}
                        style={{
                            top: `${5 + (i * 6)}%`,
                            filter: `blur(${Math.random() * 2}px)`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 pt-36 pb-20 relative z-10">
                <motion.div
                    className="flex flex-col lg:flex-row items-center gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="lg:w-1/2 space-y-8">
                        <motion.div variants={itemVariants}>
                            <motion.span
                                className="text-sm font-semibold tracking-wider text-blue-300 uppercase"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Desenvolvedor Backend
                            </motion.span>
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold leading-tight text-gray-200 mt-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                Potencialize seu negócio com{' '}
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400"
                                    initial={{ backgroundPosition: '0% 50%' }}
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                >
                                    soluções robustas
                                </motion.span>
                            </motion.h1>
                            <motion.p
                                className="mt-4 text-lg text-gray-300 max-w-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                Desenvolvimento de APIs de alta performance, integrações com ERPs como WinThor e Consinco,
                                dashboards personalizados e soluções de automação para otimizar seus processos.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{
                                    scale: 0.98
                                }}
                            >
                                <Button
                                    onClick={whatsappRedirect}
                                    className="px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/30 transition-all duration-300"
                                >
                                    Solicitar Orçamento
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex items-center gap-4 pt-4"
                            variants={itemVariants}
                            transition={{ delay: 1 }}
                            whileHover={{
                                scale: 1.02,
                                transition: {
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1]
                                }
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20"
                                    animate={floatingAnimation}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-blue-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 1, x: 0 }}
                                    whileHover={{
                                        x: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <p className="text-sm text-gray-300">Soluções personalizadas</p>
                                    <motion.p
                                        className="text-sm text-blue-300"
                                        initial={{ opacity: 0.8 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse" as const
                                        }}
                                    >
                                        Tecnologia sob medida para sua empresa
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="lg:w-1/2 w-full relative"
                        variants={itemVariants}
                        transition={{ delay: 1.2 }}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.5 }
                        }}
                    >
                        <div className="relative w-full max-w-lg mx-auto md:max-w-lg sm:max-w-full sm:px-2">
                            <div className="relative w-full aspect-[3/2] safari-aspect-fallback">
                                <Image
                                    src="/HeroImg.webp"
                                    alt="API Development"
                                    className="rounded-2xl shadow-2xl w-full h-auto border border-white/10 object-cover"
                                    fill
                                    quality={90}
                                    priority
                                />
                            </div>
                        </div>
                        <motion.div
                            className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.5,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -5
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <motion.div
                                    className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500"
                                    animate={{
                                        opacity: [1, 0.8, 1],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 12h14M12 5l7 7-7 7"
                                        />
                                    </svg>
                                </motion.div>
                                <div>
                                    <p className="font-bold text-white">+200 endpoints</p>
                                    <p className="text-xs text-gray-300">Desenvolvidos</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}