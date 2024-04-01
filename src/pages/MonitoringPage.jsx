import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import LifespanTable from '../components/LifespanTable';
import StatisticsChart from '../components/StatisticsChart';
import MileageSummary from '../components/MileageSummary';

const MonitoringPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Monitoring Page
      </Typography>
      

      <Typography variant="h6" gutterBottom>
        Vehicle/Equipment Lifespan
      </Typography>
      <LifespanTable />

      <Grid container spacing={3} style={{ marginTop: 20}}>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Statistics
          </Typography>
          <StatisticsChart />
        </Grid>


        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Mileage Summary
          </Typography>
          <MileageSummary />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MonitoringPage;
