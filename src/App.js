import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer'

function App()
{
  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
