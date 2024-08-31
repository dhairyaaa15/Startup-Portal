import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

const Register = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Full Name"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          label="Email Address"
          margin="normal"
          required
          fullWidth
          autoComplete="email"
        />
        <TextField
          label="Password"
          margin="normal"
          type="password"
          required
          fullWidth
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: '16px' }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
