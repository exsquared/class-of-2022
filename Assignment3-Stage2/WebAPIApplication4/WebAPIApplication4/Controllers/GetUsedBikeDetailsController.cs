using Microsoft.AspNetCore.Mvc;
using WebAPIApplication4.Services;
using WebAPIApplication4.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Caching.Memory;
using CacheHelperLibrary;

namespace WebAPIApplication4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GetUsedBikeDetailsController : ControllerBase
    {
        private readonly IGetUsedBikeDetails _service;
        private readonly IMemoryCache _memoryCache;
        private readonly ICacheHelper _cacheHelper;

        public GetUsedBikeDetailsController(IGetUsedBikeDetails service,
                                            IMemoryCache memoryCache,
                                            ICacheHelper cacheHelper)
        {
            this._service = service;
            this._memoryCache = memoryCache;
            this._cacheHelper = cacheHelper;
        }

        [HttpGet]
        [Route("allbikes")]
        public IEnumerable<UsedBikeDetailsModel> GetUsedBikeDetailsControllerFunc(int pageSize, int pageNo)
        {
            var cacheKey = "allbikes";
            var isInCache = !_memoryCache.TryGetValue(cacheKey, out IEnumerable<UsedBikeDetailsModel> result);

            if (isInCache)
            {
                _cacheHelper.Add(cacheKey, _service.GetUsedBikeDataServiceFunc(pageSize, pageNo));
            }
            return _cacheHelper.Get(cacheKey);
        }

        [HttpGet]
        [Route("cheapestbikebybrand")]
        public IEnumerable<UsedBikeDetailsModel> CheapestBikeByBrandControllerFunc(string brandName)
        {
            var cacheKey = "cheapestbikebybrand";
            var isInCache = !_memoryCache.TryGetValue(cacheKey, out IEnumerable<UsedBikeDetailsModel> result);

            if (isInCache)
            {
                _cacheHelper.Add(cacheKey, _service.CheapestBikeByBrandServiceFunc(brandName));
            }
            return _cacheHelper.Get(cacheKey);
        }

        [HttpGet]
        [Route("allcityname")]
        public IEnumerable<string> AllCityNamesControllerFunc()
        {
            var cacheKey = "cheapestbikebybrand";
            var isInCache = !_memoryCache.TryGetValue(cacheKey, out IEnumerable<UsedBikeDetailsModel> result);

            if (isInCache)
            {
                _cacheHelper.Add(cacheKey, _service.AllCityNamesServiceFunc());
            }
            return _cacheHelper.Get(cacheKey);
        }

        [HttpGet]
        [Route("coordinates")]
        public async Task<string> GetCoordinatesOfCityControllerFuncAsync(string city)
        {
            return await _service.GetCoordinatesOfCityServiceFuncAsync(city);
        }
    }
}
