namespace WebAPIApplication4.Models
{
    public class GeocodingAPIModel
    {
        public string? Place_id { get; set; }
        public string? Licence { get; set; }
        public string? Osm_type { get; set; }
        public string? Osm_id { get; set; }
        public List<string>? Boundingbox { get; set; }
        public string? Lat { get; set; }
        public string? Lon { get; set; }
        public string? Display_name { get; set; }
        public string? Class { get; set; }
        public string? Type { get; set; }
        public double? Importance { get; set; }
        public string? Icon { get; set; }
    }
}
