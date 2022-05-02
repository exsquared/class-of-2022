using CachingAPI;
using Microsoft.AspNetCore.Authentication;
using Microsoft.OpenApi.Models;
using System.Web.Http.Filters;
using WebAPIApplication4.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddScoped<IUserCredentialsCheck, UserCredentialsCheck>();
builder.Services.AddScoped<global::WebAPIApplication4.Repositories.IGetUsedBikeDetails, global::WebAPIApplication4.Repositories.GetUsedBikeDetails>();
builder.Services.AddScoped<global::WebAPIApplication4.Services.IGetUsedBikeDetails, global::WebAPIApplication4.Services.GetUsedBikeDetails>();

builder.Services.AddMemoryCache();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "BikeDetails", Version = "v1" });
    c.AddSecurityDefinition("basic", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "basic",
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
                    Id = "basic"
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

app.UseAuthentication();

app.UseAuthorization();

app.UseMiddleware<CustomMiddleware>();

app.MapControllers();

app.Run();
