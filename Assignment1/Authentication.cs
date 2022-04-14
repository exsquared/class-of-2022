namespace AuthenticationNamespace
{
    class Authentication
    {
        public static bool Authenticate(StreamReader streamObj, Dictionary<string, string> userData)
        {
            bool isUserCorrect = false;
            bool isPswCorrect = false;
            bool doesUserExists = false;
            string line;
            while ((line = streamObj.ReadLine()) != null)
            {
                string[] lineList = line.Split('"');
                if (line.Contains("username") || line.Contains("Username"))
                {
                    isUserCorrect = false;
                    if (userData["username"] == lineList[3])
                    {
                        isUserCorrect = true;
                    }
                }
                if ((line.Contains("password") || line.Contains("Password")))
                {
                    isPswCorrect = false;
                    if (userData["password"] == lineList[3])
                    {
                        isPswCorrect = true;
                    }
                    if (isUserCorrect && isPswCorrect)
                    {
                        Console.WriteLine("Login Successful.");
                        doesUserExists = true;
                        break;
                    }
                    else if (!isUserCorrect && isPswCorrect)
                    {
                        Console.WriteLine("Wrong Username.");
                        break;
                    }
                    else if (isUserCorrect && !isPswCorrect)
                    {
                        Console.WriteLine("Wrong Password.");
                        break;
                    }
                }
            }
            if (!isUserCorrect && !isPswCorrect)
            {
                Console.WriteLine("Wrong Username and Password.");
            }
            if (doesUserExists)
            {
                return true;
            }
            return false;
        }
    }
}
