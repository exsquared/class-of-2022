using RestSharp;

namespace Assignment2API.Repositories
{
    public interface IGetDataRepo
    {
        Task<dynamic> GetHomeDetailRepoFunc(string homeId, RestClient client, RestRequest request);
        Task<dynamic> GetLocationRepoFunc(string searchText, RestClient client, RestRequest request);
        Task<dynamic> GetResultsRepoFunc(string body, RestClient client, RestRequest request);
    }
}
