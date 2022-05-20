using Microsoft.EntityFrameworkCore;
using SqlDatabaseFirst.Models;

namespace SqlDatabaseFirst.Repositories
{
    public class BikeStoresRepository : IBikeStoresRepository
    {

        private readonly BikeStoresContext _dbContext;

        public BikeStoresRepository(BikeStoresContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        public List<Customer>? GetAllCustomersFromDb()
        {
            var customers = _dbContext.Customers.FromSqlRaw("BikeStores.dbo.GetAllCustomers").ToList();
            return customers.Count <= 0 ? null : customers;
        }

        public List<Customer> GetCustomerById(int id)
        {
            var customers = _dbContext.Customers.FromSqlRaw($"BikeStores.dbo.GetCustomerByID {id}").ToList();
            return customers.Count <= 0 ? null : customers;
        }

        public int AddCustomerToDb(
            string fname,
            string lname,
            string phone,
            string email,
            string street,
            string city,
            string state,
            string zip)
        {
            //var id = _dbContext.Customers.FromSqlRaw(
            //    "BikeStores.dbo.AddCustomer {0},{1},{2},{3},{4},{5},{6},{7}",
            //    fname, lname, phone, email, street, city, state, zip);
            //_dbContext.SaveChanges();

            var id = _dbContext.Customers.OrderByDescending(c => c.CustomerId)
                                         .Select(c => c.CustomerId)
                                         .FirstOrDefault();

            return id;//.AsEnumerable().Select(c => c.CustomerId);
        }

        public async void DeleteCustomerById(int id)
        {
            _dbContext.Database.ExecuteSqlRaw($"BikeStores.dbo.DeleteCustomerById {id}");
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<View1>> GetDataFromView()
        {
            var db = await _dbContext.View1s.ToListAsync();
            return db;
            //return _dbContext.View1s.AsQueryable().Select(c => c);
            //var dataFromView = _dbContext.View_1.FromSqlRaw($"SELECT * FROM [BikeStores].[dbo].[View_1]").ToList();
            //return (dataFromView.Count <= 0) ? null : dataFromView;
        }
    }
}