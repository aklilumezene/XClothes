const { Client } = require("pg");
const express = require("express");

app = express();

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "xclothes",
  password: "klwklw",
  port: 5432,
});

client.connect();
client
  .query("SELECT * FROM clothes")
  .then(function (result) {
    console.log("server is finishing");
    console.log("success!");
    console.log(result.rowCount);
    client.end();
  })
  .catch(function (error) {
    console.log("ooops");
    console.log(error);
    client.end();
  });

  

app.listen(3000, function () {console.log("server started")});

console.log("server is finishing");


