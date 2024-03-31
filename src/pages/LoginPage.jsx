import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Link to="/dashboard">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          </Link>
          <Grid container>
            <Grid item xs>
                Forgot password?
            </Grid>
            {/* <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
