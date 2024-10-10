import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from Express API
    axios.get('https://travelific-api.onrender.com/api/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Items from MongoDB</h1>
      </header>
      <div className="items-container">
        {items.map(item => (
          <div className="item-card" key={item._id}>
            <h2 className="item-name">{item.name}</h2>
            <p className="item-price">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
