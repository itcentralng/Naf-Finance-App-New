import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const ReceiptSection = () => {
  const receipts = [
    { id: 1, date: '2024-03-30', supplier: 'ABC Motors', contractRef: 'CR1234', remarks: 'Initial procurement' },
    { id: 2, date: '2024-03-25', supplier: 'XYZ Equipments', contractRef: 'CR5678', remarks: 'Additional equipment' },
  ];

  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        Receipts
      </Typography>
      <Grid container spacing={3}>
        {receipts.map((receipt) => (
          <Grid item key={receipt.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Date: {receipt.date}
                </Typography>
                <Typography variant="body1" component="p">
                  Supplier: {receipt.supplier}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Contract Reference: {receipt.contractRef}
                </Typography>
                <Typography variant="body2" component="p">
                  Remarks: {receipt.remarks}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ReceiptSection;
