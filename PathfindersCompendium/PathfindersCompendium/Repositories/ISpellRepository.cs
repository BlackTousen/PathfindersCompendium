using PathfindersCompendium.Models;
using System.Collections.Generic;

namespace PathfindersCompendium.Repositories
{
    public interface ISpellRepository
    {
        void Add(SpellSheet spellSheet);
        List<Spell> GetAll();
        Spell GetById(int id);
    }
}