using WebAPIApplication4.Models;

namespace WebAPIApplication4.Services
{
    public interface IGetUsedBikeDetails
    {
        public IEnumerable<UsedBikeDetailsModel> GetUsedBikeDataServiceFunc(int page_no, int pageSize);
        public IEnumerable<UsedBikeDetailsModel> CheapestBikeByBrandServiceFunc(string brand_name);
        public IEnumerable<string> AllCityNamesServiceFunc();
        public  Task<string> GetCoordinatesOfCityServiceFuncAsync(string city);
    }
}
