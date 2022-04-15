namespace Assignment2API.Models
{
    public class HomeDetail
    {
        public int HomeId { get; set; }
        public bool IsSaved { get; set; }
        public int BookmarkDataId { get; set; }
        public int HomeBoardCount { get; set; }
        public int ImageBoardCount { get; set; }
        public string Description { get; set; }
        public string CommunityDesc { get; set; }
        public string Story { get; set; }
        public int CommId { get; set; }
        public int MarketId { get; set; }
        public string MarketName { get; set; }
        public string Address { get; set; }
        public bool IsSpec { get; set; }
        public string County { get; set; }
        public string CorporationName { get; set; }
        public string City { get; set; }
        public string CommName { get; set; }
        public string State { get; set; }
        public string Hours { get; set; }
        public Brand Brand { get; set; }
        public string CommunityUrl { get; set; }
        public Builder Builder { get; set; }
        public string Zip { get; set; }
        public string Phone { get; set; }
        public bool IsTrackingNumber { get; set; }
        public string PhoneTracking { get; set; }
        public int ListingId { get; set; }
        public string PlanName { get; set; }
        public string TourUrl { get; set; }
        public List<InteriorImage> InteriorImages { get; set; }
        public List<ExteriorImage> ExteriorImages { get; set; }
        public List<object> PlanImages { get; set; }
        public Community Community { get; set; }
        public List<IntMedia> IntMedia { get; set; }
        public List<Video> Videos { get; set; }
        public int Square { get; set; }
        public int Price { get; set; }
        public string Bed { get; set; }
        public string Bath { get; set; }
        public string Garage { get; set; }
        public string Thumb { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Status { get; set; }
        public string StatusDescription { get; set; }
        public string CommunityMap { get; set; }
        public BannerImage BannerImage { get; set; }
        public int PlanImagesCount { get; set; }
        public int InteriorImagesCount { get; set; }
        public int ExteriorImagesCount { get; set; }
        public int CommunityImagesCount { get; set; }
        public List<object> Schools { get; set; }
        public List<object> Amenities { get; set; }
        public string DrivingDirections { get; set; }
        public string SalesOffEmail { get; set; }
    }
}

