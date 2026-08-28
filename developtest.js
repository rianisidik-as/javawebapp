public static class Aikido
{
  public static void SqlInjection(string userName, string password)
  {
    using var connection = new SqlConnection("Server=prod-sqlserver.database.windows.net;Database=db;User ID=admin;Password=TGPCtvny2Ji7x63VFAAo;");

    connection.Open();

    using var command = connection.CreateCommand();
    command.CommandText = "SELECT Name FROM Users WHERE Name = '" + userName + "' Password = '" + password + "'";

    using var reader = command.ExecuteReader();
  }
}
