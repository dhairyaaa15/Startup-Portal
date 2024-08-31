import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Meetups = () => {
  return (
    <Container>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Meetups
        </Typography>
        <Typography variant="body1" paragraph>
          Join upcoming meetups and networking events organized to connect startups, entrepreneurs, and industry experts. Stay informed and engaged with the startup community in Gujarat.
        </Typography>
      </Box>
    </Container>
  );
};

export default Meetups;
