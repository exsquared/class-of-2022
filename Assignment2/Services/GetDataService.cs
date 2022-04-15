using RestSharp;
using Assignment2API.Repositories;
using Assignment2API.Models;

namespace Assignment2API.Services
{
    public class GetDataService : IGetDataService
    {
        private readonly IGetDataRepo repo;

        public GetDataService(IGetDataRepo repo)
        {
            this.repo = repo;
        }

        public async Task<HomeDetailRootModel> GetHomeDetailServiceFunc(string homeId)
        {            
            return await repo.GetHomeDetailRepoFunc(homeId);            
        }
        
        public async Task<List<LocationRootModel>> GetLocationServiceFunc(string? searchText)
        {               
            return await repo.GetLocationRepoFunc(searchText);            
        }

        public async Task<dynamic> GetResultsServiceFunc(ResultsRootInputModel body)
        {               
            return await repo.GetResultsRepoFunc(body);
        }
        
    }
}
