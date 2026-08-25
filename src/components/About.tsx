"use client";

import { Briefcase, GraduationCap, Code2, Users } from "lucide-react";
import type { Profile } from "@/types";

interface Props {
  profile: Profile;
}

const stats = [
  { icon: Code2, value: "2+", label: "Anos de Experiência" },
  { icon: GraduationCap, value: "2", label: "Formações" },
];

export default function About({ profile }: Props) {
  return (
    <section id="sobre" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            Sobre Mim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Minha <span className="text-gradient">Trajetória</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Conheça um pouco mais sobre minha jornada e o que me motiva a criar
            soluções incríveis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Transformando ideias em{" "}
              <span className="text-gradient">softwares de alto impacto</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {profile.resumo}
            </p>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Minha jornada começou com curiosidade sobre como as coisas
                funcionam e evoluiu para uma paixão por construir produtos
                digitais que fazem a diferença. Acredito em código limpo,
                arquitetura bem pensada e em entender profundamente o problema
                antes de escrever a primeira linha.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass p-4">
                <p className="text-xs text-gray-400 mb-1">Stack Principal</p>
                <p className="font-semibold text-sm">.NET + React</p>
              </div>
              <div className="glass p-4">
                <p className="text-xs text-gray-400 mb-1">Foco Atual</p>
                <p className="font-semibold text-sm">IA & Machine Learning</p>
              </div>
              <div className="glass p-4">
                <p className="text-xs text-gray-400 mb-1">Metodologia</p>
                <p className="font-semibold text-sm">Scrum / Kanban</p>
              </div>
              <div className="glass p-4">
                <p className="text-xs text-gray-400 mb-1">Idiomas</p>
                <p className="font-semibold text-sm">PT-BR / EN</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`glass p-6 sm:p-8 hover-lift ${
                  i % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-400/20 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary-400" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
