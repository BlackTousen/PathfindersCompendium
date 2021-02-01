using Microsoft.EntityFrameworkCore;
using PathfindersCompendium.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<Sheet> Sheet { get; set; }
        public DbSet<Feat> Feat { get; set; }
        public DbSet<Spell> Spell { get; set; }
        public DbSet<Class> Class { get; set; }
    }
}
