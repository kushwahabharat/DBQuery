using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DBQuery.DAO
{
    public class Utils
    {
        public static string Sanitize(string value)
        {
            string[] stringArray = { "insert", "update", "delete", "drop", "alter", "merge" };
            foreach (string x in stringArray)
            {
                if (value.ToLower().Contains(x))
                {
                    return null;
                }
            }
            return value;
        }
        public static List<Dictionary<string, dynamic>> ConvertTodictionary(DataTable data)
        {
            List<Dictionary<string, dynamic>> rows = new List<Dictionary<string, dynamic>>();
            Dictionary<string, object> row;
            foreach (DataRow dr in data.Rows)
            {
                row = new Dictionary<string, object>();
                foreach (DataColumn col in data.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }
            return rows;
        }
    }
}
