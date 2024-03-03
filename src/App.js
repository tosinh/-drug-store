import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './Components/Navbar/Navbar';


function App()
{
  return (
    <div className="App">
      <Navbar className='container' />
    </div>
  );
}

export default App;
