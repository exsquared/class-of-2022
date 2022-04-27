using Microsoft.Extensions.Caching.Memory;

namespace CacheHelperLibrary
{
    public class CacheHelper : ICacheHelper
    {
        private static IMemoryCache _memoryCache = new MemoryCache(new MemoryCacheOptions());
        public dynamic Get(string cacheKey)
        {
            var result = _memoryCache.Get(cacheKey);
            return result;
        }

        public void Add(string cacheKey, IEnumerable<dynamic> value)
        {
            var cacheExpiryOptions = new MemoryCacheEntryOptions
            {
                AbsoluteExpiration = DateTime.Now.AddSeconds(80),
                Priority = CacheItemPriority.Normal,
                SlidingExpiration = TimeSpan.FromSeconds(30)
            };
            _memoryCache.Set(cacheKey, value, cacheExpiryOptions);
        }
    }
}