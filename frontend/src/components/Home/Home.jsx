// Home.jsx
import React, { useState } from 'react';

const Home = () => {
  const [amount, setAmount] = useState(0);

  // TODO: connect to database
  // TODO: create logic that refreshes water intake at the end of every day
  const handleWaterConsumption = (amount) => {
    fetch('http://127.0.0.1:8000/api/water/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': window.csrf_token,
  },
  body: JSON.stringify({ amount }),
    })
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Amount of water consumed: {amount} ounces</p>
      <button onClick={() => handleWaterConsumption(8)}>Drink 8 ounces</button>
      <button onClick={() => handleWaterConsumption(12)}>Drink 12 ounces</button>
      <button onClick={() => handleWaterConsumption(24)}>Drink 24 ounces</button>
      <button onClick={() => handleWaterConsumption(32)}>Drink 32 ounces</button>
    </div>
  );
};

export default Home;
