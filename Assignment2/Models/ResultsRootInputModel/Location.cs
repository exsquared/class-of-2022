namespace Assignment2API.Models
{
    public class Location
    {
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int MarketId { get; set; }
        public string MarketName { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string StateName { get; set; }
        public string Category { get; set; }
        public int? CategoryId { get; set; }
        public object? CategoryIds { get; set; }
        public object? IpAddress { get; set; }
        public object? Builder { get; set; }
        public bool IsNPSrp { get; set; }
    }
}
