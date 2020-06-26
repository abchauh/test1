import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Typography, makeStyles } from "@material-ui/core";

const useNavbarStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    // marginBottom: "0px",
  },
});

export default function Navbar() {
  const classes = useNavbarStyles();
  const history = useHistory();
  
  const handleLogout = () => {
    localStorage.clear();
    history.push("/signin");
  };
  return (
    <AppBar position="static">
      <div className={classes.container}>
        <Typography variant="h6">Admin DashBoard</Typography>
        <button color="primary" variant="contained" onClick={handleLogout}>
          logout
        </button>
      </div>
    </AppBar>
  );
}
