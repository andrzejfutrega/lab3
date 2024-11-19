import React, { useState } from 'react';

const ImageDisplay = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showImage = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <button onClick={showImage}>Pokaż obrazek</button>
      {isVisible && <img src={process.env.PUBLIC_URL + "/image.jpg"} alt="Placeholder"/>}
    </div>
  );
};

export default ImageDisplay;
