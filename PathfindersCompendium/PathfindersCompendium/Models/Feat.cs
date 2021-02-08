using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Models
{
    public class Feat
    {
        public List<FeatSheet> FeatSheets { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public string Prerequisites { get; set; }
        public string Prerequisite_Feats { get; set; }
        public string Benefit { get; set; }
        public string Normal { get; set; }
        public string Special { get; set; }
        public string Source { get; set; }
        public string FullText { get; set; }
        public int Teamwork { get; set; }
        public int Critical { get; set; }
        public int Grit { get; set; }
        public int Style { get; set; }
        public int Performance { get; set; }
        public int Racial { get; set; }
        public int Companion_Familiar { get; set; }
        public string Race_Name { get; set; }
        public string Note { get; set; }
        public string Goal { get; set; }
        public int Multiples { get; set; }
        public string Suggested_Traits { get; set; }
        public string Prerequisite_Skills { get; set; }
        public int Panache { get; set; }
        public int Betrayal { get; set; }
        public int Targeting { get; set; }
        public int Esoteric { get; set; }
        public int Stare { get; set; }
        public int Weapon_Mastery { get; set; }
        public int Item_Mastery { get; set; }
        public int Armor_Mastery { get; set; }
        public int Shield_Mastery { get; set; }
        public int Blood_Hex { get; set; }
        public int Trick { get; set; }
    }
}
