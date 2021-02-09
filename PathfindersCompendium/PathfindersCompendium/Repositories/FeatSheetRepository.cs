using Microsoft.EntityFrameworkCore;
using PathfindersCompendium.Data;
using PathfindersCompendium.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Repositories
{
    public class FeatSheetRepository : IFeatSheetRepository
    {
        private readonly ApplicationDbContext _context;
        public FeatSheetRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<FeatSheet> GetBySheetId(int id)
        {
            return _context.FeatSheet
                .Include(fs => fs.Feat)
                .Where(fs => fs.SheetId == id)
                .ToList();

        }
        public FeatSheet GetById(int id)
        {
            return _context.FeatSheet
                .Include(fs => fs.Feat)
                .Where(fs => fs.Id == id)
                .FirstOrDefault();

        }
        public void Add(FeatSheet featSheet)
        {
            _context.Add(featSheet);
            _context.SaveChanges();
        }
        public void Delete(FeatSheet featSheet)
        {
            _context.Remove(featSheet);
            _context.SaveChanges();
        }
    }
}
