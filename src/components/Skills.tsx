"use client";

import {
  Code2,
  Server,
  Layout,
  FileCode,
  Database,
  Layers,
  Container,
  Cloud,
  Palette,
  GitBranch,
} from "lucide-react";
import type { Habilidade } from "@/types";

interface Props {
  habilidades: Habilidade[];
}

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Server,
  Layout,
  FileCode,
  Database,
  Layers,
  Container,
  Cloud,
  Palette,
  GitBranch,
};

const categorias = ["Backend", "Frontend", "Banco de Dados", "DevOps", "Cloud"];

export default function Skills({ habilidades }: Props) {
  return (
    <section id="habilidades" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            Habilidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Minhas <span className="text-gradient">Competências</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tecnologias e ferramentas que domino e utilizo diariamente para
            entregar soluções de alta qualidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {categorias.map((categoria) => {
            const habs = habilidades.filter((h) => h.categoria === categoria);
            if (habs.length === 0) return null;

            return (
              <div key={categoria} className="space-y-4">
                <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-6">
                  {categoria}
                </h3>
                <div className="space-y-4">
                  {habs.map((h) => {
                    const Icon = iconMap[h.icone] || Code2;
                    return (
                      <div key={h.id} className="glass p-4 hover-lift">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-primary-500/15 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-primary-400" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{h.nome}</p>
                          </div>
                          <span className="text-xs font-semibold text-primary-400">
                            {h.nivel}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full transition-all duration-1000"
                            style={{ width: `${h.nivel}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
