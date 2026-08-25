"use client";

import { Github, Linkedin, ArrowUp } from "lucide-react";
import GDevIcon from "./GDevIcon";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center">
                <GDevIcon className="w-[26px] h-[13px] text-white shrink-0" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-gradient">Gabriel</span>Dev
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Construindo soluções digitais de alto impacto com paixão, excelência
              técnica e atenção aos detalhes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                Navegação
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#sobre" className="hover:text-primary-400 transition-colors">Sobre</a></li>
                <li><a href="#habilidades" className="hover:text-primary-400 transition-colors">Habilidades</a></li>
                <li><a href="#experiencia" className="hover:text-primary-400 transition-colors">Experiência</a></li>
                <li><a href="#contato" className="hover:text-primary-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                Recursos
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Artigos</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Cases</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Conectar
            </h4>
            <div className="flex md:justify-end gap-3">
              <a
                href="https://github.com/GabrielFDevelop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-freitas-467b10297"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} GabrielDev. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
          >
            Voltar ao topo
            <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
