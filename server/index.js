const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./config/db");
dotenv.config();

app.use(express.json());
db.connect();

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`server started on the port ${port}`);
});

