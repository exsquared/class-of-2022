using Newtonsoft.Json;


namespace Project
{
    class RootObject
    {
        [JsonProperty("homeDetail")]
        public HomeDetailResponse HomeDetail { get; set; }
    }
    class HomeDetailResponse
    {
        [JsonProperty("homeId")]
        public int homeId { get; set; }
        [JsonProperty("commName")]
        public string communityName { get; set; }
        [JsonProperty("planName")]
        public string homeName { get; set; }
        [JsonProperty("marketName")]
        public string marketName { get; set; }
    }
    class Program
    {
        static Dictionary<string, object> result = new Dictionary<string, object>();
        public static async Task Main(string[] args)
        {
            string URL = "https://sprint-api.homluv.com/api/v3HomeDetail/p1483576";
            string jsonstring = await FetchJSONData(URL);
            
            RootObject robj = JsonConvert.DeserializeObject<RootObject>(jsonstring);
            
            result.Add("homeId", robj.HomeDetail.homeId);
            result.Add("communityName", robj.HomeDetail.communityName);
            result.Add("homeName", robj.HomeDetail.homeName);
            result.Add("marketName", robj.HomeDetail.marketName);
 
            //Dictionary<string, object> finalResult = Iterate(hd);
            Print(result);
        }
       
        protected static async Task<string> FetchJSONData(string URL)
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetStringAsync(URL);
                //Console.WriteLine(response);
                return response;
            }
        }
        //protected static Dictionary<string, object> Iterate(dynamic variable1)
        //{
        //    //Dictionary<string, object> result = new Dictionary<string, object>();
        //    if (variable1.GetType() == typeof(Newtonsoft.Json.Linq.JObject))
        //    {
        //        foreach (var property in variable1)
        //        {
        //            //Console.WriteLine(property.Name);
        //            if (property.Name.Equals("homeId"))
        //            {
        //                //Console.WriteLine(property.Name + " : " + property.Value);
        //                result.Add(property.Name, property.Value);
        //            }
        //            else if (property.Name.Equals("commName"))
        //            {
        //                result.Add("communityName", property.Value);
        //            }
        //            else if (property.Name.Equals("planName"))
        //            {
        //                result.Add("homeName", property.Value);
        //            }
        //            else if (property.Name.Equals("marketName"))
        //            {
        //                result.Add(property.Name, property.Value);
        //            }
        //            if (property.Value.GetType() == typeof(Newtonsoft.Json.Linq.JObject))
        //            {
        //                Iterate(property.Value);
        //            }
        //        }
        //    }
        //    return result;
        //}
        protected static void Print(Dictionary<string, object> dict)
        {
            foreach (var item in dict)
            {
                Console.WriteLine(item.Key + " : " + item.Value);
            }
        }
    }
}
