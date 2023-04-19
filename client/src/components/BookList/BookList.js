import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from '@mui/icons-material/Delete';

import { useQuery, useMutation } from "react-apollo";
import { getBooksQuery, deleteBookMutation } from '../../queries/queries'

const BookList = (props) => {
  const { loading, data } = useQuery(getBooksQuery);
  const {bookId, setBookId} = React.useState(null)
  console.log(data, loading)

  const [deleteBook, { error, data: deleteBookData }] = useMutation(deleteBookMutation, {
    refetchQueries: [
      {
        query: getBooksQuery,
      },
    ],
  });

  const onDelete = (book) => {
    deleteBook({variables: {id: book.id}})
  }

  return (
    <div>
      <List>
        {loading
          ? "Loading books"
          : data.books &&
            data.books.map((book) => {
              return (
                <ListItem key={book.id} onClick={() => props.onClick(book.id)}>
                  <ListItemAvatar>
                    <Avatar>
                      <MenuBookIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={book.name} secondary={book.genre + ', ' + book.author?.name} />
                  <DeleteIcon onClick={() => onDelete(book)}/>
                </ListItem>
              );
            })}
      </List>
    </div>
  );
};

export default BookList;
