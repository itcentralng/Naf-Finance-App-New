import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { Dashboard, Receipt, AssignmentTurnedIn, BarChart, Settings, TransferWithinAStation, Monitor } from '@mui/icons-material'; // Import the TransferWithinAStation icon

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/receiptpage">
          <ListItemIcon><Receipt /></ListItemIcon>
          <ListItemText primary="Receipts" />
        </ListItem>
        <ListItem button component={Link} to="/allocationpage">
          <ListItemIcon><AssignmentTurnedIn /></ListItemIcon>
          <ListItemText primary="Allocation" />
        </ListItem>
        <ListItem button component={Link} to="/reallocationpage">
          <ListItemIcon><TransferWithinAStation /></ListItemIcon>
          <ListItemText primary="Reallocation" />
        </ListItem>
        <ListItem button component={Link} to="/monitoringpage">
          <ListItemIcon><Monitor /></ListItemIcon>
          <ListItemText primary="Monitoring" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
