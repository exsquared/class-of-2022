namespace Assignment2API.Models
{
    public class ExteriorImage
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Path { get; set; }
        public object Caption { get; set; }
        public object Description { get; set; }
        public string Category { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string AltTag { get; set; }
        public string SubText { get; set; }
        public bool IsLiked { get; set; }
        public int BookmarkDataId { get; set; }
        public string MasonClass { get; set; }
        public object ObjectLabels { get; set; }
    }
}
