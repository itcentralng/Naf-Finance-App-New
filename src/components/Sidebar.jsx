import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { Dashboard, Receipt, AssignmentTurnedIn, BarChart, Settings } from '@mui/icons-material';

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
        <ListItem button component={Link} to="/receipts">
          <ListItemIcon><Receipt /></ListItemIcon>
          <ListItemText primary="Receipts" />
        </ListItem>
        {/* <ListItem button component={Link} to="/allocation">
          <ListItemIcon><AssignmentTurnedIn /></ListItemIcon>
          <ListItemText primary="Allocation" />
        </ListItem>
        <ListItem button component={Link} to="/statistics">
          <ListItemIcon><BarChart /></ListItemIcon>
          <ListItemText primary="Statistics" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem> */}
      </List>
    </Drawer>
  );
}

export default Sidebar;
