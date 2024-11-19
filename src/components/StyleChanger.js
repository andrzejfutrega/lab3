import React, { useState } from 'react';

const StyleChanger = () => {
  const [style, setStyle] = useState({ color: 'black', fontSize: '16px' });

  const changeStyle = () => {
    // Create a mutable copy of the state
    const mutableStyle = { ...style };

    // Mutate the copy
    mutableStyle.color = mutableStyle.color === 'black' ? 'blue' : 'black';
    mutableStyle.fontSize =
      mutableStyle.fontSize === '16px' ? '20px' : '16px';

    // Update state with the mutated object
    setStyle(mutableStyle);
  };

  return (
    <div>
      <button onClick={changeStyle}>Przełącz styl</button>
      <p style={style}>To jest tekst o zmieniającym się stylu.</p>
    </div>
  );
};

export default StyleChanger;
