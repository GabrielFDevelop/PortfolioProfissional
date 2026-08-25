using Microsoft.AspNetCore.Mvc;
using PortfolioApi.Models;
using PortfolioApi.Services;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContatoController : ControllerBase
{
    private readonly IContactService _service;

    public ContatoController(IContactService service)
    {
        _service = service;
    }

    [HttpPost]
    [ProducesResponseType(typeof(ContatoResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<ContatoResponse>> EnviarMensagem([FromBody] ContatoRequest request)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        if (string.IsNullOrWhiteSpace(request.Nome) ||
            string.IsNullOrWhiteSpace(request.Email) ||
            string.IsNullOrWhiteSpace(request.Mensagem))
        {
            return BadRequest(new ContatoResponse
            {
                Sucesso = false,
                Mensagem = "Nome, Email e Mensagem são obrigatórios.",
                DataProcessamento = DateTime.UtcNow
            });
        }

        var response = await _service.EnviarMensagemAsync(request);
        return Ok(response);
    }
}
