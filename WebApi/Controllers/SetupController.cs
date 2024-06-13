using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SetupController : ControllerBase
{
    private readonly DatabaseContext _db;
    private readonly UserManager<IdentityUser> _userManager;

    public SetupController(DatabaseContext db, UserManager<IdentityUser> userManager)
    {
        _db = db;
        _userManager = userManager;
    }

    [HttpGet]
    public List<IdentityUser> Get()
    {
        return _db.Users.ToList();
    }

    [HttpGet("CreateAdmin")]
    public async Task<ActionResult<IdentityUser>> CreateAdmin()
    {
        var admin = await _userManager.FindByEmailAsync("s.raess@me.com");
        if (admin != null)
        {
            await _userManager.AddToRoleAsync(admin, "Admin");
        } else {
        admin = new IdentityUser { UserName = "s.raess@me.com", Email = "s.raess@me.com" };
        await _userManager.CreateAsync(admin, "password");
        }
            await _userManager.AddToRoleAsync(admin, "Admin");

        return admin;
    }
}
