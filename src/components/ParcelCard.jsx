// NPM Packages
import React from "react";
import { Link } from "react-router-dom";
//Package for get the correct data
import moment from "moment";
//Styles from material ui
import Button from "@material-ui/core/Button";
import { Card, Icon, Container } from "semantic-ui-react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

//Const styles from material ui
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

export default function ParcelCard({ data }) {
  // Getting the data
  const {
    status,
    eta,
    parcel_id,
    sender,
    verification_required,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
    notes,
    last_updated,
    user_name,
    user_phone,
  } = data;

  //mapbox access token, it's a random token generated from my account in  mapbox that allow me to add the map
  const ACCESS_TOKEN =
    "pk.eyJ1IjoibWFydGFsb3VyaSIsImEiOiJja2VrNjJzdXUxZWRnMzJxYmtpMHd0dmtnIn0.0_2TcA_Jto9XMUfEDENeig";
  //styles from material-ui
  const classes = useStyles();

  return (
    <div className="container mt-8">
      <Container fluid>
        <div className="AvatarWrap">
          <Link to={`/parcels`}>
            <Button variant="outlined" color="secondary">
              Go Back
            </Button>{" "}
          </Link>
        </div>
        <div className="avatar"></div>
        <Card centered>
          <div className="AvatarWrap">
            <img
              className="Avatar"
              src="https://pbs.twimg.com/profile_images/836901071352180736/oWG52nUv_400x400.jpg"
              alt=""
            />
          </div>
          <Card.Content>
            <img
              className="map-wrapper"
              src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+555555(${location_coordinate_longitude},${location_coordinate_latitude})/${location_coordinate_longitude},${location_coordinate_latitude},8.71,0/250x240?access_token=${ACCESS_TOKEN}`}
              alt="mapbox"
            />
            <h4>
              {" "}
              <Icon name=" location arrow" />
              Location: {location_name}
            </h4>
            <h4>
              {" "}
              <Icon name="  shipping fast" />
              Status: {status}
            </h4>
            <h4>
              <Icon name="  clock" />
              Estimate date of arrival: {moment(eta).format("DD/MM/YYYY")}
            </h4>
            <h5>
              {" "}
              <Icon name=" box" /> Parcel ID: {parcel_id}
            </h5>
            <h5>
              {" "}
              <Icon name="  paper plane" />
              Sender: {sender}
            </h5>
            <h5>
              {" "}
              <Icon name="  check circle" />
              Require verification: {verification_required ? `Yes` : `No`}
            </h5>

            <h5>
              {" "}
              <Icon name="  calendar alternate outline" />
              Last updated: {moment(last_updated).format("DD/MM/YYYY")}
            </h5>
            {/* creating ternary operator for say the system only show the notes if you find it */}
            <h5>
              {" "}
              {notes ? "Notes:" : notes} {notes === null ? "" : notes}
            </h5>
            <Card.Description>
              <br></br>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="AvatarWrap">
              <Avatar
                alt="John Doe"
                src="https://image.freepik.com/free-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg"
                className={classes.large}
              />
              <a>
                <div> {user_name}</div>
                <span> {user_phone}</span>
              </a>
            </div>
          </Card.Content>
        </Card>
      </Container>
      <br />
    </div>
  );
}
