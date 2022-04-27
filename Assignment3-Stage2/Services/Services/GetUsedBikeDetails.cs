using WebAPIApplication4.Models;

namespace WebAPIApplication4.Services
{
    public class GetUsedBikeDetails : IGetUsedBikeDetails
    {

        private readonly Repositories.IGetUsedBikeDetails _repo;

        public GetUsedBikeDetails(Repositories.IGetUsedBikeDetails repo)
        {
            this._repo = repo;
        }

        public IEnumerable<UsedBikeDetailsModel> GetUsedBikeDataServiceFunc(int pageSize, int pageNo)
        {
            if (_repo.ReturnCSVFileData()?.Count < (pageNo * pageSize))
            {
                return new UsedBikeDetailsModel[0];;
            }
            return _repo.ReturnCSVFileData()
                .Skip(pageSize * (pageNo - 1))
                .Take(pageSize);            
        }

        public IEnumerable<UsedBikeDetailsModel> CheapestBikeByBrandServiceFunc(string brandName)
        {
            brandName = brandName.ToUpper();
            return _repo.ReturnCSVFileData()
                  .Where(bike => bike.Brand == brandName)
                  .OrderBy(bike => bike.Price)
                  .Take(1);
        }

        public IEnumerable<string> AllCityNamesServiceFunc()
        {
            return _repo.ReturnCSVFileData()
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
