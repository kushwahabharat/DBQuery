using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DBQuery.Models
{
    public class DatabaseMeta
    {
        public string DatabaseName { get; set; }
        public string TableSchemaName { get; set; }
        public string TableName { get; set; }
        public string TableType { get; set; }
        public string FriendlyName { get; set; }

    }
}
