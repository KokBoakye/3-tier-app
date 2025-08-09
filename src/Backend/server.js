const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const port = 3000;

// DB connection config
const dbConfig = {
  host: process.env.DB_HOST, // RDS endpoint
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

app.get("/", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute("SELECT NOW() as now");
    res.send(`Hello from Backend! DB Time: ${rows[0].now}`);
    await connection.end();
  } catch (err) {
    res.status(500).send("Database connection failed: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
