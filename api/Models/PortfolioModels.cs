namespace PortfolioApi.Models;

public class Profile
{
    public string Nome { get; set; } = string.Empty;
    public string Titulo { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public string Localizacao { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Telefone { get; set; } = string.Empty;
    public string FotoUrl { get; set; } = string.Empty;
    public List<string> RedesSociais { get; set; } = new();
    public string Resumo { get; set; } = string.Empty;
}

public class Habilidade
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Categoria { get; set; } = string.Empty;
    public int Nivel { get; set; }
    public string Icone { get; set; } = string.Empty;
}

public class Projeto
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public List<string> Tecnologias { get; set; } = new();
    public string ImagemUrl { get; set; } = string.Empty;
    public string GithubUrl { get; set; } = string.Empty;
    public string DemoUrl { get; set; } = string.Empty;
    public DateTime DataCriacao { get; set; }
    public bool Destaque { get; set; }
}

public class Experiencia
{
    public int Id { get; set; }
    public string Empresa { get; set; } = string.Empty;
    public string Cargo { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public DateTime DataInicio { get; set; }
    public DateTime? DataFim { get; set; }
    public List<string> Tecnologias { get; set; } = new();
}

public class Formacao
{
    public int Id { get; set; }
    public string Instituicao { get; set; } = string.Empty;
    public string Curso { get; set; } = string.Empty;
    public string Tipo { get; set; } = string.Empty;
    public DateTime DataInicio { get; set; }
    public DateTime DataFim { get; set; }
}
