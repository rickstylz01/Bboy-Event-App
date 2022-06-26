import './App.css';
import React from 'react';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
