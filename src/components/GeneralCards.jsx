// NPM Packages
import React from "react";
import { Link } from "react-router-dom";
// Component styiling from react boostrap
import moment from "moment";
import "../styles/cardDetails.css";
// Project files
import ProgressExampleIndicating from "./ProgressBar/ProgressExampleIndicating";
import { Button, Image, Modal, Icon } from "semantic-ui-react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Progress } from "semantic-ui-react";

//Adding progress bars

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

export default function CardDetails({ data }) {
  // For modal: const [open, setOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  //mapbox access token, it's a random token generated from my account in  mapbox that allow me to add the map
  const ACCESS_TOKEN =
    "pk.eyJ1IjoibWFydGFsb3VyaSIsImEiOiJja2VrNjJzdXUxZWRnMzJxYmtpMHd0dmtnIn0.0_2TcA_Jto9XMUfEDENeig";
  //Styles from material-ui
  const classes = useStyles();
  // Const data
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

  const ProgressGreen = () => <Progress percent={45} color="olive" />;

  const ProgressRed = () => <Progress percent={32} color="red" />;

  const ProgressBlue = () => <Progress percent={100} color="blue" />;

  const ProgressPink = () => <Progress percent={75} color="pink" />;

  return (
    <div className="Layout">
      <div>
        <div className="Container">
          <div className="Card">
            <div className="AvatarWrap">
              <img
                className="Avatar"
                src="https://pbs.twimg.com/profile_images/836901071352180736/oWG52nUv_400x400.jpg"
                alt=""
              />
            </div>
            <div className="Title"> {sender}</div>
            <div className="Description">ID: {parcel_id}</div>
            <div className="Title"> {status}</div>
            <div className="Description">
              {/* creating ternary operator for ProgressBar*/}
              <h5>
                {" "}
                {status === "delivered" ? <ProgressBlue /> : <ProgressPink />}
              </h5>

              {moment(eta).format("DD/MM/YYYY")}
            </div>
            <div className="AvatarWrap">
              <div className="Actions">
                <Modal
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  trigger={<Button color="pink"> More details</Button>}
                >
                  {/* Adding modal when you press the buton it will open */}
                  <Modal.Header>
                    Delivery Details
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
                  </Modal.Header>
                  <Modal.Content image>
                    <Image
                      size="medium"
                      src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+555555(${location_coordinate_longitude},${location_coordinate_latitude})/${location_coordinate_longitude},${location_coordinate_latitude},8.71,0/300x300?access_token=${ACCESS_TOKEN}`}
                      alt="mapbox"
                      wrapped
                    />

                    <Modal.Description>
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
                        Estimate date of arrival:{" "}
                        {moment(eta).format("DD/MM/YYYY")}
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
                        Require verification:{" "}
                        {verification_required ? `Yes` : `No`}
                      </h5>

                      <h5>
                        {" "}
                        <Icon name="  calendar alternate outline" />
                        Last updated:{" "}
                        {moment(last_updated).format("DD/MM/YYYY")}
                      </h5>
                      {/* creating ternary operator for say the system only show the notes if you find it */}
                      <h5>
                        {" "}
                        {notes ? "Notes:" : notes} {notes === null ? "" : notes}
                      </h5>

                      <br />
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Link to={`/`}>
                      <Button color="twitter" onClick={() => setOpen(false)}>
                        Home
                      </Button>
                    </Link>
                    <Button color="pink" onClick={() => setOpen(false)}>
                      All Parcels
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
