import  React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import './App.css';

class App extends Component {
  render() {

    return (
      <BrowserRouter>

        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />} />
            
            <Route exact path="/dashboard" element={<Dashboard />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;