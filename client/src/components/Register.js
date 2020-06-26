import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { makeStyles, Typography, TextField, Button } from "@material-ui/core";

const useRegisterStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  textfield: {
    margin: theme.spacing(2),
  },
}));

export default function Register() {
  const classes = useRegisterStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [isLoggedIn] = useState(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token").length !== 0
    ) {
      return true;
    }
    return false;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    let payload = { email, username, password };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/user/signup`,
        payload
      );
      if (response.status === 200) {
        history.push("/signin");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {isLoggedIn && <Redirect to="/dashboard" />}
      <form className={classes.container} onSubmit={handleSubmit}>
        <Typography variant="h4"> User Sign up Form</Typography>
        <TextField
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          variant="outlined"
          className={classes.textfield}
        />
        <TextField
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          label="Username"
          variant="outlined"
          className={classes.textfield}
        />
        <TextField
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="password"
          variant="outlined"
          className={classes.textfield}
        />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}
