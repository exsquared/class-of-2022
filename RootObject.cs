using System;
using Newtonsoft.Json;
using HomeDetailResponseNamespace;


namespace RootObjectNamespace
{
    public class RootObject
    {
        [JsonProperty("homeDetail")]
        public HomeDetailResponse homeDetail { get; set; }
    }
}
