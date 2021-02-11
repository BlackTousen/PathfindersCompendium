using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PathfindersCompendium.Models;
using PathfindersCompendium.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace PathfindersCompendium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpellController : ControllerBase
    {
        private readonly ISpellRepository _repo;
        private readonly IUserProfileRepository _userRepo;
        public SpellController(ISpellRepository repo, IUserProfileRepository userProfileRepository)
        {
            _repo = repo;
            _userRepo = userProfileRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var spells = _repo.GetAll();
            return Ok(spells);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var spell = _repo.GetById(id);
            return Ok(spell);
        }
        [HttpPost]
        public IActionResult AddToSheet(SpellSheet spellSheet)
        {
            //var user = GetCurrentUserProfile();
            _repo.Add(spellSheet);
            return NoContent();
        }
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepo.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
