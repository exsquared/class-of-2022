using System;
using System.Collections.Generic;

namespace GettingUserDataNamespace
{
    class GettingUserData
    {
        public string User; 
        public string username { set; get; }
        public string password { set; get; }
        internal Dictionary<string, string> GetDataFromUser()
        {   
            Dictionary<string, string> userData = new Dictionary<string, string>();
            Console.WriteLine("Enter Username:");
            username = Console.ReadLine().Trim();
            Console.WriteLine("Enter Password: ");
            password = Console.ReadLine().Trim();
            userData.Add("username", username);
            userData.Add("password", password);
            return userData;
        }
    }
}
