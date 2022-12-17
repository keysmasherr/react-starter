import {
  Avatar,
  Box,
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Logout } from "@mui/icons-material";
import { logout } from "../../context/auth/context-service";
import { useNavigate } from "react-router-dom";

function UserProfileMenu() {
  const user = JSON.parse(window.localStorage.getItem("currentUser"));
  
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // const { dispatch } = useApp();

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Profile">
          <>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                textTransform: "capitalize",
                borderRadius: "8px",
              }}
            >
              {user.email.charAt(0)}
            </Avatar>
            <Box ml={1.5} sx={{ textAlign: "left" }}>
              <Typography
                color={"lighter"}
                textTransform={"capitalize"}
                fontSize="1.2rem"
              >
                {user.email.split("@")[0]}
              </Typography>
            </Box>
          </>
        </Tooltip>
        <Button
          onClick={handleClick}
          size="small"
          variant="profile-btn"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <KeyboardArrowDownIcon fontSize={"large"} size={"large"} />
        </Button>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            logout(navigate);
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserProfileMenu;
