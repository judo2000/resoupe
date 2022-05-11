const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
