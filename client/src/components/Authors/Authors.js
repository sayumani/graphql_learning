import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from '@mui/icons-material/Delete';

import { useQuery } from "react-apollo";
import { getAuthorsQuery } from '../../queries/queries'

const Authors = (props) => {
  const { loading, data } = useQuery(getAuthorsQuery);
  console.log(data, loading)
  return (
    <div>
      <List>
        {loading
          ? "Loading Authors"
          : data.authors &&
            data.authors.map((author) => {
              return (
                <ListItem key={author.id}>
                  <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={author.name} />
                  <DeleteIcon />
                </ListItem>
              );
            })}
      </List>
    </div>
  );
};

export default Authors;
