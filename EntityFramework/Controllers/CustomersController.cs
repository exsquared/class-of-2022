using Microsoft.AspNetCore.Mvc;
using SqlDatabaseFirst.Models;
using SqlDatabaseFirst.Repositories;


namespace SqlDatabaseFirst.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IBikeStoresRepository _bikeStore;
        public CustomersController(IBikeStoresRepository bikeStore)
        {
            _bikeStore = bikeStore;
        }

        // GET: api/<CustomersController>
        [HttpGet("getcustomer")]
        public List<Customer> GetCustomer()
        {
            return _bikeStore.GetAllCustomersFromDb();
        }

        // GET api/<CustomersController>/5
        [HttpGet("getcustomerbyid")]
        public List<Customer> GetCustomerById(int id)
        {
            return _bikeStore.GetCustomerById(id);
        }

        //POST api/<CustomersController>
        [HttpPost("addcustomer")]
        public int AddCustomer(string fname,
                                string lname,
                                string? phone,
                                string email,
                                string? street,
                                string? city,
                                string? state,
                                string? zip)
        {
            var customerId = _bikeStore.AddCustomerToDb(fname, lname, phone, email, street, city, state, zip);
            return customerId;
        }        

        // delete api/<customerscontroller>/5
        [HttpDelete("deletecustomer")]
        public void DeleteCustomer(int id)
        {
            _bikeStore.DeleteCustomerById(id);
        }

        [HttpGet("fromview")]
        public Task<IEnumerable<View1>> GetDataFromView()
        {
            return _bikeStore.GetDataFromView();
        }
    }
}
