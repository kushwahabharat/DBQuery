using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DBQuery.DAO
{
    public class BaseConnection
    {
        public string ConnectionString { get; set; }
        public BaseConnection(string connectionString)
        {
            ConnectionString = connectionString;
        }
    }
}
