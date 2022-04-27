namespace CacheHelperLibrary
{
    public interface ICacheHelper
    {
        public dynamic Get(string cacheKey);
        public void Add(string cacheKey, IEnumerable<dynamic> value);
    }
}