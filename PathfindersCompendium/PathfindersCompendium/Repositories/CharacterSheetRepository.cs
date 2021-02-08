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
            //foreach (var sheet in completeList)
            //{
            //    List<Spell> spells = new List<Spell>();
            //    List<Feat> feats = new List<Feat>();
            //    var spellList = _context.SpellSheet.Where(sp => sp.SheetId == sheet.Id).ToList();
            //    if (spellList.Count() > 0)
            //    {
            //        foreach (var spell in spellList)
            //        {
            //            spells.Add(_context.Spell.Where(sp => sp.Id == spell.Id).FirstOrDefault());
            //        }
            //    }
            //    var featList = _context.FeatSheet.Where(sp => sp.SheetId == sheet.Id).ToList();
            //    if (featList.Count() > 0)
            //    {
            //        foreach (var feat in featList)
            //        {
            //            feats.Add(_context.Feat.Where(sp => sp.Id == feat.Id).FirstOrDefault());
            //        }
            //    }
            //    if (spells.Count() != 0) { sheet.Spell.AddRange(spells); }
            //    if (feats.Count() != 0) { sheet.Feat.AddRange(feats); }
            //}
            return completeList;


        }
        public Sheet GetSheetById(int id)
        {
            var sheet = _context.Sheet
                .Where(s => s.Id == id)
                .Include(s => s.UserProfile)
                .Include(s => s.Class)
                .FirstOrDefault();
            //List<Spell> spells = new List<Spell>();
            //List<Feat> feats = new List<Feat>();
            //var spellList = _context.SpellSheet.Where(sp => sp.SheetId == sheet.Id).ToList();
            //if (spellList.Count() > 0)
            //{
            //    foreach (var spell in spellList)
            //    {
            //        spells.Add(_context.Spell.Where(sp => sp.Id == spell.Id).FirstOrDefault());
            //    }
            //}
            //var featList = _context.FeatSheet.Where(sp => sp.SheetId == sheet.Id).ToList();
            //if (featList.Count() > 0)
            //{
            //    foreach (var feat in featList)
            //    {
            //        feats.Add(_context.Feat.Where(sp => sp.Id == feat.Id).FirstOrDefault());
            //    }
            //}
            //if (spells.Count() != 0) { sheet.Spell.AddRange(spells); }
            //if (feats.Count() != 0) { sheet.Feat.AddRange(feats); }
            return sheet;
        }
        public void Add(Sheet sheet)
        {
            _context.Add(sheet);
            _context.SaveChanges();
        }
        public void Update(Sheet sheet)
        {
            _context.Entry(sheet).State = EntityState.Modified;
            _context.SaveChanges();
        }
        public void Delete(Sheet sheet)
        {
            _context.Sheet.Remove(sheet);
            _context.SaveChanges();
        }
    }
}
