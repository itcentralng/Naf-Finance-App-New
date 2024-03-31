import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const AllocationSection = () => {

  const allocations = [
    {
      id: 1,
      title: "Padding Allocation",
      quantity: 5,
      desc: "Number of vehicles/equipment pending allocation to units."
    },
    {
      id: 2,
      title: "Accepted for Allocation",
      quantity: 10,
      desc: "Number of vehicles/equipment accepted and awaiting allocation."
    },
    {
      id: 3,
      title: "Allocation",
      quantity: 20,
      desc: "Number of vehicles/equipment currently allocated to units."
    },
  ]

  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        Allocation
      </Typography>
      <Grid container spacing={3}>
        {allocations.map((allocation) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={allocation.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {allocation.title}
                  </Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    {allocation.quantity}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {allocation.desc}
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

export default AllocationSection;
