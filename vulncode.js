const app = {}

app.get("/user", (req, res) => {
    const connStr = "Server=tcp:myserver.database.windows.net,1433;Initial Catalog=mydb;Persist Security Info=False;User ID=myuser;Password=****3!@#";
    const username = req.query.username
    const unsafeQuery = `SELECT * FROM users WHERE username = @username`
    const request = new sql.Request();
    request.input('username', sql.NVarChar, username);
    sql.connect(connStr).then(() => {
        request.query(unsafeQuery, (err, result) => {
            res.status(200).send(result)
        })
    })
})
