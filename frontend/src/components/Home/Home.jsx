import React, { useEffect, useState } from 'react';

const Home = () => {
  const [quote, setQuote] = useState('');
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const handleWaterConsumption = (amount) => {
    setAmount(amount);
  };

  const handleSubmit = () => {
    fetch('http://localhost:8000/api/water/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `f84bd1e4f5da4c1db8ddb22c83231bc392311109`,
      },
      body: JSON.stringify({ ounces: amount }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        // TODO: Handle UI update?
      })
      .catch(error => {
      });
  };

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();

      setQuote(data.message);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <head>
    <meta name="csrf-token" content="{% csrf_token %}" />
      </head>
      <br />
      <p>Amount of water consumed: {amount} ounces</p>
      <button onClick={() => handleWaterConsumption(8)}>Drink 8 ounces</button>
      <button onClick={() => handleWaterConsumption(12)}>Drink 12 ounces</button>
      <button onClick={() => handleWaterConsumption(24)}>Drink 24 ounces</button>
      <button onClick={() => handleWaterConsumption(32)}>Drink 32 ounces</button>
      <button onClick={handleSubmit}>Submit Water Intake</button>
      <br />
      <br />
      <br />
      <p>Fun fact, most dogs drink about 1 ounce of water for every pound that they weigh, every day. That means a 10-pound dog needs about two-thirds of a 16oz bottle of water daily. So, we're showing you some dogs to remind you they need water too!</p>
      <img src={quote} width='300' height='auto' alt="Random Dog" />
    </div>
  );
};

export default Home;
