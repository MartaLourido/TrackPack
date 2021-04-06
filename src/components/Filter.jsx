// NPM Packages
import React, { useState } from "react";
// Components
import CardDetails from "./GeneralCards";
// Semantic-ui styiling
import "semantic-ui-css/semantic.min.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Filters({ information }) {
  // State
  const [sortKey, setSortKey] = useState(filteredResults());
  const classes = useStyles();

  // Components
  function filteredResults(sortKey) {
    const sortedResults = information.sort((a, b) =>
      a[sortKey] > b[sortKey] ? 1 : -1
    );
    return sortedResults.map((item) => (
      <CardDetails key={item.id} data={item} />
    ));
  }

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        {/* Content */}
        <Avatar
          alt="John Doe"
          src="https://image.freepik.com/free-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg"
          className={classes.large}
        />
        <Typography variant="h5" gutterBottom>
          Welcome Jhon Doe
        </Typography>
      </div>

      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button onClick={() => setSortKey(filteredResults("parcel_id"))}>
          ID
        </Button>
        <Button onClick={() => setSortKey(filteredResults("sender"))}>
          Sender
        </Button>
        <Button onClick={() => setSortKey(filteredResults("status"))}>
          Status
        </Button>
        <Button onClick={() => setSortKey(filteredResults("eta"))}>
          Delivery Date
        </Button>
      </ButtonGroup>
      <div>{sortKey}</div>
    </div>
  );
}
