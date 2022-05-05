using Microsoft.AspNetCore.Http;

namespace RequestResponseLoggerMiddleware
{
    public class RequestResponseLogger
    {
        private readonly RequestDelegate _next;

        public RequestResponseLogger(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            string filePath = @"C:\Users\lsingh\Desktop\log.txt";           

            Console.WriteLine($"HTTP request information:\n" +
                $"\tPath: {httpContext.Request.Path}" + $"{httpContext.Request.QueryString}\n");
            
            // Temporarily replace the HttpResponseStream, which is a write-only stream, with a MemoryStream to capture it's value in-flight.
            var originalResponseBody = httpContext.Response.Body;
            using var newResponseBody = new MemoryStream();
            httpContext.Response.Body = newResponseBody;

            await _next(httpContext);
            try
            {
                newResponseBody.Seek(0, SeekOrigin.Begin);
                var responseBodyText = await new StreamReader(httpContext.Response.Body).ReadToEndAsync();

                Console.WriteLine($"HTTP response information:\n" +
                    $"\tBody: {responseBodyText}");

                if (!File.Exists(filePath))
                {
                    File.Create(filePath);
                    using (var tw = File.AppendText(filePath))
                    {
                        tw.WriteLine($"RequestPath: {httpContext.Request.Path}" + $"{httpContext.Request.QueryString}\n" +
                    $"ResponseBody: {responseBodyText}\n\n\n");
                    }
                }
                else if (File.Exists(filePath))
                {
                    using (var tw = File.AppendText(filePath))
                    {
                        tw.WriteLine($"RequestPath: {httpContext.Request.Path}" + $"{httpContext.Request.QueryString}\n" +
                    $"ResponseBody: {responseBodyText}\n\n\n");
                    }
                }
                newResponseBody.Seek(0, SeekOrigin.Begin);
                await newResponseBody.CopyToAsync(originalResponseBody);
            }
            catch (Exception)
            {

            }            
        }
    }
}