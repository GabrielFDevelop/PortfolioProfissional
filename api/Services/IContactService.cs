using PortfolioApi.Models;

namespace PortfolioApi.Services;

public interface IContactService
{
    Task<ContatoResponse> EnviarMensagemAsync(ContatoRequest request);
}
