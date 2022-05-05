using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JwtWebApi.Models;

namespace JwtWebApi.UtilityLibrary
{
    public class Utility
    {
        public static BikeDetailModel ParseRow(string row)
        {
            var columns = row.Split(',');
            return new BikeDetailModel()
            {
                Bike_name = columns[0],
                Price = float.Parse(columns[1]),
                City = columns[2],
                Kms_driven = float.Parse(columns[3]),
                Owner = columns[4],
                Age = float.Parse(columns[5]),
                Power = float.Parse(columns[6]),
                Brand = columns[7].ToUpper()
            };
        }
        public static UserModel Authenticate(string userName, string password)
        {
            var currentUser = UserPool.Users.FirstOrDefault(u => u.UserName == userName && u.Password == password);
            if (currentUser != null)
            {
                return currentUser;
            }
            return null;
        }
    }
}
