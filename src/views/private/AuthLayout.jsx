import { Box, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthHeader, AuthSidebar } from "../../components";

const layoutContainerStyles = {
  height: "calc(100vh + 16px)",
  flexWrap: "nowrap",
};

const sidebarStyles = {
  height: "100%",
  backgroundColor: "#371a93",
  overflow: "hidden",
};

const mainStyles = {
  backgroundColor: "#F6F6F8",
  flexWrap: "nowrap",
};
function AuthLayout() {
  const [collapse, setCollapse] = useState(true);

  const openMenu = () => {
    setCollapse(false);
  };

  const closeMenu = () => {
    setCollapse(true);
  };

  return (
    <>
      <Grid
        container
        flexDirection={"row"}
        sx={layoutContainerStyles}
        spacing={2}
      >
        <Grid
          item
          component={"aside"}
          sx={{ ...sidebarStyles, flex: collapse ? "1 0 320px" : "0" }}
        >
          <AuthSidebar />
        </Grid>
        <Grid
          item
          container
          component={"main"}
          flexDirection={"column"}
          sx={{...mainStyles, width: collapse ? "calc(100% - 336px)" : "100%"}}
        >
          {/* <Grid item mb={2}> */}
          <AuthHeader openMenu={openMenu} closeMenu={closeMenu} collapse={collapse} />
          {/* </Grid> */}
          <Grid
            item
            sx={{ height: "calc(100vh - 72px)", overflow: "auto" }}
            pt={2}
            pr={2}
          >
            <Outlet></Outlet>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AuthLayout;
