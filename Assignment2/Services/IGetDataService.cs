using Assignment2API.Models;
using Assignment2API.Models.ResultsRootModel;

namespace Assignment2API.Services
{
    public interface IGetDataService
    {
        Task<HomeDetailRootModel> GetHomeDetailServiceFunc(string homeId);
        Task<List<LocationRootModel>> GetLocationServiceFunc(string? searchText);
        Task<ResultsRootModel> GetResultsServiceFunc(ResultsRootInputModel body);
    }
}
