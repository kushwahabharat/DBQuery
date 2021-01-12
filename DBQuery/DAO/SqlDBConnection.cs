using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using DBQuery.Models;

namespace DBQuery.DAO
{
    public class SqlDBConnection:BaseConnection
    {
        public SqlDBConnection(string connectionString) : base(connectionString)
        {

        }
        public  List<DatabaseMeta> GetTables()
        {
            using (SqlConnection connection = new SqlConnection(this.ConnectionString))
            {
                connection.Open();
                DataTable schema = connection.GetSchema("Tables");
                List<DatabaseMeta> TableNames = new List<DatabaseMeta>();
                foreach (DataRow row in schema.Rows)
                {
                    DatabaseMeta databaseMeta = new DatabaseMeta();
                    databaseMeta.DatabaseName = row[0].ToString();
                    databaseMeta.TableSchemaName = row[1].ToString();
                    databaseMeta.TableName = row[2].ToString();
                    databaseMeta.TableType = row[3].ToString();

                    TableNames.Add(databaseMeta);
                }
                return TableNames;
            }
        }

        public List<TableMeta> GetColumns(string tableName)
        {
            DataTable schema = new DataTable();
            using (SqlConnection connection = new SqlConnection(this.ConnectionString))
            {
                SqlCommand command = new SqlCommand();
                command.Connection = connection;
                command.CommandType = System.Data.CommandType.Text;
                command.CommandText = $"SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = @tableName";
                // Provide the value for the parameter
                command.Parameters.AddWithValue("@tableName", tableName);
                connection.Open();
                SqlDataAdapter adapter = new SqlDataAdapter(command);
                adapter.Fill(schema);
            }

            List<TableMeta> columnMetas = new List<TableMeta>();
            if (schema != null && schema.Rows != null)
            {
                foreach (DataRow row in schema.Rows)
                {
                    TableMeta info = new TableMeta();
                    info.DatabaseName = row["TABLE_CATALOG"].ToString();
                    info.TableSchemaName = row["TABLE_SCHEMA"].ToString();
                    info.TableName = row["TABLE_NAME"].ToString();
                    info.ColumnName = row["COLUMN_NAME"].ToString();
                    info.OrdinalPosition =int.Parse( row["ORDINAL_POSITION"].ToString());
                    info.DefaultValue = row["COLUMN_DEFAULT"].ToString();
                    info.IsNullable = row["IS_NULLABLE"].ToString().ToUpper() == "YES";
                    info.DataType = row["DATA_TYPE"].ToString();
                    columnMetas.Add(info);
                }
            }
            return columnMetas;
        }
        public DataTable GetData(string tableName, string whereClause = null)
        {
            DataTable dbResult = new DataTable();
            using (SqlConnection connection = new SqlConnection(this.ConnectionString))
            {
                var commandText = $"SELECT * FROM {Utils.Sanitize(tableName)}";
                if (!string.IsNullOrWhiteSpace(whereClause))
                    commandText += $"Where {whereClause}";
                SqlCommand command = new SqlCommand();
                command.Connection = connection;
                command.CommandType = System.Data.CommandType.Text;
                command.CommandText = commandText;
                connection.Open();
                SqlDataAdapter adapter = new SqlDataAdapter(command);
                adapter.Fill(dbResult);
            }

            return dbResult;
        }
    }
}
