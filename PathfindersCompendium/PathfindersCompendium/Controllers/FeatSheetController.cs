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
    public class FeatSheetController : ControllerBase
    {
        private readonly IFeatSheetRepository _repo;
        private readonly ICharacterSheetRepository _sheetRepo;
        private readonly IUserProfileRepository _userRepo;
        public FeatSheetController(IFeatSheetRepository repo, IUserProfileRepository userRepo, ICharacterSheetRepository characterSheetRepository)
        {
            _repo = repo;
            _userRepo = userRepo;
            _sheetRepo = characterSheetRepository;
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            //var user = GetCurrentUserProfile();
            var feats = _repo.GetBySheetId(id);
            return Ok(feats);
        }
        [HttpPost()]
        public IActionResult AddToSheet(FeatSheet featSheet)
        {
            //var user = GetCurrentUserProfile();
            _repo.Add(featSheet);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteFromSheet(int id)
        {
            var user = GetCurrentUserProfile();
            var existingFeatSheet = _repo.GetById(id);
            if (existingFeatSheet == null) { return BadRequest(); }
            var existingSheet = _sheetRepo.GetSheetById(existingFeatSheet.SheetId);
            if (user.Id != existingSheet.UserProfileId) { return BadRequest(); }
            _repo.Delete(existingFeatSheet);
            return NoContent();
        }
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepo.GetByFirebaseUserId(firebaseUserId);
        }

    }
}
