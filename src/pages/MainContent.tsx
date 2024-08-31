import React from "react";
import { Box, Typography } from "@mui/material";
import AutoSwipingCards from "./AutoSwipingCards";

const MainContent = () => (
  <Box sx={{ padding: "20px", textAlign: "center" }}>
    <AutoSwipingCards />
    <Typography variant="h6" sx={{ marginTop: "20px" }}>
      - What is StartupGujarat
      <br />- Benefits to register here
    </Typography>
  </Box>
);

export default MainContent;
