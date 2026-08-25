# Portfolio Profissional

Portfólio profissional desenvolvido com **Next.js (React) + TypeScript** no frontend e **C# / .NET 8 (ASP.NET Core)** no backend, preparado para deploy na **Vercel**.

## Tecnologias

### Frontend
- **Next.js 14** com App Router
- **React 18** + **TypeScript**
- **Tailwind CSS** para estilização
- **Lucide React** para ícones
- Responsivo e acessível

### Backend
- **.NET 8 ASP.NET Core Web API**
- **Swagger** para documentação
- Injeção de dependência e serviços tipados
- Estrutura: Controllers → Services → Models

### Arquitetura
O frontend consome a API REST em C# através do serviço `src/services/api.ts`. Para produção na Vercel, existem duas abordagens:

1. **Recomendado**: Deploy do frontend Next.js na Vercel e deploy da API .NET 8 no Azure App Service / AWS Lambda / Render, configurando o `vercel.json` para fazer proxy de `/api/*` para o backend.
2. **Tudo na Vercel**: Usar a integração .NET serverless da Vercel via YARP (experimental).

## Como rodar localmente

### 1. Frontend (Next.js)
```bash
# Na raiz do projeto
npm install
npm run dev
# Acessar: http://localhost:3000
```

### 2. Backend (C# .NET 8)
```bash
cd api
dotnet restore
dotnet run
# Acessar: http://localhost:5000/swagger
```

O Next.js já está configurado para fazer proxy de `/api/*` para `http://localhost:5000/api/*` em desenvolvimento.

## Deploy na Vercel

### Deploy do Frontend (raiz)
1. Conecte o repositório no painel da Vercel
2. Configure o Framework Pré-definido como **Next.js**
3. Build Command: `next build`
4. Output Directory: `.next`
5. Variável de ambiente:
   - `NEXT_PUBLIC_API_URL` = URL da sua API .NET (ex: `https://minha-api.azurewebsites.net/api`)

### Deploy do Backend .NET 8
Opções de hospedagem recomendadas:
- **Azure App Service** (nativo para .NET)
- **Render** (suporte a .NET)
- **AWS Lambda** (serverless com .NET isolado)

## Endpoints da API

| Método | Rota                          | Descrição                        |
|--------|-------------------------------|----------------------------------|
| GET    | `/api/health`                 | Health check da API              |
| GET    | `/api/portfolio/profile`      | Perfil do desenvolvedor          |
| GET    | `/api/portfolio/habilidades`  | Lista de habilidades             |
| GET    | `/api/portfolio/projetos`     | Projetos (`?apenasDestaques=true`)|
| GET    | `/api/portfolio/projetos/:id`| Detalhes de um projeto          |
| GET    | `/api/portfolio/experiencias` | Experiências profissionais      |
| GET    | `/api/portfolio/formacoes`    | Formação e certificações         |
| POST   | `/api/contato`                | Enviar mensagem de contato       |

## Estrutura de pastas

```
PortfolioProfissional/
├── api/                      # Backend C# .NET 8
│   ├── Controllers/          # Endpoints da API
│   ├── Models/               # DTOs e entidades
│   ├── Services/             # Lógica de negócio
│   ├── Properties/           # launchSettings
│   ├── Program.cs            # Startup da API
│   └── PortfolioApi.csproj
├── src/                      # Frontend Next.js
│   ├── app/                  # App Router (layout + page)
│   ├── components/           # Componentes React reutilizáveis
│   ├── services/             # Integração com API
│   └── types/                # Tipos TypeScript
├── public/                   # Assets estáticos
├── tailwind.config.ts
├── next.config.js
├── vercel.json
└── package.json
```

## Personalização

Edite os dados mock e do backend em:
- **Frontend (fallback estático)**: `src/app/page.tsx` (constantes mock)
- **Backend C# (API)**: `api/Services/PortfolioService.cs` (dados do portfolio)
- **Cores/tema**: `tailwind.config.ts`
