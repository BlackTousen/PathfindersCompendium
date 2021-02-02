using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PathfindersCompendium.Models;
using PathfindersCompendium.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
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
        [HttpPost]
        public IActionResult CreateUserSheet(Sheet sheet)
        {
            var user = GetCurrentUserProfile();
            if (sheet.UserProfileId == 0) { sheet.UserProfileId = user.Id; }
            _repo.Add(sheet);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateSheet(int id, Sheet sheet)
        {
            var user = GetCurrentUserProfile();
            if (sheet.UserProfileId != user.Id) { return Unauthorized(); }
            var existingSheet = _repo.GetSheetById(id);
            foreach (PropertyInfo prop in existingSheet.GetType().GetProperties())
            {
                var value = prop.GetValue(existingSheet, null);
                var compare = prop.GetValue(sheet, null);
                if (value.GetType() != typeof(Class) && !value.Equals(compare))
                {
                    if (compare != null)
                    {
                        PropertyInfo _propertyInfo = existingSheet.GetType().GetProperty(prop.Name);
                        _propertyInfo.SetValue(existingSheet, compare, null);
                    }
                }
            }
            _repo.Update(existingSheet);
            return Ok(existingSheet);
        }
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepo.GetByFirebaseUserId(firebaseUserId);
        }

    }
}
