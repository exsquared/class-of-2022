namespace Assignment2API.Models.ResultsRootModel
{
    public class ImageInfo
    {
        public string AltTag { get; set; }
        public bool IsLiked { get; set; }
        public int BookmarkDataId { get; set; }
        public object ShortDesc { get; set; }
        public int ShortTextId { get; set; }
        public object Url { get; set; }
        public string Title { get; set; }
        public string ClassName { get; set; }
        public object Type { get; set; }
        public string MatchingScore { get; set; }
        public int Id { get; set; }
        public string Path { get; set; }
        public string Category { get; set; }
    }
}
