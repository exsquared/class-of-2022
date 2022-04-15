   
namespace Assignment2API.Models
{
    public class ResultsRootInputModel
    {
        public SizeRange SizeRange { get; set; }
        public PriceRange PriceRange { get; set; }
        public Location Location { get; set; }
        public SearchFacet SearchFacet { get; set; }
        public Paging Paging { get; set; }
        public bool? IsNational { get; set; }
        public bool TopMatchesOnly { get; set; }
        public List<object> Features { get; set; }
        public bool IsMatchingRequired { get; set; }
        public object? Preferences { get; set; }
        public bool IsSearchHome { get; set; }
        public int BoardId { get; set; }
    }
  
}

