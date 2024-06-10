import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const Cabecera = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleInicio = () => {
    navigate("/");
  };
  const handleComidas = () => {
    navigate("/comidas");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Avatar
              alt=""
              src="https://robohash.org/pedro"
              sx={{ width: 106, height: 106 }}
            />

            <Button
              id="demo-positioned-button"
              sx={{ color: "white" }}
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
              Menu
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}>
              <MenuItem onClick={handleComidas}>Comidas</MenuItem>
              <MenuItem onClick={handleClose}>Contactar</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleInicio}>
              Inicio
            </Button>
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
