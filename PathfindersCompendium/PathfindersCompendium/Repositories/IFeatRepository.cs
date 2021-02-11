using PathfindersCompendium.Models;
using System.Collections.Generic;

namespace PathfindersCompendium.Repositories
{
    public interface IFeatRepository
    {
        List<Feat> GetAll();
        Feat GetById(int id);
    }
}