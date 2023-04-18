import React from "react";
import BookList from "./components/BookList/BookList";
import Typography from "@mui/material/Typography";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AddBook from "./components/AddBook/AddBook";
import Authors from "./components/Authors/Authors";
import AddAuthor from "./components/AddAuthor/AddAuthor";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <Typography variant="h4" gutterBottom>
            Books List
          </Typography>
          <BookList />
          <div>
            <Typography variant="h4" gutterBottom>
              Add Bok
            </Typography>
            <AddBook />
          </div>
        </div>
        <div>
          <Typography variant="h4" gutterBottom>
            Authors List
          </Typography>
          <Authors />
          <div>
            <Typography variant="h4" gutterBottom>
              Add Author
            </Typography>
            <AddAuthor />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
