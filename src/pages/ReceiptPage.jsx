import React from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ReceiptPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Vehicle/Equipment Receipt
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="make"
                label="Make"
                name="make"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="model"
                label="Model"
                name="model"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="type"
                label="Type"
                name="type"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="year"
                label="Year"
                name="year"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="chassisNumber"
                label="Chassis Number"
                name="chassisNumber"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="engineNumber"
                label="Engine Number"
                name="engineNumber"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="supplier"
                label="Supplier"
                name="supplier"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="contractReference"
                label="Contract Reference/Authority"
                name="contractReference"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="dateOfReceipt"
                label="Date of Receipt"
                name="dateOfReceipt"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="remarks"
                label="Remarks"
                name="remarks"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Allocation Status</InputLabel>
                <Select
                  label="Allocation Status"
                  defaultValue="notAllocated"
                  name="allocationStatus"
                >
                  <MenuItem value="notAllocated">Not Allocated</MenuItem>
                  <MenuItem value="allocated">Allocated</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ReceiptPage;
