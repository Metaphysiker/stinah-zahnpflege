using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HorsesController : ControllerBase
{
    private readonly DatabaseContext _db;

    public HorsesController(DatabaseContext db)
    {
        _db = db;
    }

    [HttpGet]
    public List<Horse> Get()
    {
        return _db.Horses.ToList();
    }

    [HttpGet("protected")]
    [Authorize]
    public List<Horse> ProtectedGet()
    {
        return _db.Horses.ToList();
    }

    [HttpGet("protectedadmin")]
    [Authorize(Roles = "Admin")]
    public List<Horse> ProtectedAdminGet()
    {
        return _db.Horses.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Horse> GetById(int id)
    {
        var horse = _db.Horses.Find(id);
        if (horse == null)
        {
            return NotFound();
        }
        return horse;
    }

    [HttpPost]
     public ActionResult<Horse> Post([FromBody] Horse horse)
    {
        _db.Add(horse);
        _db.SaveChanges();
        var createdHorse = _db.Horses.Find(horse.HorseId);
        if (createdHorse == null)
        {
            return BadRequest();
        }
        return createdHorse;
    }

    [HttpGet("CreateHorses")]
    public string CreateHorses()
    {
    Console.WriteLine("Inserting a new Horse");
    _db.Add(new Horse { Name = "Polly" });
    _db.SaveChanges();
    return "Created";
    }

    [HttpGet("env")]
    public string GetEnv()
    {
        return "success";
    }
}
