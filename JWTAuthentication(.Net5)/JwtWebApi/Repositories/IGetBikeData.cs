using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JwtWebApi.Models;

namespace JwtWebApi.Repositories
{
    public interface IGetBikeData
    {
        List<BikeDetailModel> ReturnCSVFileData();
    }
}
