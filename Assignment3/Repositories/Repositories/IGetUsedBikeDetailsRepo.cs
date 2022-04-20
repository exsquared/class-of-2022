using WebAPIApplication4.Models;

namespace WebAPIApplication4.Repositories
{
    public interface IGetUsedBikeDetailsRepo
    {
        //public UsedBikeDetailsModel ParseRow(string row);
        public List<UsedBikeDetailsModel> ReadCSVFileRepoFunc();
        public List<UsedBikeDetailsModel> CheapestBikeByBrandRepoFunc();
        public List<UsedBikeDetailsModel> AllCityNamesRepoFunc();
        public Task<List<GeocodingAPIModel>> GetCoordinatesOfCityRepoFuncAsync(string city);
    }
}
