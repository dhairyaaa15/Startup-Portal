import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      bgcolor: "#2c3e50",
      padding: "20px",
      textAlign: "center",
      color: "white",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      boxSizing: "border-box", // Ensure padding is included in the width calculation
    }}
  >
    <Typography variant="body2" sx={{ fontSize: "1rem" }}>
      © 2024 Government of Gujarat. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
