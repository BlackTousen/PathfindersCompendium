using PathfindersCompendium.Models;
using System.Collections.Generic;

namespace PathfindersCompendium.Repositories
{
    public interface ISpellRepository
    {
        List<Spell> GetAll();
        Spell GetById(int id);
    }
}