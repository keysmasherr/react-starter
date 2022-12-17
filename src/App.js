import './App.css';
import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";
import { AppProvider } from "./context/app/context";
import "./styles/animate.css";

import AppSnackbar from "./components/common/AppSnackbar";
import { AuthProvider } from "./context/auth/context";
import AppRoutes from './routes';


const AppWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AuthProvider>
          <Box
            sx={{
              background: "white",
              backgroundSize: "contain",
            }}
          >
            <Router>
                <AppRoutes />
            </Router>
          </Box>
          <AppSnackbar />
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
};

export default AppWrapper;
