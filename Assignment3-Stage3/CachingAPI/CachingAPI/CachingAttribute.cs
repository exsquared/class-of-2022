using Microsoft.Extensions.Caching.Memory;
using Microsoft.AspNetCore.Mvc.Filters;

namespace CachingAPI
{
    public class CachingAttribute : Attribute, IResourceFilter
    {
        private IMemoryCache _memoryCache = new MemoryCache( new MemoryCacheOptions());
        public string cacheKey { set; get; }

        void IResourceFilter.OnResourceExecuting(ResourceExecutingContext context)
        {
            cacheKey = context.HttpContext.Request.Path + context.HttpContext.Request.QueryString;
            if(_memoryCache.TryGetValue(cacheKey, out var value))
            {
                context.Result = (Microsoft.AspNetCore.Mvc.IActionResult?)value;
            }
        }

        void IResourceFilter.OnResourceExecuted(ResourceExecutedContext context)
        {
            if (!context.HttpContext.Request.QueryString.ToString().Contains("tvs") && 
                !_memoryCache.TryGetValue(cacheKey,out var result))
            {
                var cacheExpiryOptions = new MemoryCacheEntryOptions
                {
                    AbsoluteExpiration = DateTime.Now.AddHours(8),
                    Priority = CacheItemPriority.Normal,
                    SlidingExpiration = TimeSpan.FromHours(3)
                };
                _memoryCache.Set(cacheKey, context.Result, cacheExpiryOptions);
            }
        }
    }
}
