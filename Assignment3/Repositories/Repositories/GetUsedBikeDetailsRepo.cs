using WebAPIApplication4.Models;
using RestSharp;
using Newtonsoft.Json;

namespace WebAPIApplication4.Repositories
{
    public class GetUsedBikeDetailsRepo : IGetUsedBikeDetailsRepo
    {
        private readonly string _url = @"C:\Users\lsingh\Downloads\Used_Bikes.csv\Used_Bikes.csv";
        private readonly string _api = "https://us1.locationiq.com/v1/";
        
        public UsedBikeDetailsModel ParseRow(string row)
        {
            var columns = row.Split(',');
            return new UsedBikeDetailsModel()
            {
                Bike_name = columns[0],
                Price = float.Parse(columns[1]),
                City = columns[2],
                Kms_driven = float.Parse(columns[3]),
                Owner = columns[4],
                Age = float.Parse(columns[5]),
                Power = float.Parse(columns[6]),
                Brand = columns[7]
            };
        }

        public List<UsedBikeDetailsModel> ReturnCSVFileData(string url)
        {
            return File.ReadAllLines(url)
                .Skip(1)
                .Where(row => row.Length > 0)
                .Select(ParseRow)
                .ToList();
        }

        public List<UsedBikeDetailsModel> ReadCSVFileRepoFunc()
        {
            return ReturnCSVFileData(_url);
        }

        public List<UsedBikeDetailsModel> CheapestBikeByBrandRepoFunc()
        {
            return ReturnCSVFileData(_url);
        }

        public List<UsedBikeDetailsModel> AllCityNamesRepoFunc()
        {
            return ReturnCSVFileData(_url);
        }

        public async Task<List<GeocodingAPIModel>> GetCoordinatesOfCityRepoFuncAsync(string city)
        {
            var client = new RestClient(_api);
            var request = new RestRequest("search.php?key=pk.7bc0fa2611a1f2286b75448e006a0d1f&format=json", Method.Get);
            request.AddQueryParameter("city", city);
            dynamic response = await client.ExecuteAsync(request);
            var result = response.Content;
            try
            {
                return JsonConvert.DeserializeObject<List<GeocodingAPIModel>>(result);
            }
            catch (JsonSerializationException)
            {
                return new List<GeocodingAPIModel>();
            }
        }        
    }
}
