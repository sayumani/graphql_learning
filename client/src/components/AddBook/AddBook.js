import React from "react";
import { useQuery, useMutation } from "react-apollo";
import {
  Input,
  FormLabel,
  FormControl,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import "./AddBook.css";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../../queries/queries";

const AddBook = (props) => {
  const [addForm, setAddForm] = React.useState({
    name: "",
    genre: "",
    authorId: "",
  });
  const { loading, data } = useQuery(getAuthorsQuery)
  const [addBook, { error, data: addBookData }] = useMutation(addBookMutation, {
    variables: {
      name: addForm.name,
      genre: addForm.genre,
      authorId: addForm.authorId,
    },
    refetchQueries: [
      {
        query: getBooksQuery,
      },
    ],
  });
  console.log({addBook, addBookData, error})

  const onChange = (e) => {
    const { name, value } = e.target;
    setAddForm({
      ...addForm,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addBook();
    setAddForm({
      name: "",
      genre: "",
      authorId: "",
    });
  };
  return (
    <form className="addAuthorForm" onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>Book name:</FormLabel>
        <Input name="name" value={addForm.name} onChange={onChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Genre:</FormLabel>
        <Input name="genre" value={addForm.genre} onChange={onChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Author:</FormLabel>
        <Select value={addForm.authorId} name="authorId" onChange={onChange}>
          <MenuItem>Select Author</MenuItem>
          {loading === false &&
            data.authors &&
            data.authors.map((author) => {
              return (
                <MenuItem key={author.id} value={author.id}>
                  {author.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <IconButton onClick={onSubmit}>
        <AddIcon />
      </IconButton>
    </form>
  );
};

export default AddBook;
