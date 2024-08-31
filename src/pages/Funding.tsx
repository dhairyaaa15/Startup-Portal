import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Funding = () => {
  return (
    <Container>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Funding Opportunities
        </Typography>
        <Typography variant="body1" paragraph>
          Explore various funding options available for startups in Gujarat. We provide financial assistance and support to help you achieve your business goals.
        </Typography>
      </Box>
    </Container>
  );
};

export default Funding;
