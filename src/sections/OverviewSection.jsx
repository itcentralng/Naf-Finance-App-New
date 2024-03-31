import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const overviews = [
  {
    id: 1,
    title: "Total Vehicles",
    quantity: 100,
    desc: "Total number of vehicles in the fleet"
  },
  {
    id: 2,
    title: "Total Equipments",
    quantity: 50,
    desc: "Total number of equipments in the fleet"
  },
  {
    id: 3,
    title: "Pending Maintenance",
    quantity: 10,
    desc: "Number of vehicles/equipment pending maintenance."
  }
]

const OverviewSection = () => {
  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        Overview
      </Typography>
      <Grid container spacing={3}>
        {overviews.map((overview) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={overview.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {overview.title}
                  </Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    {overview.quantity}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {overview.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
        
        
      </Grid>
    </div>
  );
}

export default OverviewSection;
