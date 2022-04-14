using Microsoft.AspNetCore.Mvc;
using Assignment2API.Repositories;
using Assignment2API.Services;

namespace WebAPIApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetDataController : ControllerBase
    {
        private readonly IGetDataService service;

        public GetDataController(IGetDataService service)
        {
            this.service = service;
        }
        [HttpGet("{homeId}")]
        public async Task<dynamic> GetHomeDetailControllerFunc(string homeId)
        {
            return await service.GetHomeDetailServiceFunc(homeId);    
        }

        [HttpGet("searchText")]
        public async Task<dynamic> GetLocationControllerFunc(string searchText)
        {
            return await service.GetLocationServiceFunc(searchText);
        }

        [HttpPost("body")]
        public async Task<dynamic> GetResultsControllerFunc(string body)
        {
            return await service.GetResultsServiceFunc(body);
        }
         
    }
}