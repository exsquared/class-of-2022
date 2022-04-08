using System;
using Newtonsoft.Json;
using HomeDetailResponseNamespace;


namespace RootObjectNamespace
{
    class RootObject
    {
        [JsonProperty("homeDetail")]
        internal HomeDetailResponse homeDetail { get; set; }
    }
}
