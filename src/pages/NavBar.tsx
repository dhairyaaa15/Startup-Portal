import React, { useState } from "react";
import { Box, Button, TextField, InputAdornment, Typography, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import IndiaEmblem from "./gog.jpeg"; // Path to your Indian Emblem image
import AzadiImage from "./azadi.jpg"; // Path to your Azadi image

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
        display: "flex",
        flexDirection: isMobile ? "row" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Left: India Emblem, Written Content, and Azadi Image */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "row" : "row",
          alignItems: "center",
        }}
      >
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <img
          src={IndiaEmblem}
          alt="India Emblem"
          style={{ width: isMobile ? "40px" : "50px", height: "auto", marginRight: isMobile ? "5px" : "10px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start",
            marginRight: isMobile ? "10px" : "10px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Department for Promotion of Industry and Internal Trade
          </Typography>
          <Typography variant="body2">
            Ministry of Commerce and Industry
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Government of India
          </Typography>
        </Box>
        <img
          src={AzadiImage}
          alt="Azadi"
          style={{ width: isMobile ? "60px" : "75px", height: "auto", marginLeft: isMobile ? "5px" : "10px" }}
        />
      </Box>

      {/* Center: Empty Box to Center Align Items */}
      {!isMobile && <Box sx={{ flexGrow: 1 }} />}

      {/* Right: Search and Buttons */}
      {!isMobile ? (
        <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            sx={{
              marginRight: "10px",
              backgroundColor: "#fff",
              flexShrink: 0,
              maxWidth: "200px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            color="primary"
            onClick={() => navigate("/login")}
            sx={{ marginRight: "10px" }}
          >
            Login
          </Button>
          <Button color="primary" onClick={() => navigate("/register")}>
            Register
          </Button>
        </Box>
      ) : (
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{
              width: 250,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '20px',
            }}
          >
            <IconButton onClick={toggleDrawer(false)} sx={{ alignSelf: 'flex-end', marginRight: '20px' }}>
              <CloseIcon />
            </IconButton>
            <List>
              <ListItem button onClick={() => { navigate("/login"); toggleDrawer(false) }}>
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button onClick={() => { navigate("/register"); toggleDrawer(false) }}>
                <ListItemText primary="Register" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default NavBar;
