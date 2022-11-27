import React from "react";
import BookList from "./components/BookList/BookList";
import Typography from "@mui/material/Typography";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AddBook from "./components/AddBook/AddBook";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Typography variant="h4" gutterBottom>
          Books List
        </Typography>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
