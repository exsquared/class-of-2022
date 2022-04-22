using WebAPIApplication4.Models;

namespace UtilityLibrary
{
    public class Utility
    {
        public static UsedBikeDetailsModel ParseRow(string row)
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
                Brand = columns[7].ToUpper()
            };
        }
    }
}