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
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </Routes>
  );
}

export default App;
