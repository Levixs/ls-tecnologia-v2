"use client";
import { motion } from 'framer-motion';
import { Code2, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        { icon: <Instagram size={20} />, url: 'https://www.instagram.com/_lstecnologia_/' },
        { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/gleidsonlevi/' },
    ]

    const footerLinks = [
        { title: 'Home', url: '#hero' },
        { title: 'Serviços', url: '#services' },
        { title: 'Processo de desenvolvimento', url: '#process' },
        { title: 'FAQ', url: '#FAQ' },
        { title: 'Contato', url: '#contact' },
    ]

    const socialIconVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
        }),
        hover: {
            y: 0,
            scale: 1,
            backgroundColor: "rgba(103, 232, 249, 0.2)",
            boxShadow: "0 5px 15px rgba(103, 232, 249, 0.4)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        },
        tap: {
            scale: 0.9,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 20
            }
        }
    }

    const techStack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'ShadCN UI']

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    }

    return (
        <footer className="relative bg-gray-950/80 backdrop-blur-sm text-zinc-200 pt-16 pb-8 px-6 mt-20 border-t border-gray-800/50">
            {/* Background overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-3 bg-[linear-gradient(to_right,#3b82f606_1px,transparent_1px),linear-gradient(to_bottom,#3b82f606_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8 },
                            },
                        }}
                        className="col-span-1"
                    >
                        <div className="flex items-center mb-4">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                                LS Tecnologia
                            </span>
                        </div>
                        <p className="text-zinc-400 mb-4">
                            Soluções digitais modernas para o futuro da sua empresa.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <a
                                href="mailto:contato@lstecnologia.com"
                                className="flex items-center gap-2 bg-gray-800/40 hover:bg-gray-700/60 backdrop-blur-sm px-4 py-2 rounded-lg transition-all border border-gray-700/30"
                            >
                                <Mail size={18} className="text-cyan-300" />
                                <span>Contate-nos</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                        className="col-span-1"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-cyan-200">Links Rápidos</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link, i) => (
                                <motion.li
                                    key={link.title}
                                    custom={i}
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                >
                                    <a href={link.url} className="hover:text-cyan-300 transition-colors">
                                        {link.title}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                        className="col-span-1"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-cyan-200">Redes Sociais</h3>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    custom={i}
                                    variants={socialIconVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    whileTap="tap"
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl p-3 rounded-full bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 hover:bg-gray-700/60 transition-all"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        {social.icon}
                                    </motion.div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="col-span-1"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-cyan-200 flex items-center gap-2">
                            <Code2 size={18} />
                            Stack Atual
                        </h3>
                        <ul className="space-y-2 text-zinc-400">
                            {techStack.map((tech, i) => (
                                <motion.li
                                    key={tech}
                                    custom={i}
                                    variants={itemVariants}
                                    whileHover={{ x: 5, color: '#67e8f9' }}
                                >
                                    {tech}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent my-8"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm"
                >
                    <div className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} LS Tecnologia. Todos os direitos reservados.
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-cyan-300 transition-colors">
                            Termos de Serviço
                        </a>
                        <a href="#" className="hover:text-cyan-300 transition-colors">
                            Política de Privacidade
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
