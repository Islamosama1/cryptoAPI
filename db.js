const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  database: "test-db",
  port: "5432",
  password: "io030609",
});

module.exports = client;
