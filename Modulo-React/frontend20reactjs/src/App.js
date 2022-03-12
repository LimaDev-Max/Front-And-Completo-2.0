import React, { useState, useEffect } from 'react';

function App() {
  const [hora, setHora] = useState(12);
  const [minutos, setMinutos] = useState(20);
  
  useEffect(() => {
    const interval = setInterval(() => {

    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>{hora}:{minutos}</h2>
    </div>
  );
}

export default App;
