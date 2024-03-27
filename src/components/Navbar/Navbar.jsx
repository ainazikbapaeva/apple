import React from "react";
import { Box, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AdminPanel from "../Admin/AdminPanel";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  const { searchProduct } = useProduct();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  return (
    <Box id="header">
      <Box className="container">
        <Box className="header">
          <IconButton onClick={() => navigate("/admin")}>
            <AdminPanel />
          </IconButton>
          <AppleIcon
            onClick={() => navigate("/iphone")}
            sx={{
              cursor: "pointer",
            }}
          />
          <Typography
            onClick={() => {
              navigate("/list");
            }}
            sx={{ fontSize: "13px", cursor: "pointer" }}
          >
            Store
          </Typography>
          <Typography onClick={()=> {
            navigate("/mac")
          }} sx={{ fontSize: "13px", cursor: "pointer" }}>
            Mac
          </Typography>
          <Typography sx={{ fontSize: "13px", cursor: "pointer" }}>
            iPad
          </Typography>
          <Typography sx={{ fontSize: "13px", cursor: "pointer" }}>
            iPnone
          </Typography>
          <Typography sx={{ fontSize: "13px", cursor: "pointer" }}>
            Watch
          </Typography>
          <Typography sx={{ fontSize: "13px", cursor: "pointer" }}>
            Vision
          </Typography>
          <Typography sx={{ fontSize: "13px", cursor: "pointer" }}>
            AirPost
          </Typography>
          <Typography sx={{ fontSize: "13px", cursor: "pointer" }}>
            TV & Home
          </Typography>
          <Typography sx={{ fontSize: "13px", cursor: "pointer" }}>
            Entertaiment
          </Typography>
          <Typography sx={{ fontSize: "13px", cursor: "pointer" }}>
            Accessories
          </Typography>
          <Typography sx={{ fontSize: "13px", cursor: "pointer" }}>
            Support
          </Typography>
          <Search
            onChange={(e) => searchProduct(e.target.value)}
            sx={{
              color: "black",
              backgroundColor: "white",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <WorkOutlineIcon sx={{ cursor: "pointer" }} />
          <Toolbar
            sx={{
              position: "relative",
              right: "30px",
            }}
          >
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    // horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/sognin");
                    }}
                  >
                    Sogn In
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/sognup")
                    }}
                  >
                    Sogn Up
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
