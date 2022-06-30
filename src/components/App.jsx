import React, { useState } from 'react';

function App() {
  // const now = new Date().toLocaleTimeString('en-GB');

  const [time, setTime] = useState('00:00:00');

  function upDateTime() {
    const newTime = new Date().toLocaleTimeString('en-GB');
    setTime(newTime);
  }

  return (
    <div className="container">
      <button onClick={upDateTime}>Get Time</button>
      <h1> {time} </h1>
      <button>Start Clock</button>
    </div>
  );
}

export default App;

//button own component?

