const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27023/graphql-learn');
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(8080, () => {
  console.log("listening for requests on 8080");
});
