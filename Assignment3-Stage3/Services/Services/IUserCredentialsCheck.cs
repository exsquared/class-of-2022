namespace WebAPIApplication4.Services
{
    public interface IUserCredentialsCheck
    {
        bool IsValidCredentials(string username, string password);
    }
}