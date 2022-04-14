using RestSharp;
using Newtonsoft.Json;

namespace Assignment2API.Repositories
{
    public class GetDataRepo : IGetDataRepo
    {
        public async Task<dynamic> GetHomeDetailRepoFunc(string homeId, RestClient client, RestRequest request)
        {              
            var response = await client.ExecuteAsync(request);
            string? result = response?.Content;
            return JsonConvert.DeserializeObject(result);
        }

        public async Task<dynamic> GetLocationRepoFunc(string searchText, RestClient client, RestRequest request)
        {            
            var response = await client.ExecuteAsync(request);
            string? result = response?.Content;
            return JsonConvert.DeserializeObject(result);
        }

        public async Task<dynamic> GetResultsRepoFunc(string searchText, RestClient client, RestRequest request)
        {
            var response = await client.ExecuteAsync(request);
            string? result = response?.Content;
            return JsonConvert.DeserializeObject(result);
        }
    }
}
