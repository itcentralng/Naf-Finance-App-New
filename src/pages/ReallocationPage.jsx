import React, { useState } from 'react';
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';

const ReallocationPage = () => {
  const [currentUnit, setCurrentUnit] = useState('');
  const [receivingUnit, setReceivingUnit] = useState('');
  const [reason, setReason] = useState('');

  const handleCurrentUnitChange = (event) => {
    setCurrentUnit(event.target.value);
  };

  const handleReceivingUnitChange = (event) => {
    setReceivingUnit(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Reallocation submitted:', { currentUnit, receivingUnit, reason });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Re-allocation Page
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="current-unit-select-label">Current Unit</InputLabel>
              <Select
                labelId="current-unit-select-label"
                id="current-unit-select"
                value={currentUnit}
                onChange={handleCurrentUnitChange}
              >
                <MenuItem value={'Unit A'}>Unit A</MenuItem>
                <MenuItem value={'Unit B'}>Unit B</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="receiving-unit-select-label">Receiving Unit</InputLabel>
              <Select
                labelId="receiving-unit-select-label"
                id="receiving-unit-select"
                value={receivingUnit}
                onChange={handleReceivingUnitChange}
              >
                <MenuItem value={'Unit A'}>Unit A</MenuItem>
                <MenuItem value={'Unit B'}>Unit B</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="reason-input"
              label="Reason for Reallocation"
              variant="outlined"
              multiline
              rows={4}
              value={reason}
              onChange={handleReasonChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ReallocationPage;
