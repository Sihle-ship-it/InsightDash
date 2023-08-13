using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<ApiContext>(opt => 
{ 
    opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")
        .Replace("{USERNAME}", builder.Configuration["Postgres:Username"])
        .Replace("{PASSWORD}", builder.Configuration["Postgres:Password"]));
});

var app = builder.Build();


// Configure the Http Request pipeline
app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));


app.MapControllers();

app.Run();
