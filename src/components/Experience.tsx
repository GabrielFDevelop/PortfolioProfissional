"use client";

import { Briefcase, Calendar, Building2, GraduationCap, Circle } from "lucide-react";
import type { Experiencia, Formacao } from "@/types";

interface Props {
  experiencias: Experiencia[];
  formacoes: Formacao[];
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Atual";
  const d = new Date(dateStr);
  return d.toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
}

export default function Experience({ experiencias, formacoes }: Props) {
  return (
    <section id="experiencia" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            Trajetória
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experiência & <span className="text-gradient">Formação</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Minha jornada profissional e acadêmica até aqui.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold">Experiência Profissional</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent" />
              <div className="space-y-10">
                {experiencias.map((exp) => (
                  <div key={exp.id} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-primary-500/30">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="glass p-6 hover-lift">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-bold">{exp.cargo}</h4>
                          <p className="text-primary-400 font-medium text-sm">
                            {exp.empresa}
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          {formatDate(exp.dataInicio)} - {formatDate(exp.dataFim)}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {exp.descricao}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tecnologias.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-dark-600 text-gray-300 text-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold">Formação & Certificações</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent" />
              <div className="space-y-10">
                {formacoes.map((f) => (
                  <div key={f.id} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-primary-500 flex items-center justify-center shadow-lg shadow-cyan-400/30">
                      <Circle className="w-4 h-4 text-white" fill="currentColor" />
                    </div>
                    <div className="glass p-6 hover-lift">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary-500/15 text-primary-300 text-xs font-medium mb-2">
                            {f.tipo}
                          </div>
                          <h4 className="text-lg font-bold">{f.curso}</h4>
                          <p className="text-cyan-400 font-medium text-sm">
                            {f.instituicao}
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          {formatDate(f.dataInicio)} - {formatDate(f.dataFim)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
