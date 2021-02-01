using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Models
{
    public class Sheet
    {
        public int Id { get; set; }
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
        public List<Feat> Feats { get; set; }
        public string Name { get; set; }
        public string Alignment { get; set; }
        public string Deity { get; set; }
        public string Homeland { get; set; }
        public string Race { get; set; }
        public string Size { get; set; }
        public string Gender { get; set; }
        public string Hair { get; set; }
        public string Eyes { get; set; }
        public int ClassId { get; set; }
        public string Height { get; set; }
        public int Age { get; set; }
        public int Weight { get; set; }
        public int Level { get; set; }
        public int Exp { get; set; }
        public int TNL { get; set; }
        public int HP { get; set; }
        public int MHP { get; set; }
        public int TempHP { get; set; }
        public int Str { get; set; }
        public int Dex { get; set; }
        public int Con { get; set; }
        public int Int { get; set; }
        public int Wis { get; set; }
        public int Cha { get; set; }
        public int StrMod { get; set; }

        public int DexMod { get; set; }
        public int ConMod { get; set; }
        public int IntMod { get; set; }
        public int WisMod { get; set; }
        public int ChaMod { get; set; }
        public int AC { get; set; }
        public int TouchAC { get; set; }
        public int FlatFootAC { get; set; }
        public int FortSave { get; set; }
        public int RefSave { get; set; }
        public int WillSave { get; set; }
        public int BAB { get; set; }
        public int CMB { get; set; }
        public int CMD { get; set; }
        public int Melee { get; set; }
        public int Ranged { get; set; }
        public int LandSpeed { get; set; }
        public int SwimSpeed { get; set; }
        public int ClimbSpeed { get; set; }
        public int FlySpeed { get; set; }
        public int Acrobatics { get; set; }
        public int Appraise { get; set; }
        public int Bluff { get; set; }
        public int Climb { get; set; }
        public int Craft { get; set; }
        public int Diplomacy { get; set; }
        public int DisableDevice { get; set; }
        public int Disguise { get; set; }
        public int EscapeArtist { get; set; }
        public int Fly { get; set; }
        public int HandleAnimal { get; set; }
        public int Heal { get; set; }
        public int Intimidate { get; set; }
        public int KnowledgeArcana { get; set; }
        public int KnowledgeDungeoneering { get; set; }
        public int KnowledgeEngineering { get; set; }
        public int KnowledgeGeography { get; set; }
        public int KnowledgeHistory { get; set; }
        public int KnowledgeLocal { get; set; }
        public int KnowledgeNature { get; set; }
        public int KnowledgeNobility { get; set; }
        public int KnowledgePlanes { get; set; }
        public int KnowledgeReligion { get; set; }
        public int Linguistics { get; set; }
        public int Perception { get; set; }
        public int Perform { get; set; }
        public int Profession { get; set; }
        public int Ride { get; set; }
        public int SenseMotive { get; set; }
        public int SleightOfHand { get; set; }
        public int Spellcraft { get; set; }
        public int Stealth { get; set; }
        public int Survival { get; set; }
        public int Swim { get; set; }
        public int UseMagicDevice { get; set; }
        public int SkillPoints { get; set; }
        public int Copper { get; set; }
        public int Silver { get; set; }
        public int Gold { get; set; }
        public int Plat { get; set; }
        public string Notes { get; set; }

    }
}
