namespace FetchAndPrintNamespace
{
    class FetchAndPrint
    {    
        internal static async Task<string> FetchJSONData(string URL)
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetStringAsync(URL);
                return response;
            }
        }

        internal static void Print(Dictionary<string, object> dict)
        {
            foreach (var item in dict)
            {
                Console.WriteLine(item.Key + " : " + item.Value);
            }
        }
    }
}
