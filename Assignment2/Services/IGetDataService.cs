using Assignment2API.Models;

namespace Assignment2API.Services
{
    public interface IGetDataService
    {
        Task<HomeDetailRootModel> GetHomeDetailServiceFunc(string homeId);

        Task<List<LocationRootModel>> GetLocationServiceFunc(string? searchText);
        
        Task<dynamic> GetResultsServiceFunc(ResultsRootInputModel body);
    }
}
