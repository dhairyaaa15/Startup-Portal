import React from "react";
import { Tabs, Tab, Box, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate("/about");
        break;
      case 1:
        navigate("/funding");
        break;
      case 2:
        navigate("/patent-application");
        break;
      case 3:
        navigate("/schemes");
        break;
      case 4:
        navigate("/meetups");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
        [theme.breakpoints.down("sm")]: {
          padding: "0 10px", // Add padding on smaller screens
        },
      }}
    >
      <Tabs
        centered={!isMobile}
        orientation={isMobile ? "vertical" : "horizontal"} // Stack tabs vertically on mobile
        textColor="primary"
        indicatorColor="primary"
        onChange={handleTabChange}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Stack tabs vertically on mobile
        }}
      >
        <Tab label="About" />
        <Tab label="Funding" />
        <Tab label="Patent Application" />
        <Tab label="Schemes" />
        <Tab label="Meetups" />
      </Tabs>
    </Box>
  );
};

export default NavBar;
