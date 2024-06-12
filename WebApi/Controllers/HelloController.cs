using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class HelloController : ControllerBase
{

    public HelloController()
    {
    }

    [HttpGet]
    public string Get()
    {
        return "Hello";
    }
}
