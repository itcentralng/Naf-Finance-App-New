import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { lifespanData } from './data';

const LifespanTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Purchase Date</TableCell>
          <TableCell>Expected Lifespan</TableCell>
          <TableCell>Remaining Lifespan</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {lifespanData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.purchaseDate}</TableCell>
            <TableCell>{item.expectedLifespan}</TableCell>
            <TableCell>{item.remainingLifespan}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default LifespanTable;
