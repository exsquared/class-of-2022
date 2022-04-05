using System;
using System.IO;
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
            bool isUserCorrect = false;
            bool isPswCorrect = false;
            bool userExists = false;

            string line = "";
            while ((line = s.ReadLine()) != null)
            {
                string[] lineList = line.Split('"');
                if (line.Contains("username") || line.Contains("Username"))
                {
                    isUserCorrect = false;
                    if (obj.username == lineList[3])
                    {
                        isUserCorrect = true;
                    }
                }
                if ((line.Contains("password") || line.Contains("Password")))
                {   
                    isPswCorrect = false;
                    if (obj.password == lineList[3])
                    {
                        isPswCorrect = true;
                    }
                    if (isUserCorrect && isPswCorrect)
                    {
                        Console.WriteLine("Login Successful.");
                        userExists = true;
                        break;
                    }
                    else if (!isUserCorrect && isPswCorrect)
                    {
                        Console.WriteLine("Wrong Username.");
                        break;
                    }
                    else if (isUserCorrect && !isPswCorrect)
                    {
                        Console.WriteLine("Wrong Password.");
                        break;
                    }
                }
            }
            if (!isUserCorrect && !isPswCorrect)
            {
                Console.WriteLine("Wrong Username and Password.");
            }
            s.Close();
            f.Close();
            if (userExists)
            {
                FetchAndShow.FetchData();
            }
        }
    }
}
