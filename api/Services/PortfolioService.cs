using PortfolioApi.Models;

namespace PortfolioApi.Services;

public class PortfolioService : IPortfolioService
{
    private static readonly Profile _profile = new()
    {
        Nome = "Gabriel Freitas",
        Titulo = "Desenvolvedor Front-End",
        Descricao = "Sou Desenvolvedor Front-End com competências em NodeJS, JavaScript, Typescript, Angular, HTML5, CSS3, .NET",
        Localizacao = "Minas Gerais, Brasil",
        Email = "gabriel.assisfreitas@outlook.com",
        Telefone = "+55 (38) 99932-3468",
        FotoUrl = "/profile.jpeg",
        RedesSociais = new()
        {
            "https://github.com/GabrielFDevelop",
            "https://www.linkedin.com/in/gabriel-freitas-467b10297"
        },
        Resumo = "Sou profissional de tecnologia com experiência em desenvolvimento Front-End, principalmente com Angular, React, JavaScript e TypeScript, atuando na criação de aplicações responsivas, performáticas e com foco na experiência do usuário. Ao longo da minha trajetória, também desenvolvi conhecimentos em Back-End com C#/.NET e Node.js, além de experiência com APIs REST, Git e metodologias ágeis. Atualmente, estou cursando uma pós-graduação em Inteligência Artificial e Machine Learning, buscando ampliar minha capacidade de criar soluções utilizando novas tecnologias."
    };

    private static readonly List<Habilidade> _habilidades = new()
    {
        new() { Id = 1, Nome = "C# / .NET", Categoria = "Backend", Nivel = 58, Icone = "Code2" },
        new() { Id = 2, Nome = "ASP.NET Core", Categoria = "Backend", Nivel = 52, Icone = "Server" },
        new() { Id = 3, Nome = "React / Next.js", Categoria = "Frontend", Nivel = 73, Icone = "Layout" },
        new() { Id = 4, Nome = "TypeScript", Categoria = "Frontend", Nivel = 70, Icone = "FileCode" },
        new() { Id = 5, Nome = "SQL Server", Categoria = "Banco de Dados", Nivel = 55, Icone = "Database" },
        new() { Id = 6, Nome = "PostgreSQL", Categoria = "Banco de Dados", Nivel = 48, Icone = "Database" },
        new() { Id = 7, Nome = "Angular", Categoria = "Frontend", Nivel = 70, Icone = "Layout" },
        new() { Id = 8, Nome = "Node.js", Categoria = "Backend", Nivel = 65, Icone = "Server" },
        new() { Id = 9, Nome = "Docker", Categoria = "DevOps", Nivel = 45, Icone = "Container" },
        new() { Id = 10, Nome = "AWS / Azure", Categoria = "Cloud", Nivel = 38, Icone = "Cloud" },
        new() { Id = 11, Nome = "Tailwind CSS", Categoria = "Frontend", Nivel = 72, Icone = "Palette" },
        new() { Id = 12, Nome = "Git / CI-CD", Categoria = "DevOps", Nivel = 62, Icone = "GitBranch" }
    };

    private static readonly List<Projeto> _projetos = new()
    {
        new()
        {
            Id = 1,
            Titulo = "Sistema de Gestão Financeira Enterprise",
            Descricao = "Plataforma completa de gestão financeira para médias e grandes empresas, com módulos de contas a pagar, contas a receber, fluxo de caixa e relatórios analíticos em tempo real. Processa mais de 100k transações por dia.",
            Tecnologias = new() { ".NET 8", "ASP.NET Core", "React", "SQL Server", "Azure Service Bus", "Redis" },
            ImagemUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=enterprise%20financial%20dashboard%20data%20visualization%20dark%20theme&image_size=landscape_16_9",
            GithubUrl = "https://github.com/seuusuario/financeiro-enterprise",
            DemoUrl = "https://demo.seuprojeto.com",
            DataCriacao = new DateTime(2024, 03, 15),
            Destaque = true
        },
        new()
        {
            Id = 2,
            Titulo = "E-commerce Marketplace Omnichannel",
            Descricao = "Marketplace omnichannel com integração de múltiplos sellers, gateway de pagamento, gestão de estoque em tempo real e painel administrativo completo. Escalado para suportar 500k usuários simultâneos.",
            Tecnologias = new() { ".NET 7", "Microserviços", "Next.js 14", "PostgreSQL", "RabbitMQ", "AWS" },
            ImagemUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ecommerce%20marketplace%20dashboard%20modern%20ui%20product%20catalog&image_size=landscape_16_9",
            GithubUrl = "https://github.com/seuusuario/marketplace",
            DemoUrl = "https://marketplace.seuprojeto.com",
            DataCriacao = new DateTime(2023, 11, 20),
            Destaque = true
        },
        new()
        {
            Id = 3,
            Titulo = "Sistema de Prontuário Eletrônico",
            Descricao = "Sistema de prontuário eletrônico para clínicas e hospitais, com agendamento, prontuário médico, receituário digital e integração com convênios. Totalmente compliant com LGPD.",
            Tecnologias = new() { ".NET 6", "Blazor", "SQL Server", "Azure AD", "SignalR" },
            ImagemUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=medical%20electronic%20health%20record%20system%20dashboard%20clinical&image_size=landscape_16_9",
            GithubUrl = "https://github.com/seuusuario/prontuario-eletronico",
            DemoUrl = "",
            DataCriacao = new DateTime(2023, 06, 10),
            Destaque = true
        },
        new()
        {
            Id = 4,
            Titulo = "API de Pagamentos com Pix e Cartão",
            Descricao = "Gateway de pagamentos desenvolvido do zero com suporte a Pix, cartão de crédito, boleto bancário e webhooks. Integração com principais adquirentes do mercado.",
            Tecnologias = new() { ".NET 8", "Clean Architecture", "CQRS", "PostgreSQL", "Docker" },
            ImagemUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=payment%20gateway%20fintech%20dashboard%20transaction%20analytics&image_size=landscape_16_9",
            GithubUrl = "https://github.com/seuusuario/api-pagamentos",
            DemoUrl = "",
            DataCriacao = new DateTime(2024, 01, 05),
            Destaque = false
        },
        new()
        {
            Id = 5,
            Titulo = "Dashboard Analítico BI em Tempo Real",
            Descricao = "Plataforma de Business Intelligence com dashboards interativos, gráficos em tempo real, alertas customizáveis e exportação de relatórios. Integração com múltiplas fontes de dados.",
            Tecnologias = new() { "React", "TypeScript", "D3.js", "Node.js", "MongoDB", "WebSocket" },
            ImagemUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=business%20intelligence%20dashboard%20data%20analytics%20charts%20dark%20mode&image_size=landscape_16_9",
            GithubUrl = "https://github.com/seuusuario/bi-dashboard",
            DemoUrl = "https://bi.seuprojeto.com",
            DataCriacao = new DateTime(2023, 08, 22),
            Destaque = false
        },
        new()
        {
            Id = 6,
            Titulo = "App Mobile de Gestão de Tarefas",
            Descricao = "Aplicativo multiplataforma de produtividade com sincronização em nuvem, colaboração em tempo real, notificações push e integrações com Google Calendar e Slack.",
            Tecnologias = new() { "React Native", "Expo", ".NET API", "Firebase", "SQLite" },
            ImagemUrl = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=productivity%20task%20management%20mobile%20app%20ui%20modern&image_size=portrait_4_3",
            GithubUrl = "https://github.com/seuusuario/app-tarefas",
            DemoUrl = "",
            DataCriacao = new DateTime(2023, 04, 18),
            Destaque = false
        }
    };

    private static readonly List<Experiencia> _experiencias = new()
    {
        new()
        {
            Id = 1,
            Empresa = "Tech Solutions S.A.",
            Cargo = "Desenvolvedor Full Stack Sênior",
            Descricao = "Liderança técnica da squad de produtos financeiros. Arquitetura e desenvolvimento de microserviços em .NET e frontends em React. Mentoria de desenvolvedores juniores e plenos. Implementação de práticas de DevOps e CI/CD.",
            DataInicio = new DateTime(2022, 08, 01),
            DataFim = null,
            Tecnologias = new() { ".NET 6/7/8", "React", "Next.js", "Azure", "SQL Server", "Kubernetes" }
        },
        new()
        {
            Id = 2,
            Empresa = "Digital Commerce Ltda.",
            Cargo = "Desenvolvedor Backend Sênior",
            Descricao = "Desenvolvimento de APIs escaláveis para e-commerce com 2M+ de usuários. Otimização de queries e redução de 60% no tempo de resposta. Integração com gateways de pagamento e sistemas logísticos.",
            DataInicio = new DateTime(2020, 03, 15),
            DataFim = new DateTime(2022, 07, 31),
            Tecnologias = new() { ".NET Core 3.1/.NET 5", "ASP.NET Web API", "PostgreSQL", "Redis", "RabbitMQ" }
        },
        new()
        {
            Id = 3,
            Empresa = "Health Systems Tech",
            Cargo = "Desenvolvedor Full Stack Pleno",
            Descricao = "Desenvolvimento completo de sistema de saúde (HIS). Atuação em todas as camadas desde o banco de dados até a interface. Participação ativa no processo de certificação do software junto ao Ministério da Saúde.",
            DataInicio = new DateTime(2018, 06, 01),
            DataFim = new DateTime(2020, 03, 14),
            Tecnologias = new() { "C#", "ASP.NET MVC", "Angular", "SQL Server", "Azure DevOps" }
        },
        new()
        {
            Id = 4,
            Empresa = "Startup Innovate",
            Cargo = "Desenvolvedor de Software Júnior",
            Descricao = "Desenvolvimento de MVP e features para startup de tecnologia. Atuação em ambiente ágil com Scrum. Crescimento profissional rápido com aprendizado contínuo em novas tecnologias.",
            DataInicio = new DateTime(2016, 09, 20),
            DataFim = new DateTime(2018, 05, 31),
            Tecnologias = new() { "C#", "ASP.NET WebForms", "JavaScript", "Bootstrap", "MySQL" }
        }
    };

    private static readonly List<Formacao> _formacoes = new()
    {
        new()
        {
            Id = 1,
            Instituicao = "Universidade de São Paulo (USP)",
            Curso = "Bacharelado em Ciência da Computação",
            Tipo = "Graduação",
            DataInicio = new DateTime(2013, 02, 01),
            DataFim = new DateTime(2017, 12, 15)
        },
        new()
        {
            Id = 2,
            Instituicao = "FIAP",
            Curso = "MBA em Arquitetura de Soluções com .NET e Azure",
            Tipo = "Pós-graduação",
            DataInicio = new DateTime(2021, 01, 10),
            DataFim = new DateTime(2022, 03, 20)
        },
        new()
        {
            Id = 3,
            Instituicao = "Microsoft",
            Curso = "Certificação AZ-204: Developing Solutions for Microsoft Azure",
            Tipo = "Certificação",
            DataInicio = new DateTime(2023, 05, 01),
            DataFim = new DateTime(2023, 07, 15)
        },
        new()
        {
            Id = 4,
            Instituicao = "Amazon Web Services",
            Curso = "Certificação AWS Solutions Architect Associate",
            Tipo = "Certificação",
            DataInicio = new DateTime(2024, 01, 10),
            DataFim = new DateTime(2024, 04, 22)
        }
    };

    public Task<Profile> GetProfileAsync()
    {
        return Task.FromResult(_profile);
    }

    public Task<List<Habilidade>> GetHabilidadesAsync()
    {
        return Task.FromResult(_habilidades);
    }

    public Task<List<Projeto>> GetProjetosAsync(bool apenasDestaques = false)
    {
        var result = apenasDestaques
            ? _projetos.Where(p => p.Destaque).ToList()
            : _projetos;
        return Task.FromResult(result);
    }

    public Task<Projeto?> GetProjetoByIdAsync(int id)
    {
        return Task.FromResult(_projetos.FirstOrDefault(p => p.Id == id));
    }

    public Task<List<Experiencia>> GetExperienciasAsync()
    {
        return Task.FromResult(_experiencias);
    }

    public Task<List<Formacao>> GetFormacoesAsync()
    {
        return Task.FromResult(_formacoes);
    }
}
