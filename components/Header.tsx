"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'Início', href: '#hero' },
        { name: 'Serviços', href: '#services' },
        { name: 'Contato', href: '#contact' },
        { name: 'FAQ', href: '#FAQ' },
        { name: 'dev', href: '#dev' }
    ];
    
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (menuOpen && isMobile) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.paddingTop = '0';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen, isMobile]);

    const menuItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                type: 'spring',
                stiffness: 500
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                type: 'spring',
                stiffness: 500
            }
        }
    };

    const mobileMenuItemVariants = {
        hidden: {
            x: 20,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 25
            }
        },
        hover: {
            x: 8,
            scale: 1.02,
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '12px',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 20
            }
        }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.4 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.4, delay: 0.1 }
        }
    };

    const mobileMenuVariants = {
        hidden: {
            x: "100%",
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    delay: 0.1
                }}
                className={`fixed w-full top-0 z-50 ${scrolled ? 'bg-black/30 backdrop-blur-sm' : 'bg-black/20 backdrop-blur-none'} border-b border-white/10`}
            >
                <div className="container mx-auto px-4 sm:px-6 py-3">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="flex items-center cursor-pointer"
                            whileHover={{
                                scale: 1.05,
                                transition: {
                                    type: 'spring',
                                    stiffness: 500
                                }
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: {
                                    type: 'spring',
                                    stiffness: 500
                                }
                            }}
                        >
                            <a href="#hero" className="flex items-center focus:outline-none" aria-label="Ir para o topo">
                                <motion.div
                                    className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center relative"
                                    whileHover={{
                                        rotate: 2,
                                        transition: { type: 'spring', stiffness: 300 }
                                    }}
                                >
                                    {/* Adicionando o efeito de highlight circular */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full pointer-events-none"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileHover={{
                                            opacity: 1,
                                            scale: 1,
                                            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.8), 0 0 20px 10px rgba(59, 130, 246, 0.3)"
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 20
                                        }}
                                    />

                                    <motion.div
                                        className="relative p-1"
                                        initial={{ scale: 1 }}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { type: 'spring', stiffness: 400 }
                                        }}
                                    >
                                        <Image
                                            src={"/logoLS.svg"}
                                            alt="Logo LS Tecnologia"
                                            className="w-full h-full object-contain"
                                            loading="eager"
                                            width={64}
                                            height={64}
                                            draggable="false"
                                            priority
                                            unoptimized
                                        />
                                    </motion.div>
                                </motion.div>
                            </a>
                        </motion.div>

                        <nav className="hidden md:block">
                            <ul className="flex space-x-6">
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={menuItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.1 }}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <a
                                            href={item.href}
                                            className="relative text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wider group focus:outline-none"
                                        >
                                            {item.name}
                                            <motion.span
                                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                                                initial={{ width: 0 }}
                                                whileHover={{
                                                    width: '100%',
                                                    transition: {
                                                        duration: 0.3,
                                                        ease: [0.22, 1, 0.36, 1]
                                                    }
                                                }}
                                            />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        <motion.button
                            className="md:hidden relative z-50 p-2 rounded-lg bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-colors group"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                            whileHover={{
                                scale: 1.05,
                                transition: { type: 'spring', stiffness: 400 }
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: { type: 'spring', stiffness: 400 }
                            }}
                        >
                            {/* Breathing effect background */}
                            <motion.div
                                className="absolute inset-0 rounded-lg bg-blue-500/10"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <motion.div
                                className="w-6 h-6 relative flex flex-col justify-center items-center"
                                animate={menuOpen ? "open" : "closed"}
                            >
                                <motion.span
                                    className="absolute w-5 h-0.5 bg-gray-300 group-hover:bg-blue-400 rounded-full origin-center transition-colors"
                                    variants={{
                                        closed: {
                                            rotate: 0,
                                            y: -6,
                                            opacity: 1,
                                            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                                        },
                                        open: {
                                            rotate: 45,
                                            y: 0,
                                            opacity: 1,
                                            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                                        }
                                    }}
                                />
                                <motion.span
                                    className="absolute w-5 h-0.5 bg-gray-300 group-hover:bg-blue-400 rounded-full transition-colors"
                                    variants={{
                                        closed: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                                        },
                                        open: {
                                            opacity: 0,
                                            x: -10,
                                            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                                        }
                                    }}
                                />
                                <motion.span
                                    className="absolute w-5 h-0.5 bg-gray-300 group-hover:bg-blue-400 rounded-full origin-center transition-colors"
                                    variants={{
                                        closed: {
                                            rotate: 0,
                                            y: 6,
                                            opacity: 1,
                                            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                                        },
                                        open: {
                                            rotate: -45,
                                            y: 0,
                                            opacity: 1,
                                            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                                        }
                                    }}
                                />
                            </motion.div>
                        </motion.button>
                    </div>

                    <AnimatePresence>
                        {isMobile && menuOpen && (
                            <>
                                <motion.div
                                    variants={backdropVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                                    onClick={() => setMenuOpen(false)}
                                />

                                <motion.div
                                    variants={mobileMenuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-gray-900/95 backdrop-blur-xl z-50 border-l border-gray-700/50 shadow-2xl"
                                >
                                    {/* Header do menu */}
                                    <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                                        <motion.div
                                            className="flex items-center gap-3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                                <Image
                                                    src="/logoLS.svg"
                                                    alt="Logo LS"
                                                    width={32}
                                                    height={32}
                                                    className="w-full h-full object-contain"
                                                    unoptimized
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-sm">LS Tecnologia</h3>
                                                <p className="text-gray-400 text-xs">Menu de navegação</p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Items do menu */}
                                    <nav className="p-6">
                                        <ul className="space-y-2">
                                            {navItems.map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    variants={mobileMenuItemVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    transition={{ delay: 0.4 + index * 0.1 }}
                                                    whileHover="hover"
                                                >
                                                    <a
                                                        href={item.href}
                                                        className="group flex items-center gap-4 text-gray-300 hover:text-white text-base font-medium py-4 px-4 rounded-xl transition-all duration-200 relative overflow-hidden"
                                                        onClick={() => setMenuOpen(false)}
                                                    >
                                                        {/* Ícone decorativo */}
                                                        <motion.div
                                                            className="w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100"
                                                            whileHover={{ scale: 1.5 }}
                                                            transition={{ type: 'spring', stiffness: 400 }}
                                                        />

                                                        {/* Texto do item */}
                                                        <span className="relative z-10">{item.name}</span>

                                                        {/* Background hover effect */}
                                                        <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                                                            initial={false}
                                                            transition={{ duration: 0.2 }}
                                                        />

                                                        {/* Seta decorativa */}
                                                        <motion.svg
                                                            className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 text-blue-400"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            initial={{ x: -10 }}
                                                            whileHover={{ x: 0 }}
                                                            transition={{ type: 'spring', stiffness: 400 }}
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </motion.svg>
                                                    </a>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <motion.div
                                            className="mt-8 pt-6 border-t border-gray-700/50"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 }}
                                        >
                                            <motion.a
                                                href="#contact"
                                                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                                                onClick={() => setMenuOpen(false)}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                Entre em contato
                                            </motion.a>
                                        </motion.div>

                                        {/* Informações adicionais */}
                                        <motion.div
                                            className="mt-6 text-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            <p className="text-gray-500 text-xs">
                                                Desenvolvendo soluções robustas
                                            </p>
                                            <p className="text-gray-600 text-xs mt-1">
                                                © 2025 LS Tecnologia
                                            </p>
                                        </motion.div>
                                    </nav>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </motion.header>
        </>
    );
}