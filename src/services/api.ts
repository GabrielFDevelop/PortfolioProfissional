import type {
  Profile,
  Habilidade,
  Projeto,
  Experiencia,
  Formacao,
  ContatoRequest,
  ContatoResponse,
} from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Erro na API: ${res.status}`);
  }

  return res.json();
}

export const portfolioApi = {
  getProfile: () => fetchAPI<Profile>("/portfolio/profile"),
  getHabilidades: () => fetchAPI<Habilidade[]>("/portfolio/habilidades"),
  getProjetos: (apenasDestaques = false) =>
    fetchAPI<Projeto[]>(`/portfolio/projetos?apenasDestaques=${apenasDestaques}`),
  getProjetoById: (id: number) => fetchAPI<Projeto>(`/portfolio/projetos/${id}`),
  getExperiencias: () => fetchAPI<Experiencia[]>("/portfolio/experiencias"),
  getFormacoes: () => fetchAPI<Formacao[]>("/portfolio/formacoes"),
  enviarContato: (data: ContatoRequest) =>
    fetchAPI<ContatoResponse>("/contato", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
