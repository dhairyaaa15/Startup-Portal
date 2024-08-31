import React from "react";
import { Box, Typography, Container } from "@mui/material";

const PatentApplication = () => {
  return (
    <Container>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Patent Application
        </Typography>
        <Typography variant="body1" paragraph>
          Find information on how to file your patents easily. We provide guidance and support to help you through the patent application process.
        </Typography>
      </Box>
    </Container>
  );
};

export default PatentApplication;
