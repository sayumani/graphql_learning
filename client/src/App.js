import React from "react";
import BookList from "./components/BookList/BookList";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AddBook from "./components/AddBook/AddBook";
import Authors from "./components/Authors/Authors";
import AddAuthor from "./components/AddAuthor/AddAuthor";
import BookDetails from "./components/BookDetails/BookDetails";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
});

function App() {
  const [bookId, setBookId] = React.useState(null);
  return (
    <ApolloProvider client={client}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card style={{minWidth: 600, padding: 20}}>
          <Typography variant="h4" gutterBottom>
            Books List
          </Typography>
          <BookList onClick={setBookId}/>
          <Typography variant="h4" gutterBottom>
            Books Details
          </Typography>
          <BookDetails id={bookId} />
        </Card>
        <Card style={{minWidth: 600, padding: 20}}>
          <Typography variant="h4" gutterBottom>
            Authors List
          </Typography>
          <Authors />
          <div className="addForm" style={{padding: 20}}>
            <Typography variant="h4" gutterBottom>
              Add Author
            </Typography>
            <AddAuthor />
          </div>
          <div className="addForm" style={{padding: 20}}>
            <Typography variant="h4" gutterBottom>
              Add Book
            </Typography>
            <AddBook />
          </div>
        </Card>
      </div>
    </ApolloProvider>
  );
}

export default App;
