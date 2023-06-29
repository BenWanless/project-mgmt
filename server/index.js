const express = require("express");
const cors = require("cors");
require("dotenv").config();
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const { graphqlHTTP } = require("express-graphql");

const port = process.env.PORT || 5000;

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
