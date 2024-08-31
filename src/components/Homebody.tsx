import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const TopNavbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#2c3e50" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Government of India */}
        <Typography variant="h6" sx={{ color: "white" }}>
          Government of India
        </Typography>

        {/* Startup Gujarat */}
        <Typography variant="h6" sx={{ textAlign: "center", color: "white" }}>
          Startup Gujarat
        </Typography>

        {/* Office Time and Toll-Free Number */}
        <Box sx={{ textAlign: "right", color: "white" }}>
          <Typography variant="body1">Office Time: 10:30 AM - 5:30 PM</Typography>
          <Typography variant="body1">Toll Free: 1234567890</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;