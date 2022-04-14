using RestSharp;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Assignment2API.Repositories;

namespace Assignment2API.Services
{
    public class GetDataService : IGetDataService
    {
        private readonly IGetDataRepo repo;
        private readonly string url = "http://sprint-api.homluv.com/api/";
        public GetDataService(IGetDataRepo repo)
        {
            this.repo = repo;
        }
        public async Task<dynamic> GetHomeDetailServiceFunc(string homeId)
        {
            var client = new RestClient(url);
            var request = new RestRequest("V3HomeDetail/{homeId}", Method.Get);
            request.AddUrlSegment("homeId", homeId);
            return await repo.GetHomeDetailRepoFunc(homeId, client, request);
            
        }
        
        public async Task<dynamic> GetLocationServiceFunc(string searchText)
        {            
            var client = new RestClient(url);
            var request = new RestRequest("V3Search/location", Method.Get);
            if (!string.IsNullOrEmpty(searchText))
            {
                request.AddQueryParameter("searchtext", searchText);
            }
            return await repo.GetLocationRepoFunc(searchText, client, request);
            
        }

        public async Task<dynamic> GetResultsServiceFunc(string body)
        {            
            var client = new RestClient(url);
            var request = new RestRequest("V3Search/Results", Method.Post);
            request.AddStringBody(body, DataFormat.Json);
            return await repo.GetResultsRepoFunc(body, client, request);
        }
        
    }
}
