using Microsoft.AspNetCore.Authentication;
using Microsoft.OpenApi.Models;
using WebAPIApplication4;
using WebAPIApplication4.Services;
using CacheHelperLibrary;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddMemoryCache();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "BasicAuth", Version = "v1" });
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


builder.Services.AddScoped<IUserCredentialsCheck, UserCredentialsCheck>();
builder.Services.AddScoped<ICacheHelper, CacheHelper>();
builder.Services.AddScoped<global::WebAPIApplication4.Repositories.IGetUsedBikeDetails, global::WebAPIApplication4.Repositories.GetUsedBikeDetails>();
builder.Services.AddScoped<global::WebAPIApplication4.Services.IGetUsedBikeDetails, global::WebAPIApplication4.Services.GetUsedBikeDetails>();

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

app.MapControllers();

app.Run();
