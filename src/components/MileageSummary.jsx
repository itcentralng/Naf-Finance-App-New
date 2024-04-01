import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MileageSummary = ({ totalMileage }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Total Mileage Covered
        </Typography>
        <Typography variant="h3" component="p">
          {totalMileage} miles
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MileageSummary;
