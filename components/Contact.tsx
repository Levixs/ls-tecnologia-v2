"use client";
import { Calendar, Check, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface ContactItemProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    href?: string;
    color: string;
}

const ContactItem = React.memo(({ icon, title, value, href, color }: ContactItemProps) => (
    <div className="flex items-start gap-4">
        <div className={`p-3 ${color}/10 rounded-lg ${color}`}>
            {icon}
        </div>
        <div>
            <h4 className="text-sm font-medium text-gray-400">{title}</h4>
            {href ? (
                <Link
                    href={href}
                    className={`text-lg text-gray-200 hover:text-${color.split('-')[1]}-400 transition-colors`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {value}
                </Link>
            ) : (
                <p className="text-lg text-gray-200">{value}</p>
            )}
        </div>
    </div>
));

ContactItem.displayName = 'ContactItem';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
            console.error("Error sending email:", error);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                        Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Conversar</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Entre em contato para discutir seu projeto ou solicitar um orçamento personalizado.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                        <h3 className="text-2xl font-semibold text-gray-100 mb-6">Envie uma mensagem</h3>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
                                <Input
                                    type="text"
                                    onChange={handleChange}
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="Seu nome"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="seu@email.com"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensagem</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 bg-gray-700/50 border min-h-24 h-24 border-gray-600/50 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="Descreva seu projeto ou dúvida..."
                                    required
                                    onChange={handleChange}
                                ></Textarea>
                                {submitStatus === "success" && (
                                    <div className="text-green-400 text-sm">Mensagem enviada com sucesso!</div>
                                )}
                                {submitStatus === "error" && (
                                    <div className="text-red-400 text-sm">Ocorreu um erro ao enviar a mensagem. Tente novamente.</div>
                                )}
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}

                                className="w-full flex items-center justify-center cursor-pointer gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-colors"
                            >
                                <Send className="w-4 h-4" />
                                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                            </Button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Informações de Contato</h3>

                            <div className="space-y-4">
                                <ContactItem
                                    icon={<Mail className="w-5 h-5" />}
                                    title="Email"
                                    value="contato@lstecnologia.com"
                                    href="mailto:contato@lstecnologia.com"
                                    color="text-blue-400"
                                />

                                <ContactItem
                                    icon={<Phone className="w-5 h-5" />}
                                    title="Telefone/WhatsApp"
                                    value="(16) 99227-6144"
                                    href="https://api.whatsapp.com/send/?phone=5516992276144&text=Olá%2C+vi+o+seu+site+e+tenho+interesse+em+negociar.&type=phone_number&app_absent=0"
                                    color="text-green-400"
                                />
                            </div>

                            <div className="mt-6">
                                <h4 className="text-sm font-medium text-gray-400 mb-3">Redes Sociais</h4>
                                <div className="flex gap-3">
                                    <Link
                                        href="https://linkedin.com/in/gleidsonlevi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-blue-500/10 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5 text-blue-400" />
                                    </Link>

                                    <Link
                                        href="https://github.com/Levixs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-500/10 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github className="w-5 h-5 text-gray-200" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card de Disponibilidade Moderno */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-100">Disponibilidade</h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div className='mb-2'>
                                        <h4 className="text-sm font-medium text-gray-400">Status Atual</h4>
                                        <p className="text-gray-200">Disponível para novos projetos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}