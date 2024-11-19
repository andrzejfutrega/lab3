import React, { useState } from 'react';

const MouseOverHandler = () => {
  const [message, setMessage] = useState('Najedź myszą na ten element');

  const handleMouseOver = () => {
    setMessage('Mysz jest nad tym elementem!');
  };

  const handleMouseOut = () => {
    setMessage('Najedź myszą na ten element');
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ padding: '10px', border: '1px solid black', marginTop: '20px' }}
    >
      {message}
    </div>
  );
};

export default MouseOverHandler;
