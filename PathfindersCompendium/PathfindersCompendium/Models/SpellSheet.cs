using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Models
{
    public class SpellSheet
    {

        public int Id { get; set; }
        public int SheetId { get; set; }

        public int SpellId { get; set; }
        public Spell Spell { get; set; }

    }
}
