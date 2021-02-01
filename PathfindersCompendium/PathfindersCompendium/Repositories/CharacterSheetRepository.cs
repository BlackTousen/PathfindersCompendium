using Microsoft.EntityFrameworkCore;
using PathfindersCompendium.Data;
using PathfindersCompendium.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Repositories
{
    public class CharacterSheetRepository : ICharacterSheetRepository
    {
        private readonly ApplicationDbContext _context;

        public CharacterSheetRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Sheet> GetSheetsByUserId(int id)
        {
            List<Sheet> completeList;

            completeList = _context.Sheet
                .Where(s => s.UserProfileId == id)
                .Include(s => s.UserProfile)
                .Include(s => s.Class)
                .ToList();
            foreach (var sheet in completeList)
            {
                List<Spell> spells = new List<Spell>();
                List<Feat> feats = new List<Feat>();
                var spellList = _context.SpellSheet.Where(sp => sp.SheetId == sheet.Id).ToList();
                foreach (var spell in spellList)
                {
                    spells.Add(_context.Spell.Where(sp => sp.Id == spell.Id).FirstOrDefault());
                }
                var featList = _context.FeatSheet.Where(sp => sp.SheetId == sheet.Id).ToList();
                foreach (var feat in featList)
                {
                    feats.Add(_context.Feat.Where(sp => sp.Id == feat.Id).FirstOrDefault());
                }
                sheet.Spell.AddRange(spells);
                sheet.Feat.AddRange(feats);
            }
            return completeList;


        }
        public Sheet GetSheetById(int id)
        {
            return _context.Sheet
                .Where(s => s.UserProfileId == id)
                .Include(s => s.UserProfile)
                .Include(s => s.Spell)
                .Include(s => s.Feat)
                .Include(s => s.Class)
                .FirstOrDefault();
        }

    }
}
