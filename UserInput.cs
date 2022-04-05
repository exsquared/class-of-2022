using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GettingUserDataNamespace
{
    public class GettingUserData
    {
        public string username { set; get; }
        public string password { set; get; }
        public void GetData()
        {
            Console.WriteLine("Enter Username:");
            username = Console.ReadLine().Trim();
            Console.WriteLine("Enter Password: ");
            password = Console.ReadLine().Trim();
        }
    }
}
