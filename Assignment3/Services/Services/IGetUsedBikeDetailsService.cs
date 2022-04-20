using WebAPIApplication4.Models;

namespace WebAPIApplication4.Services
{
    public interface IGetUsedBikeDetailsService
    {
        public IEnumerable<UsedBikeDetailsModel> GetUsedBikeDataServiceFunc(int page_no, int pageSize);
        public IEnumerable<string> CheapestBikeByBrandServiceFunc(string brand_name);
        public IEnumerable<string> AllCityNamesServiceFunc();
        public  Task<string> GetCoordinatesOfCityServiceFuncAsync(string city);
    }
}
