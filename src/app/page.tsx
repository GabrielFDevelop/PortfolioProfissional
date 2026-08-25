import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Profile, Habilidade, Experiencia, Formacao } from "@/types";

const mockProfile: Profile = {
  nome: "Gabriel Freitas",
  titulo: "Desenvolvedor",
  descricao:
    "Sou Desenvolvedor Front-End com competências em NodeJS, JavaScript, Typescript, Angular, HTML5, CSS3, .NET",
  localizacao: "Minas Gerais, Brasil",
  email: "gabriel.assisfreitas@outlook.com",
  telefone: "+55 (38) 99932-3468",
  fotoUrl: "/profile.jpeg",
  redesSociais: [
    "https://github.com/GabrielFDevelop",
    "https://www.linkedin.com/in/gabriel-freitas-467b10297",
  ],
  resumo:
    "Sou profissional de tecnologia com experiência em desenvolvimento Front-End, principalmente com Angular, React, JavaScript e TypeScript, atuando na criação de aplicações responsivas, performáticas e com foco na experiência do usuário. Ao longo da minha trajetória, também desenvolvi conhecimentos em Back-End com C#/.NET e Node.js, além de experiência com APIs REST, Git e metodologias ágeis. Atualmente, estou cursando uma pós-graduação em Inteligência Artificial e Machine Learning, buscando ampliar minha capacidade de criar soluções utilizando novas tecnologias.",
};

const mockHabilidades: Habilidade[] = [
  { id: 1, nome: "C# / .NET", categoria: "Backend", nivel: 58, icone: "Code2" },
  { id: 2, nome: "ASP.NET Core", categoria: "Backend", nivel: 52, icone: "Server" },
  { id: 3, nome: "React / Next.js", categoria: "Frontend", nivel: 73, icone: "Layout" },
  { id: 4, nome: "TypeScript", categoria: "Frontend", nivel: 70, icone: "FileCode" },
  { id: 7, nome: "Angular", categoria: "Frontend", nivel: 70, icone: "Layout" },
  { id: 8, nome: "Node.js", categoria: "Backend", nivel: 65, icone: "Server" },
  { id: 11, nome: "Tailwind CSS", categoria: "Frontend", nivel: 72, icone: "Palette" },
  { id: 12, nome: "Git", categoria: "DevOps", nivel: 62, icone: "GitBranch" },
];



const mockExperiencias: Experiencia[] = [
  {
    id: 1,
    empresa: "Bit Tech",
    cargo: "Analista de Sistemas",
    descricao:
      "Atuo de forma autônoma no desenvolvimento e manutenção de aplicações web com Angular, React e TypeScript, entregando features completas, componentes reutilizáveis e páginas responsivas com foco em performance e acessibilidade. Realizo integrações com APIs REST em Node.js e C#/.NET, participo de refinamentos técnicos, estimativas, reviews de PR e acompanho o ciclo completo das entregas do sprint, além de apoiar na implantação e deploy contínuo.",
    dataInicio: "2025-06-01",
    dataFim: null,
    tecnologias: ["Angular", "React", "TypeScript", "Node.js", "C#/.NET", "Tailwind CSS", "Git", "Scrum"],
  },
  {
    id: 2,
    empresa: "Bit Tech",
    cargo: "Estágio em Análise de Sistemas",
    descricao:
      "Apoiei o time de desenvolvimento na construção e manutenção de interfaces web com Angular e React, implementando telas responsivas, correção de bugs e refatorações seguindo boas práticas de UI/UX. Participei ativamente dos ritos de Scrum, executei tarefas guiadas, aprendi versionamento com Git no dia a dia e tive os primeiros contatos com integrações de APIs REST em JavaScript/TypeScript, consolidando o aprendizado teórico na prática.",
    dataInicio: "2024-06-15",
    dataFim: "2025-06-01",
    tecnologias: ["Angular", "React", "TypeScript", "JavaScript", "HTML5/CSS3", "Git"],
  },
];

const mockFormacoes: Formacao[] = [
  {
    id: 1,
    instituicao: "UNICESUMAR",
    curso: "Inteligência Artificial e Machine Learning",
    tipo: "Pós-graduação",
    dataInicio: "2026-08-01",
    dataFim: null,
  },
  {
    id: 2,
    instituicao: "UNICESUMAR",
    curso: "Gestão de Tecnologia da Informação",
    tipo: "Graduação",
    dataInicio: "2023-12-01",
    dataFim: "2026-01-15",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero profile={mockProfile} />
      <About profile={mockProfile} />
      <Skills habilidades={mockHabilidades} />
      <Experience experiencias={mockExperiencias} formacoes={mockFormacoes} />
      <Contact profile={mockProfile} />
      <Footer />
    </main>
  );
}
