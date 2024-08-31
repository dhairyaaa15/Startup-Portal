import React from "react";
import { Box, Typography, Link } from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Map as MapIcon,
} from "@mui/icons-material";

const Footer: React.FC = () => ( //React.FC is used to to defined functional component in TypeScript.
  <Box
    sx={{
      bgcolor: "#2c3e50",
      padding: { xs: "10px", sm: "20px" },
      color: "white",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      zIndex: 1000,
    }}
  >
    <Typography variant="h6" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
      CONTACT US
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "15px",
        width: "100%",
        px: { xs: "10px", sm: "20px" },
        boxSizing: "border-box",
        gap: { xs: "10px", sm: "20px" }, // Add space between items
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: { xs: "5px 0", sm: "0 15px" },
        }}
      >
        <MapIcon sx={{ marginRight: "8px" }} />
        <Typography variant="body2">Vadodara , Gujarat</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: { xs: "5px 0", sm: "0 15px" },
        }}
      >
        <PhoneIcon sx={{ marginRight: "8px" }} />
        <Typography variant="body2">1234567890 / 1800-000-1800</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: { xs: "5px 0", sm: "0 15px" },
        }}
      >
        <EmailIcon sx={{ marginRight: "8px" }} />
        <Typography variant="body2">
          <Link href="mailto:stg.com" color="inherit">
            stg.com
          </Link>
        </Typography>
      </Box>
    </Box>
    <Typography variant="body2" sx={{ fontSize: "0.75rem", marginTop: "20px" }}>
      © 2024 Government of Gujarat. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;