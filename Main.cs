using System;
using System.IO;
//using System.Text.RegularExpressions;
using Newtonsoft.Json;
using ProjectFetch;
using RootObjectNamespace;
using GettingUserDataNamespace;

namespace FileAndShowNamespace
{
    
    class FetchAndShow:ProgramFetch
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
}
