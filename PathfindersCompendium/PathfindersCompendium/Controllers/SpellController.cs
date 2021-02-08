using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PathfindersCompendium.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpellController : ControllerBase
    {
        private readonly ISpellRepository _repo;
        public SpellController(ISpellRepository repo)
        {
            _repo = repo;
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
    }
}
