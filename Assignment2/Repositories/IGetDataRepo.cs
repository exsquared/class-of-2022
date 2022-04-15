using RestSharp;
using Assignment2API.Models;

namespace Assignment2API.Repositories
{
    public interface IGetDataRepo
    {
        Task<HomeDetailRootModel> GetHomeDetailRepoFunc(string homeId);
        Task<List<LocationRootModel>> GetLocationRepoFunc(string? searchText);
        Task<dynamic> GetResultsRepoFunc(ResultsRootInputModel body);
    }
}
