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
    public class FeatSheetController : ControllerBase
    {
        private readonly IFeatSheetRepository _repo;
        private readonly IUserProfileRepository _userRepo;
        public FeatSheetController(IFeatSheetRepository repo, IUserProfileRepository userRepo)
        {
            _repo = repo;
            _userRepo = userRepo;
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            //var user = GetCurrentUserProfile();
            var feats = _repo.GetById(id);
            return Ok(feats);
        }
    }
}
