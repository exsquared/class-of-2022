using System;
using Newtonsoft.Json;


namespace HomeDetailResponseNamespace
{
    class HomeDetailResponse
    {
        [JsonProperty("homeId")]
        internal int homeId { get; set; }
        [JsonProperty("commName")]
        internal string communityName { get; set; }
        [JsonProperty("planName")]
        internal string homeName { get; set; }
        [JsonProperty("marketName")]
        internal string marketName { get; set; }
    }
}
