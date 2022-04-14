namespace Assignment2API.Models
{
    public class Location
    {
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public int marketId { get; set; }
        public string marketName { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string stateName { get; set; }
        public string category { get; set; }
        public int categoryId { get; set; }
        public object categoryIds { get; set; }
        public object ipAddress { get; set; }
        public object builder { get; set; }
        public bool isNPSrp { get; set; }
    }
}
