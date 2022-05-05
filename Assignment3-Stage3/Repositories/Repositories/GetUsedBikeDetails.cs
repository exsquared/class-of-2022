using WebAPIApplication4.Models;
using RestSharp;
using Newtonsoft.Json;
using UtilityLibrary;
using System.Net;
using ConstantsLibrary;

namespace WebAPIApplication4.Repositories
{
    public class GetUsedBikeDetails : IGetUsedBikeDetails
    {        
        public List<UsedBikeDetailsModel> ReturnCSVFileData()
        {
            if (File.Exists(Constants._path) && string.Equals(Path.GetExtension(Constants._path),".csv"))
            {
                string[] csvFile = File.ReadAllLines(Constants._path);
                int numberOfColumns =csvFile[0].Split(",").Length;
                return csvFile
                    .Skip(1)
                    .Where(row => row.Split(",").Length == numberOfColumns)
                    .Select(Utility.ParseRow)
                    .ToList();
            }
            else
            {
                throw new Exception("File Not Found or Filetype is incorrect.");
            }
        }

        public async Task<List<GeocodingAPIModel>> GetCoordinatesOfCityRepoFuncAsync(string city)
        {
            var client = new RestClient(Constants._api);
            var request = new RestRequest("search.php?key=pk.7bc0fa2611a1f2286b75448e006a0d1f&format=json", Method.Get);
            request.AddQueryParameter("city", city);
            RestResponse response = await client.ExecuteAsync(request);
            HttpStatusCode statusCode = response.StatusCode;
            if (statusCode == HttpStatusCode.OK)
            {
                string result = response.Content;
                try
                {
                    return JsonConvert.DeserializeObject<List<GeocodingAPIModel>>(result);
                }
                catch(Exception)
                {
                    throw;
                }
            }
            else 
            {
                return new List<GeocodingAPIModel>(); 
            }            
        }        
    }
}
