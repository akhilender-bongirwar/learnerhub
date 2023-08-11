const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./config/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
db.connect();

app.use(express.json());
app.use("/user", userRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`server started on the port ${port}`);
});
