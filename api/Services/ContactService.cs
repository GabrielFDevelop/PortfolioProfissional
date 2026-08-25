using PortfolioApi.Models;

namespace PortfolioApi.Services;

public class ContactService : IContactService
{
    private readonly ILogger<ContactService> _logger;

    public ContactService(ILogger<ContactService> logger)
    {
        _logger = logger;
    }

    public Task<ContatoResponse> EnviarMensagemAsync(ContatoRequest request)
    {
        try
        {
            _logger.LogInformation(
                "Nova mensagem de contato recebida de {Nome} ({Email}): {Assunto}",
                request.Nome, request.Email, request.Assunto);

            return Task.FromResult(new ContatoResponse
            {
                Sucesso = true,
                Mensagem = "Mensagem enviada com sucesso! Entrarei em contato em breve.",
                DataProcessamento = DateTime.UtcNow
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Erro ao processar mensagem de contato");

            return Task.FromResult(new ContatoResponse
            {
                Sucesso = false,
                Mensagem = "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.",
                DataProcessamento = DateTime.UtcNow
            });
        }
    }
}
