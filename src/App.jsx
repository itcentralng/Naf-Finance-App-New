import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'


function App() {

  

  return (
    <>

      {/* <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/overview"  element={<OverviewSection />} />
          <Route path="/receipts" element={<ReceiptSection />} />
          <Route path="/allocation" element={<AllocationSection />} />
          <Route path="/statistics" element={<StatisticsSection />} />
          <Route path="/settings" element={<SettingsSection />} />
        </Routes>
      </Router> */}

      <Dashboard />
      
    </>
  )
}

export default App
