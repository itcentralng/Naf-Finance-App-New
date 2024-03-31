import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const StatisticsSection = () => {

  const statistics = [
    {
      id: 1,
      title: "Total Vehicles",
      quantitiy: 200,
      desc: "Total number of vehicles in all units."
    },
    {
      id: 2,
      title: "Total Equipment",
      quantitiy: 100,
      desc: "Total number of equipment in all units."
    },
    {
      id: 3,
      title: "Total Vehicles",
      quantitiy: "",
      desc: "Distribution of vehicles by make."
    },
  ]

  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        Statistics
      </Typography>
      <Grid container spacing={3}>

        {statistics.map((statistic) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={statistic.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {statistic.title}
                  </Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    {statistic.quantitiy}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {statistic.desc}
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

export default StatisticsSection;
