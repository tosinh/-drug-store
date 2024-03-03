import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './Components/Navbar/Navbar';
import { Banner } from './Components/Banner/Banner';

function App()
{
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
