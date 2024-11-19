
import React from 'react';

let clickCount = 0; 

const ClickCounterInvalid = () => {
  const handleClick = () => {
    clickCount += 1;
    console.log(`Kliknięć: ${clickCount}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Kliknij mnie ({clickCount})</button>
    </div>
  );
};

export default ClickCounterInvalid;
