"use client";

import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";
import type { Profile } from "@/types";

interface Props {
  profile: Profile;
}

export default function Hero({ profile }: Props) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-primary-300 font-medium">
                Disponível para novos projetos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Olá, eu sou{" "}
              <span className="text-gradient">{profile.nome}</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-gray-300 font-light">
              {profile.titulo}
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              {profile.descricao}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("experiencia")}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-cyan-400 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all hover:-translate-y-1"
              >
                Minha Trajetória
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/CV-Gabriel-Freitas.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/15 text-white font-semibold hover:bg-white/5 transition-all"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-sm">{profile.localizacao}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-sm">{profile.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-sm">{profile.telefone}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
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

          <div className="relative flex items-center justify-center w-full">
            <div className="absolute w-80 h-80 bg-gradient-to-br from-primary-500/30 to-cyan-400/30 rounded-full blur-3xl" />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-cyan-400 rounded-[2rem] blur opacity-30" />
              <div
                className="relative rounded-[2rem] overflow-hidden border-2 border-primary-500/30 shadow-2xl bg-dark-700"
                style={{ width: "400px", height: "400px", maxWidth: "90vw", maxHeight: "90vw" }}
              >
                <img
                  src={profile.fotoUrl}
                  alt={profile.nome}
                  width={400}
                  height={400}
                  loading="eager"
                  decoding="sync"
                  style={{
                    width: "400px",
                    height: "400px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                    display: "block",
                    opacity: 1,
                    visibility: "visible",
                    position: "relative",
                    zIndex: 1,
                  }}
                  onError={(e) => {
                    console.error("Foto não carregou:", profile.fotoUrl);
                    const target = e.currentTarget;
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".profile-fallback")) {
                      const fallback = document.createElement("div");
                      fallback.className = "profile-fallback absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-700 to-dark-800";
                      fallback.style.fontSize = "80px";
                      fallback.style.fontWeight = "800";
                      fallback.style.background = "linear-gradient(135deg,#38bdf8,#22d3ee)";
                      fallback.style.webkitBackgroundClip = "text";
                      fallback.style.webkitTextFillColor = "transparent";
                      fallback.style.zIndex = "2";
                      fallback.textContent = profile.nome.charAt(0);
                      parent.appendChild(fallback);
                    }
                  }}
                  onLoad={() => {
                    console.log("Foto carregou com sucesso!");
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass px-5 py-3 shadow-xl z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">+2 anos</p>
                    <p className="text-xs text-gray-400">de experiência</p>
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
