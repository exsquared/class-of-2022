using AuthenticationNamespace;
using FetchAPINamespace;
using GettingUserDataNamespace;

namespace MainClassNamespace
{
    class MainClass 
    {
        public static void Main(string[] args)
        {
            string path = "C:\\Users\\lsingh\\Desktop\\cricket.txt";
            StreamReader? streamReaderObj;
            FileStream? fileReaderObj;
            if (File.Exists(path))
            {
                fileReaderObj = new FileStream(path, FileMode.Open);
                streamReaderObj = new StreamReader(fileReaderObj);
            }
            else
            {
                throw new FileNotFoundException("Path provided might be wrong");
            }

            GettingUserData userDataObj = new GettingUserData();
            Dictionary<string, string> userData = userDataObj.GetDataFromUser();
            if (Authentication.Authenticate(streamReaderObj, userData))
            {
                FetchAPI.FetchAPIData();               
            };

            streamReaderObj.Close();
            fileReaderObj.Close();
        }
    }
    
}
