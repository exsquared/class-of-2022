using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using JwtWebApi.Models;
using JwtWebApi.ConstantsLibrary;
using JwtWebApi.UtilityLibrary;

namespace JwtWebApi.Repositories
{
    public class GetBikeData : IGetBikeData
    {
        public List<BikeDetailModel> ReturnCSVFileData()
        {
            if (File.Exists(Constants._path) && string.Equals(Path.GetExtension(Constants._path), ".csv"))
            {
                string[] csvFile = File.ReadAllLines(Constants._path);
                int numberOfColumns = csvFile[0].Split(",").Length;
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
    }
}
