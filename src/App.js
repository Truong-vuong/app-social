import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <div className='App'>
      <div className='blur' style={{ top: "-18%", right: "0" }}></div>
      <div className='blur' style={{ top: "38%", left: "-8rem" }}></div>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
