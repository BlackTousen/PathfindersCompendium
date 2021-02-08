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
    public class FeatController : ControllerBase
    {
        private readonly IFeatRepository _repo;
        public FeatController(IFeatRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var feats = _repo.GetAll();
            return Ok(feats);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var feat = _repo.GetById(id);
            return Ok(feat);
        }
    }
}
