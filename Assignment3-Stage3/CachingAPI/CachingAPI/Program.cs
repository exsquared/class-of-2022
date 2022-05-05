using CachingAPI;
using Microsoft.AspNetCore.Authentication;
using Microsoft.OpenApi.Models;
using WebAPIApplication4.Services;
using RequestResponseLoggerMiddleware;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog((ctx, lc) => lc
    .ReadFrom.Configuration(ctx.Configuration));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddScoped<IUserCredentialsCheck, UserCredentialsCheck>();
builder.Services.AddScoped<global::WebAPIApplication4.Repositories.IGetUsedBikeDetails, global::WebAPIApplication4.Repositories.GetUsedBikeDetails>();
builder.Services.AddScoped<global::WebAPIApplication4.Services.IGetUsedBikeDetails, global::WebAPIApplication4.Services.GetUsedBikeDetails>();
//builder.Services.AddSingleton<ILoggerFactory, LoggerFactory>();
builder.Services.AddMemoryCache();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "BikeDetails", Version = "v1" });
    c.AddSecurityDefinition("Basic", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Basic",
        In = ParameterLocation.Header,
        Description = "Basic Authorization."
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Basic"
                }
            },
            new string[] {}
        }
    });
});
builder.Services.AddAuthentication("BasicAuthentication")
    .AddScheme<AuthenticationSchemeOptions, BasicAuthenticationHandler>("BasicAuthentication", null);



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseMiddleware<RequestResponseLogger>();

app.UseSerilogRequestLogging();

app.UseAuthentication();

app.UseAuthorization();

app.UseMiddleware<CustomMiddleware>();

app.MapControllers();

app.Run();
