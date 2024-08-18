import * as React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import Menu from "@mui/material/Menu";
import LogoImg from "../Images/Logo-site.png";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const logoStyle = {
  width: "84px",
  // height: "auto",
  maxHeight: "64px",
  paddingLeft: "32px",
  cursor: "pointer",
};

function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        width="1105px"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Toolbar variant="regular">
          <Box
            className="navbarBigScreen"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "-18px",
              px: 0,
            }}
            justifyContent={"space-between"}
          >
            <Link to="/">
              <img src={LogoImg} style={logoStyle} alt="logo of sitemark" />
            </Link>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <MenuItem>
                <NavLink className="navitem" to="/">
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem>
                {/* sx={{ py: "6px", px: "12px" }} */}
                <NavLink className="navitem" to="/about">
                  About
                </NavLink>
              </MenuItem>
            </Box>
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <MenuIcon sx={{backgroundColor: "#32620E"}}  />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                className="navbarSmallScreen"
                sx={{
                  minWidth: "60dvw",
                  p: 2,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                }}
              >
                <MenuItem>
                  <NavLink to="/">Home</NavLink>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <NavLink to="/about">About</NavLink>
                </MenuItem>
                <Divider />
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
