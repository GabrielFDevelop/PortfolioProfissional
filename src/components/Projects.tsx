"use client";

import { useState } from "react";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import type { Projeto } from "@/types";

interface Props {
  projetos: Projeto[];
}

export default function Projects({ projetos }: Props) {
  const [filter, setFilter] = useState<"todos" | "destaques">("todos");

  const filtered =
    filter === "destaques" ? projetos.filter((p) => p.destaque) : projetos;

  return (
    <section id="projetos" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            Projetos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trabalhos <span className="text-gradient">Selecionados</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma seleção dos projetos mais recentes e impactantes que desenvolvi ao
            longo da minha carreira.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          <div className="glass p-1.5 rounded-2xl inline-flex">
            <button
              onClick={() => setFilter("todos")}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === "todos"
                  ? "bg-gradient-to-r from-primary-500 to-cyan-400 text-white shadow-lg shadow-primary-500/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Todos os Projetos
            </button>
            <button
              onClick={() => setFilter("destaques")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === "destaques"
                  ? "bg-gradient-to-r from-primary-500 to-cyan-400 text-white shadow-lg shadow-primary-500/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Destaques
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((projeto) => (
            <article
              key={projeto.id}
              className="group glass overflow-hidden hover-lift"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={projeto.imagemUrl}
                  alt={projeto.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />
                {projeto.destaque && (
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-semibold text-white shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Destaque
                  </div>
                )}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {projeto.githubUrl && (
                    <a
                      href={projeto.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary-500 hover:border-primary-500 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {projeto.demoUrl && (
                    <a
                      href={projeto.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary-500 hover:border-primary-500 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                  {projeto.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {projeto.descricao}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  {projeto.tecnologias.length > 4 && (
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs">
                      +{projeto.tecnologias.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
