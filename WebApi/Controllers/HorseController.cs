using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class HorseController : ControllerBase
{
    private readonly DatabaseContext _db;

    public HorseController(DatabaseContext db)
    {
        _db = db;
    }

    [HttpGet]
    public List<Horse> Get()
    {
        return _db.Horses.ToList();
    }

    [HttpGet("{id}")]
    public Horse GetById(int id)
    {
        return _db.Horses.Find(id);
    }

    [HttpPost]
    public Horse Post(Horse horse)
    {
        var foundHorse = _db.Find<Horse>(horse.HorseId);
        return foundHorse;
    }

    [HttpGet("CreateHorses")]
    public string CreateHorses()
    {
    Console.WriteLine("Inserting a new Horse");
    _db.Add(new Horse { Name = "Polly" });
    _db.SaveChanges();
    return "Created";
    }
}
