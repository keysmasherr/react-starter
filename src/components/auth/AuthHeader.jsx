import { Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
// import {
//   getCurrentUser,
// } from "../../context/upcat/context-service";
import UserProfileMenu from "./UserProfileMenu";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useLocation } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "../../config/constants";

const headerStyles = {
  backgroundColor: "#371a93",
  color: "white",
};
function AuthHeader({ openMenu, closeMenu, collapse }) {
  const currentUser = JSON.parse(
    window.localStorage.getItem(LOCAL_STORAGE_KEYS.CURRENT_USER)
  );

  const location = useLocation();
  
  const [pageTitle, setPageTitle] = useState("");

  const toggleMenu = () => {
    if (collapse) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  useEffect(() => {
    // getCurrentUser().then((res) => {
    //   console.log(res);
    //   window.localStorage.setItem(
    //     LOCAL_STORAGE_KEYS.CURRENT_USER,
    //     JSON.stringify(res)
    //   );
    // });
  }, []);


  useEffect(() => {
    const routesMap = {
      "/dashboard": "Dashboard",
    };
    setPageTitle(routesMap[location.pathname]);
  }, [location.pathname]);

  return (
    <Grid
      container
      columnSpacing={4}
      px={1}
      py={2}
      alignItems={"center"}
      sx={headerStyles}
    >
      <Grid item display={"flex"} alignItems={"center"}>
          <IconButton onClick={toggleMenu}>
            <MenuOutlinedIcon color={"lighter"} sx={{ fontSize: "2rem" }} />
          </IconButton>
        <Typography variant="h2" fontFamily={"gBold"} pl={2}>
          {pageTitle}
        </Typography>
      </Grid>
      <Grid item ml="auto" pr={3}>
        <UserProfileMenu />
      </Grid>
    </Grid>
  );
}

export default AuthHeader;
