"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react";
import type { Profile, ContatoRequest } from "@/types";

interface Props {
  profile: Profile;
}

export default function Contact({ profile }: Props) {
  const [form, setForm] = useState<ContatoRequest>({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      setStatus("error");
      setMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setStatus("loading");
    try {
      const destino = profile.email;
      const assunto = form.assunto?.trim()
        ? form.assunto
        : `Mensagem de ${form.nome} via portfólio GabrielDev`;
      const corpo =
`Olá Gabriel,

Você recebeu uma nova mensagem através do portfólio GabrielDev:

📝 Nome: ${form.nome}
📧 Email: ${form.email}
${form.assunto?.trim() ? `💬 Assunto: ${form.assunto}\n` : ""}
📨 Mensagem:

${form.mensagem}

---
Enviada pelo formulário de contato do site (mailto handler).`;

      const mailtoHref =
        `mailto:${encodeURIComponent(destino)}` +
        `?subject=${encodeURIComponent(assunto)}` +
        `&body=${encodeURIComponent(corpo)}`;

      window.location.href = mailtoHref;

      setTimeout(() => {
        setStatus("success");
        setMessage("Cliente de email aberto! Revise a mensagem e clique em Enviar para entregá-la ao meu email.");
        setForm({ nome: "", email: "", assunto: "", mensagem: "" });
      }, 500);
    } catch {
      setStatus("error");
      setMessage("Não foi possível abrir o cliente de email. Por favor, me envie diretamente para " + profile.email);
    }
  };

  return (
    <section id="contato" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tem um projeto em mente ou quer trocar uma ideia? Entre em contato,
            estou sempre aberto a novas oportunidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <a
              href={`mailto:${profile.email}`}
              className="glass p-6 flex items-start gap-4 hover-lift block"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="font-semibold break-all">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.telefone.replace(/\D/g, "")}`}
              className="glass p-6 flex items-start gap-4 hover-lift block"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Telefone</p>
                <p className="font-semibold">{profile.telefone}</p>
              </div>
            </a>

            <div className="glass p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Localização</p>
                <p className="font-semibold">{profile.localizacao}</p>
              </div>
            </div>

            <div className="glass p-6">
              <p className="text-sm text-gray-400 mb-4">Redes Sociais</p>
              <div className="flex gap-3">
                <a
                  href={profile.redesSociais[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile.redesSociais[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nome <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Assunto</label>
                <input
                  type="text"
                  value={form.assunto}
                  onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Sobre o que você quer conversar?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Mensagem <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                  placeholder="Descreva seu projeto, ideia ou deixe sua mensagem..."
                />
              </div>

              {status !== "idle" && status !== "loading" && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-xl ${
                    status === "success"
                      ? "bg-green-500/10 border border-green-500/20"
                      : "bg-red-500/10 border border-red-500/20"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                  <p
                    className={`text-sm ${
                      status === "success" ? "text-green-300" : "text-red-300"
                    }`}
                  >
                    {message}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-cyan-400 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Abrindo email...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
