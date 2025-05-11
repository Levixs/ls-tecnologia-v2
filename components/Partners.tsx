"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
    {
        name: "MX2Tech",
        logo: "/MX2TECH.png",
        alt: "MX2Tech Logo",
        url: "https://www.mx2tech.com.br"
    },
    {
        name: "KDM Tecnologia",
        logo: "/KDMTecnologia.svg",
        alt: "KDM Tecnologia Logo",
        url: "https://www.kadmo.tech"
    },
    {
        name: "IRA Tech",
        logo: "/IRASTech.jpg",
        alt: "IRAS Tech Logo",
        url: "https://github.com/IanAlexandrino"
    },
    {
        name: "Vincer",
        logo: "/Vincer.png",
        alt: "Vincer Logo",
        url: "#"
    },
]

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

const hoverEffect = {
    y: -5,
    scale: 1.05,
    transition: {
        duration: 0.3,
        ease: "easeOut"
    }
}

export default function Partners() {
    return (
        <section id="partners" className="relative py-10 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center pb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                        Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Parceiros</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Colaboramos com as melhores plataformas para entregar soluções de alto nível.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-12"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {partners.map((partner, index) => (
                        <motion.a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={item}
                            whileHover={hoverEffect}
                            className="flex flex-col items-center justify-center relative"
                        >
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-32 h-32 mb-4 flex items-center justify-center rounded-full overflow-hidden border-2 border-blue-400/30 hover:border-blue-400/50 transition-all">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.alt}
                                        width={128}
                                        height={128}
                                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                                        unoptimized
                                    />
                                </div>
                                <motion.h3
                                    className="text-center text-gray-300 hover:text-white transition-colors font-medium text-xl"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {partner.name}
                                </motion.h3>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400 mb-6">
                        Quer se tornar um parceiro? Vamos construir algo incrível juntos.
                    </p>
                    <motion.a
                        href="#contact"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Seja um Parceiro
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}