import Navbar from './components/Navbar';
import From from './components/From';
//import About from './components/About';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkmode,setDarkmode] = useState('light')
  const toggoler = ()=>{
    if(darkmode ==='light'){
      setDarkmode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setDarkmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <div className="App">
      <Navbar title='Textprops' about = "ABOUT US" mode ={darkmode} toggole = {toggoler}/>
      <From lable='Inter The Text Hear' mode ={darkmode}/>
      {/* <About/> */}
    </div>
  );
}

export default App;
