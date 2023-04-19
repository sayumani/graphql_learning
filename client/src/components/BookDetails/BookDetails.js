import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";

import { useLazyQuery } from "react-apollo";
import { getBooksDetailsQuery } from "../../queries/queries";

const BookDetails = (props) => {
  React.useEffect(() => {
    if (props.id) {
      loadDetails();
    }
  }, [props.id]);
  const [loadDetails, { loading, data }] = useLazyQuery(getBooksDetailsQuery, {
    variables: {
      id: props.id,
    },
  });
  console.log(data, loading);
  return (
    <div>
      <List>{loading ? "Loading books" : data && data.book && <div><pre>{JSON.stringify(data, null, 2) }</pre></div>}</List>
    </div>
  );
};

export default BookDetails;
