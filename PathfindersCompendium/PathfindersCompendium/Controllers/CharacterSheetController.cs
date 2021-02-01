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
    public class CharacterSheetController : ControllerBase
    {
        private readonly IUserProfileRepository _userRepo;
        private readonly ICharacterSheetRepository _repo;
        public CharacterSheetController(IUserProfileRepository uRepo, ICharacterSheetRepository repo)
        {
            _userRepo = uRepo;
            _repo = repo;
        }
        [HttpGet]
        public IActionResult GetUserSheets()
        {
            var user = GetCurrentUserProfile();
            List<Sheet> sheets = null;

            sheets = _repo.GetSheetsByUserId(user.Id);
            return Ok(sheets);

        }
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepo.GetByFirebaseUserId(firebaseUserId);
        }

    }
}
