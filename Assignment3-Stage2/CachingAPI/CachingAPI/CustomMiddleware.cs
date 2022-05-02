namespace CachingAPI
{
    public class CustomMiddleware
    {
        private readonly RequestDelegate _next;

        public CustomMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            httpContext.Response.StatusCode = 700;
            await _next(httpContext);            
        }
    }
}

