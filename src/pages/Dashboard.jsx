import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OverviewSection from '../sections/OverviewSection';
import ReceiptSection from '../sections/ReceiptSection';
import AllocationSection from '../sections/AllocationSection';
import StatisticsSection from '../sections/StatisticsSection';
import SettingsSection from '../sections/SettingsSection';
import { AppBar, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Divider } from '@mui/material';
import { AccountCircle, Dashboard, Receipt, AssignmentTurnedIn, BarChart, Settings } from '@mui/icons-material';
import { styled } from '@mui/system';

const drawerWidth = 240;

const DrawerHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '0 8px',
  justifyContent: 'flex-end',
});

const MainContent = styled('div')({
  marginLeft: drawerWidth,
  padding: '24px',
});

const DashboardLayout = () => {
  return (
    <Router>
      <div>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap style={{marginLeft: drawerWidth}}>
              Dashboard
            </Typography>
            <AccountCircle style={{ marginLeft: 'auto' }} />
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <DrawerHeader />
          <Divider />
          <List>
            {[
              { text: 'Overview', icon: <Dashboard />, path: '/' },
              { text: 'Receipt', icon: <Receipt />, path: '/receipts' },
              { text: 'Allocation', icon: <AssignmentTurnedIn />, path: '/allocation' },
              { text: 'Statistics', icon: <BarChart />, path: '/statistics' },
              { text: 'Settings', icon: <Settings />, path: '/settings' },
            ].map((item, index) => (
              <ListItem button key={index} component="a" href={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <MainContent>
          <Toolbar />
          <Routes>
          <Route path="/" exact element={<OverviewSection />} />
          <Route path="/receipts" element={<ReceiptSection />} />
          <Route path="/allocation" element={<AllocationSection />} />
          <Route path="/statistics" element={<StatisticsSection />} />
          <Route path="/settings" element={<SettingsSection />} />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
}

export default DashboardLayout;
