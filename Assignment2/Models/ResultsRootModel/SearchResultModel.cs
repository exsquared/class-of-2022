namespace Assignment2API.Models.ResultsRootModel
{
    public class SearchResultModel
    {
        public int ContentType { get; set; }
        public int ContentId { get; set; }
        public ImageInfo ImageInfo { get; set; }
        public HomeInfo HomeInfo { get; set; }
    }
}
