import axios from "axios";
import React, { useState } from "react";
import { TextField, makeStyles, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useloginStyles = makeStyles((theme) => ({
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

export default function Login() {
  const classes = useloginStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let payload = { username, password };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/user/signin`,
        payload
      );
      if (response.status === 200) {
        history.push("/dashboard");
        console.log(response.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form className={classes.container} onSubmit={handleSubmit}>
        <Typography variant="h4">Login Form</Typography>
        <TextField
          type="text"
          value={username}
          label="username"
          variant="outlined"
          className={classes.textfield}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          type="password"
          label="password"
          variant="outlined"
          value={password}
          className={classes.textfield}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" color="primary" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
}
