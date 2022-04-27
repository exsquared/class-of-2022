namespace WebAPIApplication4.Services
{
    public interface IUserCredentialsCheck
    {
        bool ValidateCredentials(string username, string password);
    }
}