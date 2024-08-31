import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

const Login = () => {
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
          Login
        </Typography>
        <TextField
          label="Email Address"
          margin="normal"
          required
          fullWidth
          autoComplete="email"
          autoFocus
        />
        <TextField
          label="Password"
          margin="normal"
          type="password"
          required
          fullWidth
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: '16px' }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
