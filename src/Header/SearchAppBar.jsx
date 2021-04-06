// NPM Packages
import React from "react";
import { useState} from "react";
import { useHistory, Link } from "react-router-dom";
// Material-ui styiling
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  logo: {
    maxWidth: 160,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  // State
  const [query, setQuery] = useState("");

  // Consts
  const history = useHistory();

  // Get the correct url
  function onSearch(event) {
    event.preventDefault();

    history.push(`/parcels/${query}`);
  }
  //Styles
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
          <Link to={`/`}>
            <img
              className="Avatar"
              src="https://i.ibb.co/94k0GH3/logo3.png"
              alt=""
            />
            </Link>

            {/* <MenuIcon /> */}
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {/* <img
              className="Avatar"
              src="https://i.ibb.co/PhRDQ9h/logo3.png"
              alt=""
            /> */}
            TrackPack
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={onSearch}>
              <InputBase
                placeholder="Search parcel ID…"
                label="Search by parcel ID"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
