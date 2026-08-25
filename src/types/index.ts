export interface Profile {
  nome: string;
  titulo: string;
  descricao: string;
  localizacao: string;
  email: string;
  telefone: string;
  fotoUrl: string;
  redesSociais: string[];
  resumo: string;
}

export interface Habilidade {
  id: number;
  nome: string;
  categoria: string;
  nivel: number;
  icone: string;
}

export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagemUrl: string;
  githubUrl: string;
  demoUrl: string;
  dataCriacao: string;
  destaque: boolean;
}

export interface Experiencia {
  id: number;
  empresa: string;
  cargo: string;
  descricao: string;
  dataInicio: string;
  dataFim: string | null;
  tecnologias: string[];
}

export interface Formacao {
  id: number;
  instituicao: string;
  curso: string;
  tipo: string;
  dataInicio: string;
  dataFim: string | null;
}

export interface ContatoRequest {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface ContatoResponse {
  sucesso: boolean;
  mensagem: string;
  dataProcessamento: string;
}
