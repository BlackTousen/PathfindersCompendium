using PathfindersCompendium.Models;
using System.Collections.Generic;

namespace PathfindersCompendium.Repositories
{
    public interface IFeatSheetRepository
    {
        List<FeatSheet> GetById(int id);
    }
}