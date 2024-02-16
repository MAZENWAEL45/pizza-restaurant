import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes';
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="body" style={{ height: '90vh', overflowY: 'hidden' }} >
          <AnimatedRoutes />
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App