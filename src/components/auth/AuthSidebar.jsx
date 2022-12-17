import { Box, Icon, Typography } from "@mui/material";
import React from "react";
import brandLight from "../../assets/images/brand-light.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const listItemStyles = {
  fontSize: "1.6rem",
  color: "#fff",

  a: {
    color: "white",
    textDecoration: "none",
    px: 4,
    py: 2,
    display: "inline-flex",
    width: "100%",
    lineHeight: "2.2rem",
    fontWeight: "bold",
    ".MuiIcon-root": {
      color: "#9472FF",
      marginRight: 1,
      fontSize: "2.2rem",
      lineHeight: "2.2rem",
      svg: {
        lineHeight: "2.2rem",
        fontSize: "2.2rem",
      }
    },
    "&.active": {
      backgroundColor: "#815AFD",
      ".MuiIcon-root": {
        color: "#FFF",
      }
    },
    "&:hover": {

    }
  },
};

const listTitleStyles = {
  fontSize: "1.8rem",
  color: "#fff",
  fontFamily: "gBold",
  pl: 2,
  py: 2,
};
const user = JSON.parse(window.localStorage.getItem("currentUser"));
  const upcatPlan = user?.subscriptions.find((sub) => {
    return sub.serviceId === "upcat";
  });
function AuthSidebar() {
  const menuItems = [
    {
      title: "Main",
      path: "",
      children: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <DashboardIcon />,
        },
        // {
        //   title: "Profile",
        //   path: "/profile",
        //   icon: <PersonIcon />,
        // },
        {
          title: "Purchases",
          path: "/purchases",
          icon: <ShoppingCartOutlinedIcon />,
        },
        {
          title: "Upgrade",
          path: `/final-pricing?currentPlanId=${upcatPlan?.plan?.planId}`,
          icon: <UpgradeIcon />,
        },
      ],
    },
    {
      title: "Help",
      path: "",
      children: [
        {
          title: "Support",
          path: "/support",
          icon: <HeadphonesIcon />,
        },
      ],
    },
  ];

  return (
    <>
      <Box>
        <a href="/" style={{ display: "inline-block" }}>
          <img alt="upcat" src={brandLight} />
        </a>
      </Box>
      <Box component={"ul"}>
        {menuItems.map(({ title, children }, index) => (
          <li key={index}>
            <Typography variant={"h4"} sx={listTitleStyles}>
              {title}
            </Typography>
            <Box component={"ul"}>
              {children.map(({ title, path, icon }, index) => (
                <Typography key={index} sx={listItemStyles} component={"li"}>
                  <NavLink to={path}>
                    <Icon>{icon}</Icon>
                    {title}
                  </NavLink>
                </Typography>
              ))}
            </Box>
          </li>
        ))}
      </Box>
    </>
  );
}

export default AuthSidebar;
