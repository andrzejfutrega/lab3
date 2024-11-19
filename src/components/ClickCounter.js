import React, { useState } from 'react';

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Kliknij mnie ({clickCount})</button>
    </div>
  );
};

export default ClickCounter;
