// src/NewComponent.js
import React, { useState } from 'react';

function NewComponent() {
  // useState hooks to manage state
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  // Function to toggle the text
  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  // Function to increment the counter
  const incrementCounter = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Interactive Component</h1>

      {/* Button to toggle text */}
      <button onClick={toggleText} className="fancy-btn primary-btn">
        {isTextVisible ? 'Hide' : 'Show'} Text
      </button>

      {/* Conditionally render the text */}
      {isTextVisible && <p style={{ marginTop: '20px' }}>This is some toggled text!</p>}

      {/* Button to increment the counter */}
      <button onClick={incrementCounter} className="fancy-btn secondary-btn" style={{ marginTop: '20px' }}>
        Click Me! Count: {clickCount}
      </button>
    </div>
  );
}

export default NewComponent;
