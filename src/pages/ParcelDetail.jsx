// NPM Package
import React from "react";
import { useParams, Link } from "react-router-dom";

// Project files
import ParcelCard from "../components/ParcelCard";

//material ui styling
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ParcelDetail({ information }) {
  //styiling
  const classes = useStyles();

  //Const
  const { id } = useParams();

  //Checking if the id has the same format as parcel_id
  const format = RegExp(/^\d{4}$/);
  const checkFormat = format.test(id);

  //filtering the data
  const data = information.filter((item) => item.parcel_id.match(id))[0];

  return (
    <div className={classes.root}>
      <div>
        {checkFormat && data ? (
          <ParcelCard data={data} />
        ) : (
          <Alert severity="warning">
            We have not found any matching IDs. Please, try again or use the
            filter:
            <Link to={`/parcels`}>
              <Button color="secondary">Filter all the parcels</Button>{" "}
            </Link>
          </Alert>
        )}
      </div>
    </div>
  );
}
