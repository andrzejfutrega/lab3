import React, { useState } from 'react';

const FileUploader = () => {
  const [fileData, setFileData] = useState(null);

  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileData(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={uploadFile} />
      {fileData && (
        <div>
          <h4>Przesłany plik:</h4>
          <p>{fileData.name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
