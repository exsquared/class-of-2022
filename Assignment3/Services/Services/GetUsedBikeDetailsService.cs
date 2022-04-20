using WebAPIApplication4.Repositories;
using WebAPIApplication4.Models;

namespace WebAPIApplication4.Services
{
    public class GetUsedBikeDetailsService : IGetUsedBikeDetailsService
    {

        private readonly IGetUsedBikeDetailsRepo _repo;

        public GetUsedBikeDetailsService(IGetUsedBikeDetailsRepo repo)
        {
            this._repo = repo;
        }

        public IEnumerable<UsedBikeDetailsModel> GetUsedBikeDataServiceFunc(int pageSize, int pageNo)
        {
            if (_repo.ReadCSVFileRepoFunc().Count() < (pageNo * pageSize))
            {
                return new UsedBikeDetailsModel[0];;
            }
            return _repo.ReadCSVFileRepoFunc()
                .Skip(pageSize * (pageNo - 1))
                .Take(pageSize);
            
        }
        public IEnumerable<string> CheapestBikeByBrandServiceFunc(string brandName)
        {
            return _repo.CheapestBikeByBrandRepoFunc()
                  .Where(bike => bike.Brand == brandName)
                  .OrderBy(bike => bike.Price)
                  .Select(bike => bike.Bike_name)
                  .Take(1);
        }
        public IEnumerable<string> AllCityNamesServiceFunc()
        {
            return _repo.AllCityNamesRepoFunc()
                .Select(bike => bike.City)
                .Distinct();
        }

        public async Task<string> GetCoordinatesOfCityServiceFuncAsync(string city)
        {
            List<GeocodingAPIModel> result =  await _repo.GetCoordinatesOfCityRepoFuncAsync(city);
            //return result;
            if (result.Count > 2)
                return $"Latitude : {result[0].Lat}\nLongitude : {result[0].Lon}";
            else
                return "{-1, -1}";
        }

    }
}
