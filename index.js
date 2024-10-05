const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const todos = require("./routes/todos");
const users = require("./routes/users");

app.all("*", (req, res, next) => {
  console.log("request by", req.url);
  next();
});

app.use("/todos", todos);
app.use("/users", users);

app.use("*", (req, res) => {
  res.status(404).send("Invalid API endpoint");
});

app.use((err, req, res, next) => {
  console.log(err)
  res.status(504).json({ message: "Internal Server Error" });
});


app.listen(8080);
