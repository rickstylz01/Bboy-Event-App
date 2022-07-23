import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
