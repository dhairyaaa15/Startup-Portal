import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Schemes = () => {
  return (
    <Container>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Schemes
        </Typography>
        <Typography variant="body1" paragraph>
          Discover various schemes and initiatives designed to support startups in Gujarat. Our schemes aim to provide various benefits to help your startup thrive.
        </Typography>
      </Box>
    </Container>
  );
};

export default Schemes;
