using Microsoft.AspNetCore.Mvc;
using WebAPIApplication4.Services;
using WebAPIApplication4.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Caching.Memory;

namespace CachingAPI
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    [Caching]
    public class GetUsedBikeDetailsController : ControllerBase
    {
        private readonly IGetUsedBikeDetails _service;
        private readonly IMemoryCache _memoryCache;


        public GetUsedBikeDetailsController(IGetUsedBikeDetails service,
                                             IMemoryCache memoryCache)
        {
            _service = service;
            _memoryCache = memoryCache;
        }

        [HttpGet]
        [Route("bikesbypage")]
        public IEnumerable<UsedBikeDetailsModel> GetUsedBikeDetailsControllerFunc(int pageSize, int pageNo)
        {
            return _service.GetUsedBikeDataServiceFunc(pageSize, pageNo);
        }

        [HttpGet]
        [Route("cheapestbikebybrand")]
        
        public IEnumerable<UsedBikeDetailsModel> CheapestBikeByBrandControllerFunc(string brandName)
        {
            return _service.CheapestBikeByBrandServiceFunc(brandName);                
        }

        [HttpGet]
        [Route("allcityname")]
        public IEnumerable<string> AllCityNamesControllerFunc()
        {
            return _service.AllCityNamesServiceFunc();
        }

        [HttpGet]
        [Route("coordinates/{city}")]
        public async Task<string> GetCoordinatesOfCityControllerFuncAsync(string city)
        {
            return await _service.GetCoordinatesOfCityServiceFuncAsync(city);
        }
    }
}
