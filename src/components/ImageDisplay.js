import React, { useState } from 'react';

const ImageDisplay = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showImage = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <button onClick={showImage}>Pokaż obrazek</button>
      {isVisible && <img src="./src/logo.svg" alt="Placeholder"/>}
    </div>
  );
};

export default ImageDisplay;
