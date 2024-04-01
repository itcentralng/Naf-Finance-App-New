import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { AccountCircle, Dashboard, Receipt, AssignmentTurnedIn, BarChart, Settings } from '@mui/icons-material';
import OverviewSection from '../sections/OverviewSection';
import ReceiptSection from '../sections/ReceiptSection';
import AllocationSection from '../sections/AllocationSection';
import StatisticsSection from '../sections/StatisticsSection';
import SettingsSection from '../sections/SettingsSection';

const sections = [
  { text: 'Overview', icon: <Dashboard />, path: '/' },
  { text: 'Receipt', icon: <Receipt />, path: '/receipts' },
  { text: 'Allocation', icon: <AssignmentTurnedIn />, path: '/allocation' },
  { text: 'Statistics', icon: <BarChart />, path: '/statistics' },
  { text: 'Settings', icon: <Settings />, path: '/settings' },
];

const DashboardLayout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ padding: 20}}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {sections.map((section, index) => (
            <Tooltip title={section.text} key={index}>
              <IconButton color="inherit" component={Link} to={section.path}>
                {section.icon}
              </IconButton>
            </Tooltip>
          ))}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Add a spacer to push content below the app bar */}
      <Toolbar />
      <Routes>
        <Route path="/" element={<OverviewSection />} />
        <Route path="/receipts" element={<ReceiptSection />} />
        <Route path="/allocation" element={<AllocationSection />} />
        <Route path="/statistics" element={<StatisticsSection />} />
        <Route path="/settings" element={<SettingsSection />} />
      </Routes>
    </div>
  );
}

export default DashboardLayout;
