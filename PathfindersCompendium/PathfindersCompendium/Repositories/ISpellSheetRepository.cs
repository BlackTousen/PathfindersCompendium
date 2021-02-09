using PathfindersCompendium.Models;
using System.Collections.Generic;

namespace PathfindersCompendium.Repositories
{
    public interface ISpellSheetRepository
    {
        void Add(SpellSheet spellSheet);
        void Delete(SpellSheet spellSheet);
        SpellSheet GetById(int id);
        List<SpellSheet> GetBySheetId(int id);
    }
}