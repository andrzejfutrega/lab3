import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import ClickCounterInvalid from './components/ClickCounterInvalid';
import MouseOverHandler from './components/MouseOverHandler';
import ImageDisplay from './components/ImageDisplay';
import JsonLoader from './components/JsonLoader';
import FileUploader from './components/FileUploader';
import StyleChanger from './components/StyleChanger';

const App = () => {
  return (
    <div className="App">
      <h1>Interakcje z użytkownikiem</h1>
      <h2>Poprawna obsługa stanu</h2>
      <ClickCounter />
      <h2>Niepoprawna obsługa stanu</h2>
      <ClickCounterInvalid />
      <MouseOverHandler />
      <ImageDisplay />
      <JsonLoader />
      <FileUploader />
      <StyleChanger />

      
      
    </div>
  );
};

export default App;
