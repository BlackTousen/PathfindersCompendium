using PathfindersCompendium.Data;
using PathfindersCompendium.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Repositories
{
    public class SpellRepository : ISpellRepository
    {
        private readonly ApplicationDbContext _context;
        public SpellRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Spell> GetAll()
        {
            return _context.Spell.ToList();
        }
        public Spell GetById(int id)
        {
            return _context.Spell.Where(s => s.Id == id).FirstOrDefault();
        }
    }
}
