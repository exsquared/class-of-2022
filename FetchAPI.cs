using Newtonsoft.Json;
using FetchAndPrintNamespace;
using RootObjectNamespace;


namespace FetchAPINamespace
{
    class FetchAPI
    {
        public static async void FetchAPIData()
        {
            Console.WriteLine("Do you want to fetch API?\nPress Y.");
            string inputFromUser = Console.ReadLine().Trim();
            if (inputFromUser == "Y" || inputFromUser == "y")
            {                
                string url = "https://sprint-api.homluv.com/api/v3HomeDetail/p1483576";
                string jsonstring =  FetchAndPrint.FetchJSONData(url).Result;
                //string jsonstring = await FetchJSONData(URL);
                RootObject? robj = new();
                Dictionary<string, object> result = new();
                if (jsonstring != null)
                {
                    robj = JsonConvert.DeserializeObject<RootObject>(jsonstring);
                }
                result.Add("homeId", robj.homeDetail.homeId);
                result.Add("communityName", robj.homeDetail.communityName);
                result.Add("homeName", robj.homeDetail.homeName);
                result.Add("marketName", robj.homeDetail.marketName);
                FetchAndPrint.Print(result);               
            }
            else
            {
                Console.WriteLine("OK");
            }
        }
    }
}
