import React from "react";
import List from "@mui/material/List";

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
  const getBookDetail = (book) => {
    return (
      <div>

      </div>
    )
  }
  return (
    <div className="addForm">
      <List>{loading ? "Loading book details" : 
      (data && data.book) ? 
        <div><pre>{JSON.stringify(data, null, 2) }</pre></div> :
        <div>Please select a book</div>}</List>
    </div>
  );
};

export default BookDetails;
