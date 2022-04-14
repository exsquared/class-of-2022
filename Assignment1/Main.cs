using System;
using System.Threading.Tasks;
using Newtonsoft.Json;
using ProjectFetch;
using RootObjectNamespace;
using GettingUserDataNamespace;

namespace FileAndShowNamespace
{
    
    class FetchAndShow:ProgramFetch
    {
        public static async void FetchData()
        {
            Console.WriteLine("Do you want to fetch API");
            string inputFromUser = Console.ReadLine().Trim();
            if (inputFromUser == "Y" || inputFromUser == "y")
            {                
                string URL = "https://sprint-api.homluv.com/api/v3HomeDetail/p1483576";
                string jsonstring =  FetchJSONData(URL).Result;
                //string jsonstring = await FetchJSONData(URL);
                Dictionary<string, object> result = new Dictionary<string, object>();
                RootObject robj = JsonConvert.DeserializeObject<RootObject>(jsonstring);
                result.Add("homeId", robj.homeDetail.homeId);
                result.Add("communityName", robj.homeDetail.communityName);
                result.Add("homeName", robj.homeDetail.homeName);
                result.Add("marketName", robj.homeDetail.marketName);
                Print(result);                
            }
        }
    }
}
