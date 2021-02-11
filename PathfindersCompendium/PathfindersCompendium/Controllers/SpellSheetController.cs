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
    public class SpellSheetController : ControllerBase
    {
        private readonly ICharacterSheetRepository _sheetRepo;
        private readonly ISpellSheetRepository _repo;
        private readonly IUserProfileRepository _userRepo;
        public SpellSheetController(ISpellSheetRepository repo, IUserProfileRepository userRepo, ICharacterSheetRepository characterSheetRepository)
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
        public IActionResult AddToSheet(SpellSheet spellSheet)
        {
            //var user = GetCurrentUserProfile();
            _repo.Add(spellSheet);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteFromSheet(int id)
        {
            var user = GetCurrentUserProfile();
            var existingSpellSheet = _repo.GetById(id);
            if (existingSpellSheet == null) { return BadRequest(); }
            var existingSheet = _sheetRepo.GetSheetById(existingSpellSheet.SheetId);
            if (user.Id != existingSheet.UserProfileId) { return BadRequest(); }
            _repo.Delete(existingSpellSheet);
            return NoContent();
        }
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepo.GetByFirebaseUserId(firebaseUserId);
        }


    }
}
