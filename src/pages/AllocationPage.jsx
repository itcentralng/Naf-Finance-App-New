import React, { useState } from 'react';
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { AssignmentInd, CheckCircle, HourglassEmpty } from '@mui/icons-material';

const AllocationPage = () => {
  const [vehicles] = useState([
    { id: 1, name: 'Vehicle 1', type: 'Car', model: 'Toyota Camry', status: 'Pending Acceptance' },
    { id: 2, name: 'Vehicle 2', type: 'Truck', model: 'Ford F-150', status: 'Accepted/Taken on Charge' },

  ]);

  const [selectedUnit, setSelectedUnit] = useState('');

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Allocation Page
      </Typography>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="unit-select-label">Select Unit</InputLabel>
            <Select
              labelId="unit-select-label"
              id="unit-select"
              value={selectedUnit}
              onChange={handleUnitChange}
            >
              <MenuItem value={'Unit A'}>Unit A</MenuItem>
              <MenuItem value={'Unit B'}>Unit B</MenuItem>

            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {vehicles.map((vehicle) => (
          <Grid item key={vehicle.id} xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {vehicle.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {`${vehicle.type} - ${vehicle.model}`}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Status:
                </Typography>
                <Typography variant="body2" color={vehicle.status === 'Pending Acceptance' ? 'primary' : 'success'}>
                  {vehicle.status}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<AssignmentInd />} disabled={!selectedUnit}>
                  Assign
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllocationPage;
