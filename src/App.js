import React from 'react';
import './App.css';

import Canvas from './components/Canvas'



function App() {

  const appStyle = {
 
    background: 'linear-gradient(0deg, black, white, lightgrey ,grey, darkgrey 99%,black )',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%'

  }
  return (
    <div className="App" style={appStyle}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'2%',  filter:'drop-shadow(10px 10px 10px black)'}}>
 
        </div>
        {/* <Generator /> */}
        <Canvas/>
      </div>
    </div>
  );
}

export default App;
