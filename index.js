const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

//connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);

//Middleware
app.use(express.json());

//Route middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("Node Server is running. Yay!!");
});

app.listen(process.env.PORT, () => console.log("Server is up and running"));
