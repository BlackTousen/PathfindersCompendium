﻿using PathfindersCompendium.Models;
using System.Collections.Generic;

namespace PathfindersCompendium.Repositories
{
    public interface ICharacterSheetRepository
    {
        Sheet GetSheetById(int id);
        List<Sheet> GetSheetsByUserId(int id);
    }
}