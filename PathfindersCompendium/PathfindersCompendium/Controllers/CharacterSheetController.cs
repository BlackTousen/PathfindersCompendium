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
            //foreach (PropertyInfo prop in existingSheet.GetType().GetProperties())
            //{
            //    var value = prop.GetValue(existingSheet, null);
            //    var compare = prop.GetValue(sheet, null);
            //    if (value.GetType() != typeof(UserProfile) && !value.Equals(compare))
            //    {
            //        if (compare != null)
            //        {
            //            PropertyInfo _propertyInfo = existingSheet.GetType().GetProperty(prop.Name);
            //            _propertyInfo.SetValue(existingSheet, compare, null);
            //        }
            //    }
            //}
            existingSheet.Name = sheet.Name;
            existingSheet.Alignment = sheet.Alignment;
            existingSheet.Deity = sheet.Deity;
            existingSheet.Homeland = sheet.Homeland;
            existingSheet.Race = sheet.Race;
            existingSheet.Size = sheet.Size;
            existingSheet.Gender = sheet.Gender;
            existingSheet.Hair = sheet.Hair;
            existingSheet.Eyes = sheet.Eyes;
            existingSheet.ClassId = sheet.ClassId;
            existingSheet.Height = sheet.Height;
            existingSheet.Age = sheet.Age;
            existingSheet.Weight = sheet.Weight;
            existingSheet.Level = sheet.Level;
            existingSheet.Exp = sheet.Exp;
            existingSheet.TNL = sheet.TNL;
            existingSheet.HP = sheet.HP;
            existingSheet.MHP = sheet.MHP;
            existingSheet.TempHP = sheet.TempHP;
            if (sheet.Str == 0) { sheet.Str = 10; }
            existingSheet.Str = sheet.Str;
            if (sheet.Dex == 0) { sheet.Dex = 10; }
            existingSheet.Dex = sheet.Dex;
            if (sheet.Con == 0) { sheet.Con = 10; }
            existingSheet.Con = sheet.Con;
            if (sheet.Int == 0) { sheet.Int = 10; }
            existingSheet.Int = sheet.Int;
            if (sheet.Wis == 0) { sheet.Wis = 10; }
            existingSheet.Wis = sheet.Wis;
            if (sheet.Cha == 0) { sheet.Cha = 10; }
            existingSheet.Cha = sheet.Cha;
            existingSheet.StrMod = Convert.ToInt32(Math.Floor(((double)sheet.Str - 10) / 2));
            existingSheet.DexMod = Convert.ToInt32(Math.Floor(((double)sheet.Dex - 10) / 2));
            existingSheet.ConMod = Convert.ToInt32(Math.Floor(((double)sheet.Con - 10) / 2));
            existingSheet.IntMod = Convert.ToInt32(Math.Floor(((double)sheet.Int - 10) / 2));
            existingSheet.WisMod = Convert.ToInt32(Math.Floor(((double)sheet.Wis - 10) / 2));
            existingSheet.ChaMod = Convert.ToInt32(Math.Floor(((double)sheet.Cha - 10) / 2));
            existingSheet.AC = sheet.AC;
            existingSheet.TouchAC = sheet.TouchAC;
            existingSheet.FlatFootAC = sheet.FlatFootAC;
            existingSheet.FortSave = sheet.FortSave;
            existingSheet.RefSave = sheet.RefSave;
            existingSheet.WillSave = sheet.WillSave;
            existingSheet.BAB = sheet.BAB;
            existingSheet.CMB = sheet.CMB;
            existingSheet.CMD = sheet.CMD;
            existingSheet.Melee = sheet.Melee;
            existingSheet.Ranged = sheet.Ranged;
            if (sheet.LandSpeed == 0) { sheet.LandSpeed = 30; }
            existingSheet.LandSpeed = sheet.LandSpeed;
            existingSheet.SwimSpeed = sheet.SwimSpeed;
            existingSheet.ClimbSpeed = sheet.ClimbSpeed;
            existingSheet.FlySpeed = sheet.FlySpeed;
            existingSheet.Acrobatics = sheet.Acrobatics;
            existingSheet.Appraise = sheet.Appraise;
            existingSheet.Bluff = sheet.Bluff;
            existingSheet.Climb = sheet.Climb;
            existingSheet.Craft = sheet.Craft;
            existingSheet.Diplomacy = sheet.Diplomacy;
            existingSheet.DisableDevice = sheet.DisableDevice;
            existingSheet.Disguise = sheet.Disguise;
            existingSheet.EscapeArtist = sheet.EscapeArtist;
            existingSheet.Fly = sheet.Fly;
            existingSheet.HandleAnimal = sheet.HandleAnimal;
            existingSheet.Heal = sheet.Heal;
            existingSheet.Intimidate = sheet.Intimidate;
            existingSheet.KnowledgeArcana = sheet.KnowledgeArcana;
            existingSheet.KnowledgeDungeoneering = sheet.KnowledgeDungeoneering;
            existingSheet.KnowledgeEngineering = sheet.KnowledgeEngineering;
            existingSheet.KnowledgeGeography = sheet.KnowledgeGeography;
            existingSheet.KnowledgeHistory = sheet.KnowledgeHistory;
            existingSheet.KnowledgeLocal = sheet.KnowledgeLocal;
            existingSheet.KnowledgeNature = sheet.KnowledgeNature;
            existingSheet.KnowledgeNobility = sheet.KnowledgeNobility;
            existingSheet.KnowledgePlanes = sheet.KnowledgePlanes;
            existingSheet.KnowledgeReligion = sheet.KnowledgeReligion;
            existingSheet.Linguistics = sheet.Linguistics;
            existingSheet.Perception = sheet.Perception;
            existingSheet.Perform = sheet.Perform;
            existingSheet.Ride = sheet.Ride;
            existingSheet.SenseMotive = sheet.SenseMotive;
            existingSheet.SleightOfHand = sheet.SleightOfHand;
            existingSheet.Spellcraft = sheet.Spellcraft;
            existingSheet.Stealth = sheet.Stealth;
            existingSheet.Survival = sheet.Survival;
            existingSheet.Swim = sheet.Swim;
            existingSheet.UseMagicDevice = sheet.UseMagicDevice;
            existingSheet.SkillPoints = sheet.SkillPoints;
            existingSheet.Copper = sheet.Copper;
            existingSheet.Silver = sheet.Silver;
            existingSheet.Gold = sheet.Gold;
            existingSheet.Plat = sheet.Plat;
            existingSheet.Notes = sheet.Notes;
            _repo.Update(existingSheet);
            return Ok(existingSheet);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteSheet(int id)
        {
            var user = GetCurrentUserProfile();
            var existingSheet = _repo.GetSheetById(id);
            if (user.Id != existingSheet.UserProfileId) { return BadRequest(); }
            _repo.Delete(existingSheet);
            return NoContent();
        }
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepo.GetByFirebaseUserId(firebaseUserId);
        }

    }
}
