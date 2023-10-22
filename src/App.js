import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLightOn, setIsLightOn] = useState(false);

  const turnOnLight = async () => {
    // Your code to turn on the light
    setIsLightOn(true);
  };

  const turnOffLight = async () => {
    // Your code to turn off the light
    setIsLightOn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={turnOnLight} className="rotate">Turn On Light</button>
        <button onClick={turnOffLight} className="scale">Turn Off Light</button>
      </header>
    </div>
  );
}

export default App;
