using Microsoft.EntityFrameworkCore;
using PathfindersCompendium.Data;
using PathfindersCompendium.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Repositories
{
    public class SpellSheetRepository : ISpellSheetRepository
    {
        private readonly ApplicationDbContext _context;
        public SpellSheetRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<SpellSheet> GetBySheetId(int id)
        {
            return _context.SpellSheet
                .Include(ss => ss.Spell)
                .Where(ss => ss.SheetId == id)
                .ToList();

        }
        public SpellSheet GetById(int id)
        {
            return _context.SpellSheet
                .Include(ss => ss.Spell)
                .Where(ss => ss.Id == id)
                .FirstOrDefault();

        }
        public void Add(SpellSheet spellSheet)
        {
            _context.Add(spellSheet);
            _context.SaveChanges();
        }
        public void Delete(SpellSheet spellSheet)
        {
            _context.Remove(spellSheet);
            _context.SaveChanges();
        }
    }
}
