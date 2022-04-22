using Microsoft.AspNetCore.Mvc;
using WebAPIApplication4.Services;
using WebAPIApplication4.Models;

namespace WebAPIApplication4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetUsedBikeDetailsController : ControllerBase
    {
        private readonly IGetUsedBikeDetails _service;

        public GetUsedBikeDetailsController(IGetUsedBikeDetails service)
        {
            this._service = service;
        }

        [HttpGet]
        [Route("allbikes")]
        public IEnumerable<UsedBikeDetailsModel> GetUsedBikeDetailsControllerFunc(int pageSize, int pageNo)
        {
            var result = _service.GetUsedBikeDataServiceFunc(pageSize, pageNo);
            return result;
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
        [Route("coordinates")]
        public async Task<string> GetCoordinatesOfCityControllerFuncAsync(string city)
        {
            return await _service.GetCoordinatesOfCityServiceFuncAsync(city);
        }

    }
}
