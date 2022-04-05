using System;
using System.IO;
//using System.Text.RegularExpressions;
using Newtonsoft.Json;
using ProjectFetch;
using RootObjectNamespace;

namespace FileReader
{
    class GettingUserData
    {
        public string username { set; get; }
        public string password { set; get; }
        public void GetData() { 
            Console.WriteLine("Enter Username:");
            username = Console.ReadLine().Trim();
            Console.WriteLine("Enter Password: ");
            password = Console.ReadLine().Trim();        
        }  
    }
    class Fetch:ProgramFetch
    {
        static Dictionary<string, object> result = new Dictionary<string, object>();
        public static async void FetchData()
        {
            Console.WriteLine("Do you want to fetch API");
            string inputFromUser = Console.ReadLine().Trim();

            if (inputFromUser == "Y" || inputFromUser == "y")
            {
                
                string URL = "https://sprint-api.homluv.com/api/v3HomeDetail/p1483576";
                string jsonstring =  FetchJSONData(URL).Result;
                //string jsonstring = await FetchJSONData(URL);
                RootObject robj = JsonConvert.DeserializeObject<RootObject>(jsonstring);
                result.Add("homeId", robj.HomeDetail.homeId);
                result.Add("communityName", robj.HomeDetail.communityName);
                result.Add("homeName", robj.HomeDetail.homeName);
                result.Add("marketName", robj.HomeDetail.marketName);
                Print(result);

                
            }
        }
    }
    class Authentication
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
                        break ;
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
                Fetch.FetchData();
            }
        }
    }
}
