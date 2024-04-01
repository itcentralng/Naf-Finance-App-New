import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar"
import OverviewSection from './sections/OverviewSection';
import ReceiptSection from './sections/ReceiptSection';
import AllocationSection from './sections/AllocationSection';
import StatisticsSection from './sections/StatisticsSection';
import SettingsSection from './sections/SettingsSection';
import Dashboard from "./pages/Dashboard"
import ReceiptPage from "./pages/ReceiptPage"
import LoginPage from "./pages/LoginPage"
import AllocationPage from './pages/AllocationPage';
import ReallocationPage from './pages/ReallocationPage';
import MonitoringPage from './pages/MonitoringPage';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<OverviewSection />} />
            <Route path="/receipts" element={<ReceiptSection />} />
            <Route path="/allocation" element={<AllocationSection />} />
            <Route path="/statistics" element={<StatisticsSection />} />
            <Route path="/settings" element={<SettingsSection />} />
            </Route>
            <Route path="/receiptpage" element={<ReceiptPage />} />
            <Route path="/allocationpage" element={<AllocationPage />} />
            <Route path="/reallocationpage" element={<ReallocationPage />} />
            <Route path="/monitoringpage" element={<MonitoringPage />} />
          
        </Routes>
      </div>
    </Router>
    // <MonitoringPage />
  );
}

export default App;
