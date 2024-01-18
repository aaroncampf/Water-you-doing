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
      },
      body: JSON.stringify({ ounces: amount }),
    })
      .then(response => {
        // TODO: Handle the response. Update UI?
      })
      .catch(error => {
        console.error('Error submitting water intake:', error);
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
      <h2>Home Page</h2>
      <p>Amount of water consumed: {amount} ounces</p>
      <button onClick={() => handleWaterConsumption(8)}>Drink 8 ounces</button>
      <button onClick={() => handleWaterConsumption(12)}>Drink 12 ounces</button>
      <button onClick={() => handleWaterConsumption(24)}>Drink 24 ounces</button>
      <button onClick={() => handleWaterConsumption(32)}>Drink 32 ounces</button>
      <p>Fun fact, most dogs drink about 1 ounce of water for every pound that they weigh, every day. That means a 10-pound dog needs about two-thirds of a 16oz bottle of water daily. So, we're showing you some dogs to remind you they need water too!</p>
      <img src={quote} alt="Random Dog" />
      <button onClick={handleSubmit}>Submit Water Intake</button>
    </div>
  );
};

export default Home;
