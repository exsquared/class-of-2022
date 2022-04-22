using WebAPIApplication4.Repositories;
using WebAPIApplication4.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<global::WebAPIApplication4.Repositories.IGetUsedBikeDetails, global::WebAPIApplication4.Repositories.GetUsedBikeDetails>();
builder.Services.AddScoped<global::WebAPIApplication4.Services.IGetUsedBikeDetails, global::WebAPIApplication4.Services.GetUsedBikeDetails>();

builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
