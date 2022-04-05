using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GettingUserDataNamespace;
using FileAndShowNamespace;

namespace ConsoleApp2
{
    public class Authentication
    {
        public static void Main(string[] args)
        {
            FileStream f = new FileStream("C:\\Users\\lsingh\\Desktop\\cricket.txt", FileMode.Open);
            StreamReader s = new StreamReader(f);
            GettingUserData obj = new GettingUserData();
            obj.GetData();
            bool isusercorrect = false;
            bool ispswcorrect = false;
            bool userexists = false;

            string line = "";
            while ((line = s.ReadLine()) != null)
            {   //Console.WriteLine(line); 
                string[] linelist = line.Split('"');
                if (line.Contains("username") || line.Contains("Username"))
                {
                    isusercorrect = false;
                    //Console.WriteLine(linelist[3]);
                    if (obj.username == linelist[3])
                    {
                        isusercorrect = true;
                    }
                }
                if ((line.Contains("password") || line.Contains("Password")))
                {   //Console.WriteLine(linelist[3]);
                    ispswcorrect = false;
                    if (obj.password == linelist[3])
                    {
                        ispswcorrect = true;
                    }
                    if (isusercorrect && ispswcorrect)
                    {
                        Console.WriteLine("Login Successful.");
                        userexists = true;
                        break;
                    }
                    else if (!isusercorrect && ispswcorrect)
                    {
                        Console.WriteLine("Wrong Username.");
                        break;
                    }
                    else if (isusercorrect && !ispswcorrect)
                    {
                        Console.WriteLine("Wrong Password.");
                        break;
                    }
                }
            }
            if (!isusercorrect && !ispswcorrect)
            {
                Console.WriteLine("Wrong Username and Password.");
            }
            s.Close();
            f.Close();
            if (userexists)
            {
                FetchAndShow.FetchData();
            }
        }
    }
}
