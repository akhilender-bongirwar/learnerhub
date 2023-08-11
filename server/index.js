const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`server started on the port ${port}`);
});
