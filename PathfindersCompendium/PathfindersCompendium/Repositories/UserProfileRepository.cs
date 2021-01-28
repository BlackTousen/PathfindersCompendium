﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Repositories
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<UserProfile> GetProfiles()
        {
            return _context.UserProfile
                .Include(up => up.UserType)
                .Include(up => up.Post)
                .OrderBy(up => up.DisplayName)
                .ToList();
        }
        public UserProfile GetProfileById(int id)
        {
            return _context.UserProfile
                .Include(up => up.UserType)
                .Include(up => up.Post)
                .FirstOrDefault(up => up.Id == id);
        }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                .Include(up => up.UserType)
                .Include(up => up.Post)
                .FirstOrDefault(up => up.FirebaseUserId == firebaseUserId);

        }

        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }
        public void Update(UserProfile userProfile)
        {
            _context.Entry(userProfile).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public int AdminCount()
        {
            return _context.UserProfile
                .Where(up => up.UserTypeId == 1)
                .Where(up => up.UserStatusId == 1)
                .Count();
        }
    }
}
