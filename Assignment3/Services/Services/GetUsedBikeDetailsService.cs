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

        public IEnumerable<UsedBikeDetailsModel> CheapestBikeByBrandServiceFunc(string brandName)
        {
            return _repo.CheapestBikeByBrandRepoFunc()
                  .Where(bike => bike.Brand.ToLower() == brandName.ToLower())
                  .OrderBy(bike => bike.Price)
<<<<<<< HEAD
=======
                  .Select(bike => $"Bike Name : { bike.Bike_name } Price :  { bike.Price }")
>>>>>>> 29a90a97e56143da7f59409abbf3c3ab95541314
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
            if (result.Count >= 1)
                return $"Latitude : {result[0].Lat}\nLongitude : {result[0].Lon}";
            else
                return "{-1, -1}";
        }
    }
}
