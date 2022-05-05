using Microsoft.AspNetCore.Mvc;
using JwtWebApi.Services;
using JwtWebApi.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;

namespace JwtWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GetBikeDetailController : ControllerBase
    {
        private readonly IGetBikeDataService _service;
        
        public GetBikeDetailController(IGetBikeDataService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("bikesbypage")]
        public IEnumerable<BikeDetailModel> GetUsedBikeDetailsControllerFunc(int pageSize, int pageNo)
        {
            return _service.GetUsedBikeDataServiceFunc(pageSize, pageNo);
        }

        [HttpGet]
        [Route("cheapestbikebybrand")]

        public IEnumerable<BikeDetailModel> CheapestBikeByBrandControllerFunc(string brandName)
        {
            return _service.CheapestBikeByBrandServiceFunc(brandName);
        }

        [HttpGet]
        [Route("allcityname")]
        public IEnumerable<string> AllCityNamesControllerFunc()
        {
            return _service.AllCityNamesServiceFunc();
        }
    }
}
