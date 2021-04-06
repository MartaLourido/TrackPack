// NPM Packages
import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// Project files
// import SearchBar from '../components/SearchBar.jsx';
// Project styiling from material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PageviewIcon from "@material-ui/icons/Pageview";
import { pink } from "@material-ui/core/colors";


// Project fonts from google api
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://image.freepik.com/vector-gratis/hombre-negocios-concepto-tecnologia-seguimiento-entrega-aplicaciones_70921-715.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        TrackPack
      </Link>{" "}
      {new Date().getFullYear()}
      {"  "}
    </Typography>
  );
}

function Home() {
  // State
  // State
  const [query, setQuery] = useState("");

  // Constants for styling
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.pink}>
            <PageviewIcon />
          </Avatar>
          <Typography variant="h5" gutterBottom>
          Track your package 
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              id="parcel_id"
              name="parcel_id"
              autoFocus
              label="Search by parcel ID"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Link to={`/parcels/${query}`}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Track by parcel ID
              </Button>
            </Link>
            <Link to={`/parcels`}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Track all the parcels
              </Button>
            </Link>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Home;
