import React, { useState } from 'react';

import fileData from '../file.json';

const JsonLoader = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = () => {
    setLoading(true);
    setError(null);

    try {
      
      setTimeout(() => {
        setData(fileData);
        setLoading(false);
      }, 1000); 
    } catch (err) {
      setError('An error occurred while loading the data.');
      setLoading(false);
    }
  };


  const updatePartOfData = () => {
    setData(prevData => ({
      ...prevData,
      additionalKey: 'New Value', 
      nestedObject: {
        ...prevData?.nestedObject, 
        nestedKey: 'Updated Value',
      },
    }));
  };

  return (
    <div>
      <h2>Ładowanie danych JSON</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {loading ? (
        <p>Ładowanie danych...</p>
      ) : (
        <div>
          <button onClick={loadData}>Załaduj dane</button>
          {data && (
            <div>
              <pre>{JSON.stringify(data, null, 2)}</pre>
              <button onClick={updatePartOfData}>Dodaj nowe dane</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JsonLoader;
