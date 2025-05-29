import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Strawberry',
    'Grapes',
    'Blueberry',
    'Watermelon',
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Search Filter Example</h1>

      <input
        type="text"
        placeholder="Search fruits..."
        className="search-input"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <ul className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))
        ) : (
          <li className="no-results">No results found.</li>
        )}
      </ul>
    </div>
  );
}

export default App;
