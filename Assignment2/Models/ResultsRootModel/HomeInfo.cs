namespace Assignment2API.Models.ResultsRootModel
{
    public class HomeInfo
    {
        public int HomeId { get; set; }
        public int ListingId { get; set; }
        public string CommName { get; set; }
        public int CommId { get; set; }
        public string PlanName { get; set; }
        public bool IsSpec { get; set; }
        public bool IsSaved { get; set; }
        public int BookmarkDataId { get; set; }
        public int Beds { get; set; }
        public int Baths { get; set; }
        public int Garage { get; set; }
        public double St { get; set; }
        public string Address { get; set; }
        public int Area { get; set; }
        public string Price { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string State { get; set; }
        public string MarketName { get; set; }
        public int MarketId { get; set; }
        public int ImageCount { get; set; }
        public Brand Brand { get; set; }
    }
}
