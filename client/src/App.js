import './App.css';
import React from 'react';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import {Route, Routes} from "react-router-dom";
import Register from "./components/auth/Login";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <Routes>
      <Route element={<Navbar/>} >
        <Route exact path="/" element={Landing} />
        <Route exact path="/register" element={Register} />
        <Route exact path="/login" element={Login} />
      </Route>
    </Routes>
  );
}

export default App;
