import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OverviewSection from '../sections/OverviewSection';
import ReceiptSection from '../sections/ReceiptSection';
import AllocationSection from '../sections/AllocationSection';
import StatisticsSection from '../sections/StatisticsSection';
import SettingsSection from '../sections/SettingsSection';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle, Dashboard, Receipt, AssignmentTurnedIn, BarChart, Settings } from '@mui/icons-material';

const sections = [
  { text: 'Overview', icon: <Dashboard />, path: '/', element: <OverviewSection /> },
  { text: 'Receipt', icon: <Receipt />, path: '/receipts', element: <ReceiptSection /> },
  { text: 'Allocation', icon: <AssignmentTurnedIn />, path: '/allocation', element: <AllocationSection /> },
  { text: 'Statistics', icon: <BarChart />, path: '/statistics', element: <StatisticsSection /> },
  { text: 'Settings', icon: <Settings />, path: '/settings', element: <SettingsSection /> },
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
    <Router>
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
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
        <Toolbar>
          {sections.map((section, index) => (
            <IconButton key={index} color="inherit" component={Link} to={section.path}>
              {section.icon}
            </IconButton>
          ))}
        </Toolbar>
        <Routes>
          {sections.map((section, index) => (
            <Route key={index} path={section.path} element={section.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default DashboardLayout;
