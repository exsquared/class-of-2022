   
namespace Assignment2API.Models
{
    public class ResultsRoot
    {
        public SizeRange sizeRange { get; set; }
        public PriceRange priceRange { get; set; }
        public Location location { get; set; }
        public SearchFacet searchFacet { get; set; }
        public Paging paging { get; set; }
        public bool isNational { get; set; }
        public bool topMatchesOnly { get; set; }
        public List<object> features { get; set; }
        public bool isMatchingRequired { get; set; }
        public object preferences { get; set; }
        public bool isSearchHome { get; set; }
        public int boardId { get; set; }
    }
  
}

