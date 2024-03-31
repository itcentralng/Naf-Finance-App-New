import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import ReceiptPage from './pages/ReceiptPage'
import Sidebar from './components/Sidebar'


function App() {

  

  return (
    <>
      {/* <Sidebar /> */}
      <Dashboard />
      {/* <ReceiptPage /> */}
      
    </>
  )
}

export default App
