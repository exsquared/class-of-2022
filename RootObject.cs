using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using HomeDetailResponseNamespace;

namespace RootObjectNamespace
{
    public class RootObject
    {
        [JsonProperty("homeDetail")]
        public HomeDetailResponse HomeDetail { get; set; }
    }
}
