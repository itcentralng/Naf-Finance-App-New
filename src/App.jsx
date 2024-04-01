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
            <Route path="/receiptpage" element={<ReceiptPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
