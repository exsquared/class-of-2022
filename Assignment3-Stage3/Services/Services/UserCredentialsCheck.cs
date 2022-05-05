namespace WebAPIApplication4.Services
{
    public class UserCredentialsCheck : IUserCredentialsCheck
    { 
        public bool IsValidCredentials(string username, string password)
        {
            return username.Equals("lalit") && password.Equals("1234");
        }
    }

    
}
