using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DBQuery.Models
{
    public class TableMeta
    {
        public string DatabaseName { get; set; }
        public string TableSchemaName { get; set; }
        public string TableName { get; set; }
        public string ColumnName { get; set; }
        public string FriendlyName { get; set; }

        public int OrdinalPosition { get; set; }
        public string DefaultValue { get; set; }
        public bool IsNullable { get; set; }
        public string DataType { get; set; }

    }
}
