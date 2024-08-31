import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#2c3e50" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left: Government of India */}
        <Typography variant="h6" sx={{ color: "white" }}>
          Government of India
        </Typography>

        {/* Center: Startup Gujarat */}
        <Typography variant="h6" sx={{ textAlign: "center", flexGrow: 1, color: "white" }}>
          Startup Gujarat
        </Typography>

        {/* Right: Office Time and Toll Free Number */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="body1" sx={{ marginBottom: "5px", color: "white" }}>
            Office Time: 10:30 AM - 5:30 PM
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            Toll Free Number: 1234567890
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
