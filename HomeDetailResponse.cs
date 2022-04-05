using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace HomeDetailResponseNamespace
{
    public class HomeDetailResponse
    {
        [JsonProperty("homeId")]
        public int homeId { get; set; }
        [JsonProperty("commName")]
        public string communityName { get; set; }
        [JsonProperty("planName")]
        public string homeName { get; set; }
        [JsonProperty("marketName")]
        public string marketName { get; set; }
    }
}
