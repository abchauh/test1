import axios from "axios";
import React, { useState } from "react";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const classes = useRegisterStyles();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let payload = { email, username, password };
    const response = await axios.post(
      `${process.env.Backend_API_URL}/signup`,
      payload
    );
    if (response.status === 200) {

    } else {
      alert("user already existed");
    }
  };

  return (
    <div>
      <form className={classes.container} onSubmit={handleSubmit}>
        <Typography variant="h4"> User Sign up Form</Typography>
        <TextField
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          variant="outlined"
          className={classes.textfield}
        />
        <TextField
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
          Signin
        </Button>
      </form>
    </div>
  );
}
