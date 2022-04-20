using WebAPIApplication4.Models;
using RestSharp;
using Newtonsoft.Json;
using UtilityLibrary;
using System.Net;

namespace WebAPIApplication4.Repositories
{
    public class GetUsedBikeDetailsRepo : IGetUsedBikeDetailsRepo
    {
        private readonly string _path = @"C:\Users\lsingh\Downloads\Used_Bikes.csv\Used_Bikes.csv";
        private readonly string _api = "https://us1.locationiq.com/v1/";

        public List<UsedBikeDetailsModel> ReturnCSVFileData(string url)
        {
            if (File.Exists(_path))
            {
                return File.ReadAllLines(url)
                    .Skip(1)
                    .Where(row => row.Length > 0)
                    .Select(Utility.ParseRow)
                    .ToList();
            }
            else
            {
                throw new FileNotFoundException("File Not Found.\nPlease check path");
            }
        }

        public List<UsedBikeDetailsModel> ReadCSVFileRepoFunc()
        {
            return ReturnCSVFileData(_path);
        }

        public List<UsedBikeDetailsModel> CheapestBikeByBrandRepoFunc()
        {
            return ReturnCSVFileData(_path);
        }

        public List<UsedBikeDetailsModel> AllCityNamesRepoFunc()
        {
            return ReturnCSVFileData(_path);
        }

        public async Task<List<GeocodingAPIModel>> GetCoordinatesOfCityRepoFuncAsync(string city)
        {
            var client = new RestClient(_api);
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
                catch (JsonSerializationException)
                {
                    return new List<GeocodingAPIModel>();
                }
            }
            else 
            {
                throw new Exception("Not Found"); 
            }
            
        }        
    }
}
