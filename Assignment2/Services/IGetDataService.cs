namespace Assignment2API.Services
{
    public interface IGetDataService
    {
        Task<dynamic> GetHomeDetailServiceFunc(string homeId);
        Task<dynamic> GetLocationServiceFunc(string searchText);
        Task<dynamic> GetResultsServiceFunc(string body);
    }
}
