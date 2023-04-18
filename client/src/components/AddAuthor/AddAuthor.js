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

import "./AddAuthor.css";
import {
  getAuthorsQuery,
  addAuthorMutation,
} from "../../queries/queries";

const AddAuthor = (props) => {
  const [addForm, setAddForm] = React.useState({
    name: "",
    age: "",
  });
  const [addAuthor, { error, data: addAuthorData }] = useMutation(addAuthorMutation, {
    variables: {
      name: addForm.name,
      age: Number(addForm.age),
    },
    refetchQueries: [
      {
        query: getAuthorsQuery,
      },
    ],
  });
  console.log({addAuthor, addAuthorData, error})

  const onChange = (e) => {
    const { name, value } = e.target;
    setAddForm({
      ...addForm,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addAuthor();
    setAddForm({
      name: "",
      age: ""
    });
  };
  return (
    <form className="addAuthorForm" onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>Author name:</FormLabel>
        <Input name="name" value={addForm.name} onChange={onChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Age:</FormLabel>
        <Input name="age" type="number" value={addForm.age} onChange={onChange} />
      </FormControl>
      <IconButton onClick={onSubmit}>
        <AddIcon />
      </IconButton>
    </form>
  );
};

export default AddAuthor;
