import React, { useState } from 'react';

function App() {
  // const now = new Date().toLocaleTimeString('en-GB');

  const [time, setTime] = useState('00:00:00');

  function updateTime() {
    const newTime = new Date().toLocaleTimeString('en-GB');
    setTime(newTime);
  }

  function startClock() {
    setInterval(updateTime, 1000);
  }

  return (
    <div className="container">
      <button onClick={updateTime}>Get Time</button>
      <h1> {time} </h1>
      <button onClick={startClock}>Start Clock</button>
    </div>
  );
}

export default App;

//button own component?

