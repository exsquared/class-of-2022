using Assignment2API.Models;
using Assignment2API.Models.ResultsRootModel;

namespace Assignment2API.Repositories
{
    public interface IGetDataRepo
    {
        Task<HomeDetailRootModel> GetHomeDetailRepoFunc(string homeId);
        Task<List<LocationRootModel>> GetLocationRepoFunc(string? searchText);
        Task<ResultsRootModel> GetResultsRepoFunc(ResultsRootInputModel body);
    }
}
