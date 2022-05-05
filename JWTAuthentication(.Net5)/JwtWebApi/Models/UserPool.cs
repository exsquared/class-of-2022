using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JwtWebApi.Models
{
    public class UserPool
    {
        public static List<UserModel> Users = new List<UserModel>
        {
            new UserModel()
            { UserName="lalit", Email="lsingh@ex2india.com", Password="1234" },
            new UserModel()
            { UserName="munish", Email="mgarg@ex2india.com", Password="12345" }
        };
    }
}
