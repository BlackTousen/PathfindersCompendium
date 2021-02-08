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
        public List<FeatSheet> GetById(int id)
        {
            return _context.FeatSheet
                //.Include(fs => fs.Feat)
                .Where(fs => fs.SheetId == id)
                .ToList();

        }
    }
}
