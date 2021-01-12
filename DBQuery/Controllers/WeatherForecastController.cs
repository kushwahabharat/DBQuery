using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using DBQuery.DAO;
using DBQuery.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DBQuery.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        string ConnectionString = "Server=localhost;Initial Catalog=pv_dev;Integrated Security=True;";
      
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
        [HttpGet("/tables")]
        public IEnumerable<DatabaseMeta> GetTables()
        {
            SqlDBConnection sql = new SqlDBConnection(ConnectionString);
            return sql.GetTables();
        }
        [HttpGet("/columns/{tableName}")]
        public IEnumerable<TableMeta> GetColumns(string tableName)
        {
            SqlDBConnection sql = new SqlDBConnection(ConnectionString);
            return sql.GetColumns(tableName);
        }

        [HttpGet("/{tableName}/getalldata")]
        public List<Dictionary<string, dynamic>> GetAllData(string tableName)
        {
            SqlDBConnection sql = new SqlDBConnection(ConnectionString);
            return Utils.ConvertTodictionary(sql.GetData(tableName));
        }

        [HttpGet("/{tableName}/query/")]
        public List<Dictionary<string, dynamic>> GetData(string tableName)
        {
            var queryStrings = HttpContext.Request.Query;
            SqlDBConnection sql = new SqlDBConnection(ConnectionString);
            return Utils.ConvertTodictionary(sql.GetData(tableName));
        }
    }
}
