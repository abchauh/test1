import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Navbar from "./Navbar";

export default function Dashboard() {
  const [isLoggedIn] = useState(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token").length !== 0
    ) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <Navbar />
      {isLoggedIn === false && <Redirect to="/signin" />}
      <Typography variant="h4">Admin Dashboard</Typography>
    </div>
  );
}
