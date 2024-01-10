// Home.jsx
import React, { useState } from 'react';

const Home = () => {
  const [amount, setAmount] = useState(0);

  const handleWaterConsumption = (amount) => {
    fetch('http://localhost:8000/update_water_consumption/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': window.csrf_token,
      },
      body: JSON.stringify({ amount }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data.message);
    })
    .catch(error => {
      console.error('Error updating water consumption:', error);  
      response.text().then(text => {
        console.error('Full response:', text);
      });
    });
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
