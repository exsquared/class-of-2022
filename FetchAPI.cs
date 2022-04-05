using System;
using System.IO;
using System.Threading.Tasks;
using System.Collections.Generic;


namespace ProjectFetch
{    
    public class ProgramFetch
    {    
        protected static async Task<string> FetchJSONData(string URL)
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetStringAsync(URL);
                return response;
            }
        }

        protected static void Print(Dictionary<string, object> dict)
        {
            foreach (var item in dict)
            {
                Console.WriteLine(item.Key + " : " + item.Value);
            }
        }
    }
}
