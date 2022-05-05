using JwtWebApi.Models;
using System.Collections.Generic;

namespace JwtWebApi.Services
{
    public interface IGetBikeDataService
    {
        IEnumerable<BikeDetailModel> GetUsedBikeDataServiceFunc(int pageSize, int pageNo);

        IEnumerable<BikeDetailModel> CheapestBikeByBrandServiceFunc(string brandName);

        IEnumerable<string> AllCityNamesServiceFunc();
    }
}