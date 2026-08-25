using Microsoft.AspNetCore.Mvc;
using PortfolioApi.Models;
using PortfolioApi.Services;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PortfolioController : ControllerBase
{
    private readonly IPortfolioService _service;

    public PortfolioController(IPortfolioService service)
    {
        _service = service;
    }

    [HttpGet("profile")]
    [ProducesResponseType(typeof(Profile), StatusCodes.Status200OK)]
    public async Task<ActionResult<Profile>> GetProfile()
    {
        var profile = await _service.GetProfileAsync();
        return Ok(profile);
    }

    [HttpGet("habilidades")]
    [ProducesResponseType(typeof(List<Habilidade>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<Habilidade>>> GetHabilidades()
    {
        var habilidades = await _service.GetHabilidadesAsync();
        return Ok(habilidades);
    }

    [HttpGet("projetos")]
    [ProducesResponseType(typeof(List<Projeto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<Projeto>>> GetProjetos([FromQuery] bool apenasDestaques = false)
    {
        var projetos = await _service.GetProjetosAsync(apenasDestaques);
        return Ok(projetos);
    }

    [HttpGet("projetos/{id:int}")]
    [ProducesResponseType(typeof(Projeto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Projeto>> GetProjetoById(int id)
    {
        var projeto = await _service.GetProjetoByIdAsync(id);
        if (projeto == null)
            return NotFound(new { mensagem = "Projeto não encontrado" });

        return Ok(projeto);
    }

    [HttpGet("experiencias")]
    [ProducesResponseType(typeof(List<Experiencia>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<Experiencia>>> GetExperiencias()
    {
        var experiencias = await _service.GetExperienciasAsync();
        return Ok(experiencias);
    }

    [HttpGet("formacoes")]
    [ProducesResponseType(typeof(List<Formacao>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<Formacao>>> GetFormacoes()
    {
        var formacoes = await _service.GetFormacoesAsync();
        return Ok(formacoes);
    }
}
