namespace PortfolioApi.Models;

public class ContatoRequest
{
    public string Nome { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Assunto { get; set; } = string.Empty;
    public string Mensagem { get; set; } = string.Empty;
}

public class ContatoResponse
{
    public bool Sucesso { get; set; }
    public string Mensagem { get; set; } = string.Empty;
    public DateTime DataProcessamento { get; set; }
}
