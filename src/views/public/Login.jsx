import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
  useMediaQuery
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../context/auth/context-service";
import { pageWrapper } from "../../styles";
import "../../styles/login.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@emotion/react";
import { useApp } from "../../context/app/context";
import useForm from "../../config/hooks/useForm"; 

function Login() {
  const appDispatch = useApp().dispatch;
  const navigate = useNavigate();

  const theme = useTheme();
  const aboveLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [loading, setLoading] = useState(false);

  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (ev) => {
    ev.preventDefault();

    let isInvalid = false;

    if (values.email.trim() === "") {
      setErrors({ ...errors, email: "Please enter email." });
      isInvalid = true;
      return;
    }
    if (values.password.trim() === "") {
      setErrors({ ...errors, password: "Please enter password." });
      isInvalid = true;
      return;
    }

    if (!isInvalid) {
      login(values, appDispatch, navigate);
    }
  };

  return (
    
      <Box sx={{ ...pageWrapper, backgroundColor: "#1b155b" }}>
        <Card
          className={"login-card"}
          component="form"
          onSubmit={handleLogin}
          noValidate
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            padding={2}
            textAlign="center"
            className={"signup-link"}
          >
            Not a member?
            <Link to="/pricing" style={{ marginLeft: "6px" }}>
              Sign up
            </Link>
          </Typography>
          <div className={"form-container"}>
            <Typography
              fontFamily={"gBold"}
              variant="h1"
              mb={6}
              className={"form-heading"}
            >
              Sign in
            </Typography>
            <Typography
              textAlign={"left"}
              pl={2}
              variant="h6"
              mb={2}
              className={"form-heading"}
            >
              Sign in with open options
            </Typography>
            <div
              id="g-signin2"
              data-onsuccess="onSignIn"
              style={{ paddingLeft: "16px" }}
            ></div>
            <hr className={"form-divider"} />
            <Typography pl={2} mt={3} mb={2}>
              Or continue with email address
            </Typography>
            <CardContent>
              <Grid container spacing={4} direction="column">
                <Grid item>
                  <TextField
                    fullWidth
                    required
                    name="email"
                    id="email"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    error={errors.email !== ""}
                    helperText={errors.email}
                    value={values.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    required
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    error={errors.password !== ""}
                    helperText={errors.password}
                    value={values.password}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions
              sx={{ padding: "16px" }}
              className={"form-btn-container"}
            >
              <Button fullWidth type="submit" variant="site-cta">
                Continue
                <ArrowRightAltIcon sx={{ ml: 2 }} />
              </Button>
            </CardActions>
          </div>
        </Card>
        {/* <Footer bgColor={!aboveLg ? "white" : 'transparent'} /> */}
      </Box>
  );
}

export default Login;
