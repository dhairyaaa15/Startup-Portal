import React from "react";
import { Box, Typography, Container } from "@mui/material";

const About = () => {
  return (
    <Container>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the Government of Gujarat's Startup Portal. Here, you can find information about various initiatives, funding opportunities, and more. Our goal is to support and promote startups across Gujarat.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
