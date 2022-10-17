import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import config from "./config.js";

const app = express();
app.use(cors());

const port = 3005;

app.get("/", async (req, res) => {
  try {
    const connection = await mysql.createConnection(config.db);
    const result = await connection.execute("select * from task");
    if (!result) result = [];
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port);
