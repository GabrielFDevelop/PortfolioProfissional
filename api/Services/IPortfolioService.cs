using PortfolioApi.Models;

namespace PortfolioApi.Services;

public interface IPortfolioService
{
    Task<Profile> GetProfileAsync();
    Task<List<Habilidade>> GetHabilidadesAsync();
    Task<List<Projeto>> GetProjetosAsync(bool apenasDestaques = false);
    Task<Projeto?> GetProjetoByIdAsync(int id);
    Task<List<Experiencia>> GetExperienciasAsync();
    Task<List<Formacao>> GetFormacoesAsync();
}
