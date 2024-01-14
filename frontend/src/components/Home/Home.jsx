// Home.jsx
import React, { useEffect, useState } from 'react';


//SIDE NOTE ABOUT THE EXTERNAL API, THE CODE IS WRITTEN AS IF IM PULLING A QUOTE, SO IF YOU SEE THE WORD QUOTE, ITS ACTUALLY REFURRING TO A DOG PICTURE

const Home = () => {
  const [amount, setAmount] = useState(0);
  const [quote, setQuote] = useState('');


  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // TODO: connect to database
  // TODO: create logic that refreshes water intake at the end of every day
  const handleWaterConsumption = (amount) => {
    fetch('http://127.0.0.1:8000/water/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': window.csrf_token,
  },
  body: JSON.stringify({ amount }),
    })
  };

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
  
      // Update the quote state with the image URL
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
      <p>Fun fact, most dogs drink about 1 ounce of water for every pound that they weigh, every day. That means a 10-pound dog needs about two-thirds of a 16oz bottle of water daily. So were showing you some dogs to remind you they need water too!</p>
      <img src={quote} alt="Random Dog" />
    </div>
  );
};

export default Home;
