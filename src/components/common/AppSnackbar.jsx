import { IconButton, Snackbar } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { actions } from "../../context/app/actions";
import { useApp } from "../../context/app/context";

export default function AppSnackbar() {
  const {
    dispatch,
    state: { snackbar },
  } = useApp();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: actions.HIDE_SNACKBAR, message: "" });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        // color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const getAction = () => {
    console.log(snackbar);
    if (snackbar.action.code === "default") {
      return action;
    } else {
      console.log(snackbar.action.content());
      return snackbar.action.content();
    }
  };

  return (
    <div>
      <Snackbar
        sx={{
          ".MuiSnackbarContent-root": {
            backgroundColor: "rgb(255, 244, 229)",
            color: "black",
          },

          ".MuiAlert-message": {
            fontSize: "1.2rem",
          },
        }}
        autoHideDuration={4000}
        open={snackbar.open}
        onClose={handleClose}
        action={getAction()}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        message={snackbar.message}
      >
        {/* <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert> */}
      </Snackbar>
    </div>
  );
}
