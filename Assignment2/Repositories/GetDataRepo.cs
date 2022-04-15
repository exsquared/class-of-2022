using RestSharp;
using Newtonsoft.Json;
using Assignment2API.Models;

namespace Assignment2API.Repositories
{
    public class GetDataRepo : IGetDataRepo
    {
        private readonly string url = "http://sprint-api.homluv.com/api/";

        public async Task<HomeDetailRootModel> GetHomeDetailRepoFunc(string homeId)
        {
            var client = new RestClient(url);
            var request = new RestRequest("V3HomeDetail/{homeId}", Method.Get);
            request.AddUrlSegment("homeId", homeId);
            var response = await client.ExecuteAsync(request);
            string? result = response?.Content;
            return JsonConvert.DeserializeObject<HomeDetailRootModel>(result);
        }

        public async Task<List<LocationRootModel>> GetLocationRepoFunc(string? searchText)
        {
            var client = new RestClient(url);
            var request = new RestRequest("V3Search/location", Method.Get);            
            request.AddQueryParameter("searchtext", searchText);            
            var response = await client.ExecuteAsync(request);
            string? result = response?.Content;
            return JsonConvert.DeserializeObject<List<LocationRootModel>>(result);
        }

        public async Task<dynamic> GetResultsRepoFunc(ResultsRootInputModel body)
        {
            var client = new RestClient(url);
            var request = new RestRequest("V3Search/Results", Method.Post);
            request.AddBody(body);
            var response = await client.ExecuteAsync(request);
            string? result = response?.Content;
            return JsonConvert.DeserializeObject(result);
        }
    }
}
