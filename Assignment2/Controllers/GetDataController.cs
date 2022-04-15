using Microsoft.AspNetCore.Mvc;
using Assignment2API.Services;
using Assignment2API.Models;

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

        /// <summary>
        /// Retrieves home Detail for a specific homeId
        /// </summary>      
        [HttpGet("{homeId}")]
        public async Task<HomeDetailRootModel> GetHomeDetailControllerFunc(string homeId)
        {
            return await service.GetHomeDetailServiceFunc(homeId);    
        }

        /// <summary>
        /// Retrieves location info for a specific searchtext
        /// </summary>
        [HttpGet("searchText")]
        public async Task<List<LocationRootModel>> GetLocationControllerFunc(string? searchText)
        {
            return await service.GetLocationServiceFunc(searchText);
        }

        /// <summary>
        /// Post Request with a body
        /// </summary>
        [HttpPost("body")]
        public async Task<dynamic> GetResultsControllerFunc(ResultsRootInputModel body)
        {
            return await service.GetResultsServiceFunc(body);
        }
         
    }
}