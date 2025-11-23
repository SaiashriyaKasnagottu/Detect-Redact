// import React from "react";
// import "../styles/Generated.css";

// function Generated({ file }) {
//   return (
//     <div className="generated-container">
//       <div className="generated-header">Generated Files</div>

//       {file ? (
//         <p>Uploaded File: {file.name}</p>
//       ) : (
//         <p>No file uploaded yet.</p>
//       )}
//     </div>
//   );
// }

// export default Generated;
import React, { useState, useEffect } from "react";
import "../styles/Generated.css";

function Generated({ file, closePreview }) {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();

    // Read text files
    reader.onload = (e) => {
      setFileContent(e.target.result);
    };

    reader.onerror = () => {
      setFileContent("Unable to read this file type.");
    };

    reader.readAsText(file);
  }, [file]);

  if (!file) {
    return (
      <div className="generated-container">
        <div className="generated-header">Generated Files</div>
        <p>No file uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className="generated-container">
      <div className="generated-header">
        <span>{file.name}</span>
        <button className="close-btn" onClick={closePreview}>
          X
        </button>
      </div>
      <div className="file-content">
        <pre>{fileContent}</pre>
      </div>
    </div>
  );
}

export default Generated;
