import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from './Pages/RegistrationPage';

import "./App.css";
import Otp from './Pages/Otp';
import ResetPassPage from './Pages/ResetPassPage';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/register" element={<RegistrationPage />} />
          <Route exact path="/otp" element={<Otp />} />
          <Route
            exact
            path="/resetyourpass/:id/:token"
            element={<ResetPassPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App

