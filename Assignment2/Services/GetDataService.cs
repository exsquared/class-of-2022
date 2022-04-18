using Assignment2API.Repositories;
using Assignment2API.Models;
using Assignment2API.Models.ResultsRootModel;

namespace Assignment2API.Services
{
    public class GetDataService : IGetDataService
    {
        private readonly IGetDataRepo _repo;
        public GetDataService(IGetDataRepo repo)
        {
            this._repo = repo; 
        }
        public async Task<HomeDetailRootModel> GetHomeDetailServiceFunc(string homeId)
        {
            return await _repo.GetHomeDetailRepoFunc(homeId);            
        }
        
        public async Task<List<LocationRootModel>> GetLocationServiceFunc(string? searchText)
        {               
            return await _repo.GetLocationRepoFunc(searchText);            
        }

        public async Task<ResultsRootModel> GetResultsServiceFunc(ResultsRootInputModel body)
        {               
            ResultsRootModel result=  await _repo.GetResultsRepoFunc(body);
            return result;
        }
        
    }
}
