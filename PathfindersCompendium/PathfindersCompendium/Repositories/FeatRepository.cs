using Microsoft.EntityFrameworkCore;
using PathfindersCompendium.Data;
using PathfindersCompendium.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Repositories
{
    public class FeatRepository : IFeatRepository
    {
        private readonly ApplicationDbContext _context;
        public FeatRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Feat> GetAll()
        {
            var feats = _context.Feat

                                .ToList();
            return feats;
        }
        public Feat GetById(int id)
        {
            Feat feat = _context.Feat
                .Where(f => f.Id == id)
                .FirstOrDefault();

            return feat;
        }
    }
}
