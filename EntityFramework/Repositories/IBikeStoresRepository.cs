using SqlDatabaseFirst.Models;

namespace SqlDatabaseFirst.Repositories
{
    public interface IBikeStoresRepository
    {
        List<Customer> GetAllCustomersFromDb();
        List<Customer> GetCustomerById(int id);
        int AddCustomerToDb(string fname,
            string lname,
            string? phone,
            string email,
            string? street,
            string? city,
            string? state,
            string? zip);
        void DeleteCustomerById(int id);
        Task<IEnumerable<View1>> GetDataFromView();
    }
}