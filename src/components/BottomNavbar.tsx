import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  IconButton,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
  InputAdornment,
} from "@mui/material";
import { Search, Menu, Close } from "@mui/icons-material";
import IndiaEmblem from "../images/gog.jpeg";
import AzadiImage from "../images/azadi.jpg";

const BottomNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        flexDirection: "column",
        padding: "10px 20px",
      }}
    >
      {/* Top Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: India Emblem, Text, and Azadi Image */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile && (
            <IconButton onClick={toggleDrawer(true)} sx={{ display: { xs: "block", sm: "none" } }}>
              <Menu />
            </IconButton>
          )}
          <img
            src={IndiaEmblem}
            alt="India Emblem"
            style={{ width: isMobile ? "40px" : "50px", marginRight: "10px" }}
          />
          <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Department for Promotion of Industry and Internal Trade
            </Typography>
            <Typography variant="body2">Ministry of Commerce and Industry</Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Government of India
            </Typography>
          </Box>
          <img
            src={AzadiImage}
            alt="Azadi"
            style={{ height: "100px", width: "auto", marginLeft: "10px" }}
          />
        </Box>

        {/* Right: Search and Buttons */}
        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              sx={{ marginRight: "10px", backgroundColor: "#fff" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <Button color="primary" sx={{ marginRight: "20px", padding: "8px 16px" }}>
              Login
            </Button>
            <Button color="primary" sx={{ padding: "8px 16px" }}>
              Register
            </Button>
          </Box>
        ) : (
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250, padding: "20px", textAlign: "center" }}>
              <IconButton onClick={toggleDrawer(false)} sx={{ alignSelf: "flex-end" }}>
                <Close />
              </IconButton>
              <Button color="primary" sx={{ marginBottom: "10px", padding: "8px 16px" }}>
                Login
              </Button>
              <Button color="primary" sx={{ padding: "8px 16px" }}>
                Register
              </Button>
            </Box>
          </Drawer>
        )}
      </Box>

      {/* Bottom Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <Button sx={{ flex: 1, margin: "0 10px" }}>About</Button>
        <Button sx={{ flex: 1, margin: "0 10px" }}>Funding</Button>
        <Button sx={{ flex: 1, margin: "0 10px" }}>Patent Application</Button>
        <Button sx={{ flex: 1, margin: "0 10px" }}>Schemes</Button>
        <Button sx={{ flex: 1, margin: "0 10px" }}>Meetups</Button>
      </Box>
    </Box>
  );
};

export default BottomNavbar;
