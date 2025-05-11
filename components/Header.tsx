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
        { name: 'FAQ', href: '#FAQ' }
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
        hidden: { x: -20, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        },
        hover: { 
            x: 5,
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
            transition: {
                type: 'spring',
                stiffness: 300
            }
        }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const mobileMenuVariants = {
        hidden: { 
            y: -20, 
            opacity: 0,
            transition: { duration: 0.2 }
        },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.3, 
                ease: [0.22, 1, 0.36, 1] 
            }
        },
        exit: { 
            y: -20, 
            opacity: 0,
            transition: { duration: 0.2 }
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
                                    className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center"
                                    whileHover={{
                                        rotate: 2,
                                        transition: { type: 'spring', stiffness: 300 }
                                    }}
                                >
                                    <motion.div
                                        className="relative p-1"
                                        initial={{ scale: 1 }}
                                        whileHover={{
                                            rotate: 5,
                                            scale: 1.1,
                                            boxShadow: "0 0 20px 5px rgba(59, 130, 246, 0.5)"
                                        }}
                                        transition={{ type: 'spring', stiffness: 300 }}
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
                            className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                            whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { type: 'spring', stiffness: 500 }
                            }}
                            whileTap={{ 
                                scale: 0.9,
                                transition: { type: 'spring', stiffness: 500 }
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
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
                                    className="fixed inset-0 bg-black/70 z-40"
                                    onClick={() => setMenuOpen(false)}
                                />

                                <motion.div
                                    variants={mobileMenuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="md:hidden fixed top-20 left-0 right-0 bg-gray-900 z-50 border-t border-white/10 shadow-xl"
                                >
                                    <ul className="flex flex-col py-4">
                                        {navItems.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                variants={mobileMenuItemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ delay: index * 0.1 }}
                                                whileHover="hover"
                                            >
                                                <a
                                                    href={item.href}
                                                    className="block text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wider py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </motion.header>
        </>
    );
}