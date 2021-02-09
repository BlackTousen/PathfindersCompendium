using PathfindersCompendium.Models;
using System.Collections.Generic;

namespace PathfindersCompendium.Repositories
{
    public interface IFeatSheetRepository
    {
        void Add(FeatSheet featSheet);
        void Delete(FeatSheet featSheet);
        FeatSheet GetById(int id);
        List<FeatSheet> GetBySheetId(int id);
    }
}