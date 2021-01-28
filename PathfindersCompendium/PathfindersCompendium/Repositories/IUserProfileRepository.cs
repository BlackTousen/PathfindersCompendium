using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathfindersCompendium.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetProfiles();
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        void Update(UserProfile userProfile);
        int AdminCount();
    }
}
