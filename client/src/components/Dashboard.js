import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Typography, makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

import Navbar from "./Navbar";
const data = require("../data.json");

const useDashboardStyles = makeStyles({
  textfield: {
    margin: "10px",
  },
});

function TableComponent() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>S.no</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Products Listed</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>contant number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.products}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.contactNumber}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function Dashboard() {
  const classes = useDashboardStyles();
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
      <Typography variant="h5" className={classes.textfield}>
        Admin Dashboard
      </Typography>
      <TableComponent />
    </div>
  );
}
