using WebAPIApplication4.Models;

namespace WebAPIApplication4.Repositories
{
    public interface IGetUsedBikeDetails
    {
        public List<UsedBikeDetailsModel> ReturnCSVFileData();
        public Task<List<GeocodingAPIModel>> GetCoordinatesOfCityRepoFuncAsync(string city);
    }
}
