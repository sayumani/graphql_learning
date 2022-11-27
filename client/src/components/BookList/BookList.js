import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { useQuery } from "react-apollo";
import { getBooksQuery } from '../../queries/queries'

const BookList = (props) => {
  const { loading, data } = useQuery(getBooksQuery);
  console.log(data, loading)
  return (
    <div>
      <List>
        {loading
          ? "Loading books"
          : data.books &&
            data.books.map((book) => {
              return (
                <ListItem key={book.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <MenuBookIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={book.name} secondary={book.genre + ', ' + book.author.name} />
                </ListItem>
              );
            })}
      </List>
    </div>
  );
};

export default BookList;
