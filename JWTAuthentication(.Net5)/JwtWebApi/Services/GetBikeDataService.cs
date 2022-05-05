using System.Collections.Generic;
using System.Linq;
using JwtWebApi.Models;
using JwtWebApi.Repositories;

namespace JwtWebApi.Services
{
    public class GetBikeDataService : IGetBikeDataService
    {
        private readonly IGetBikeData _repo;
        public GetBikeDataService(IGetBikeData repo)
        {
            _repo = repo;
        }
        public IEnumerable<BikeDetailModel> GetUsedBikeDataServiceFunc(int pageSize, int pageNo)
        {
            if (_repo.ReturnCSVFileData()?.Count < (pageNo * pageSize))
            {
                return System.Array.Empty<BikeDetailModel>(); ;
            }
            return _repo.ReturnCSVFileData()
                .Skip(pageSize * (pageNo - 1))
                .Take(pageSize)
                .ToList();
        }

        public IEnumerable<BikeDetailModel> CheapestBikeByBrandServiceFunc(string brandName)
        {
            brandName = brandName.ToUpper();
            return _repo.ReturnCSVFileData()
                  .Where(bike => bike.Brand == brandName)
                  .OrderBy(bike => bike.Price)
                  .Take(1)
                  .ToList();
        }

        public IEnumerable<string> AllCityNamesServiceFunc()
        {
            return _repo.ReturnCSVFileData()
                .Select(bike => bike.City)
                .Distinct()
                .ToList();
        }
    }
}
