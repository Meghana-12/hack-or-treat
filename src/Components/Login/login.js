import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";
import "./login.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Creepster",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Creepster",
  },
  container: {
    fontFamily: "Creepster",
  },
}));

export default function Login() {
  const classes = useStyles(theme);
  const [login, setLogin] = useState(true);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const handleLogin = async (data) => {
    const result = await axios.post("/login", {
      username: data.username,
      email: data.email,
      password: data.password,
    });

    console.log(result);
    if (result.data.message === "good") {
      history.push("/");
    } else {
      setLogin(false);
    }
  };

  console.log("value of login is" + login);

  let errorMessage = (
    <div>
      <p style={{ color: "red" }}>Please try again</p>
    </div>
  );

  return (
    <div className="login-div">
      <ThemeProvider theme={theme}>
        <Container className={classes.container} component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmit(handleLogin)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="email"
                    name="email"
                    inputRef={register}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    inputRef={register}
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    inputRef={register}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>{" "}
              <Grid container justify="flex-end">
                <Grid item>{!login && errorMessage}</Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/signup" variant="body2">
                    Need an account? Register Here
                  </Link>
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Back to Home
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}
