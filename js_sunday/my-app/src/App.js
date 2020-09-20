import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { myUseState } from './myUseState';

function App() {
  let [clicks,setClicks]= myUseState(0)
  console.dir(myUseState)
  return (
    <div className="App">
      <h2>{clicks}</h2>
      <button onClick={()=>setClicks(clicks+1)}>+</button>
    </div>
  );
}

export default App;
