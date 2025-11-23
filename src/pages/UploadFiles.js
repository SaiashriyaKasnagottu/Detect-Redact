
import React from "react";
import "../styles/UploadFiles.css";

function UploadFiles({ uploadedFiles, setUploadedFiles, setSelectedFile }) {
  // Handle file selection from both inputs
  const handleDetectRedact = () => {
    alert("Detect & Redact clicked!");
  };
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles((prev) => [...prev, file]);
    }
  };
  
  return (
    <div className="upload-container">
      {/* Header */}
      <div className="upload-header">
        <span>Uploaded Files</span>

        {/* Hidden input for + button */}
        {uploadedFiles.length > 0 && (
          <>
            <input
              type="file"
              id="hidden-file-input"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />

            <button
              className="add-btn"
              title="Add File"
              onClick={() =>
                document.getElementById("hidden-file-input").click()
              }
            >
              +
            </button>
          </>
        )}
      </div>

      {/* File List or Empty State */}
      <div className="file-list">
        {uploadedFiles.length > 0 ? (
          uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="file-item"
              onClick={() => setSelectedFile(file)}
            >
              {file.name}
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>No uploaded files. Select a file.</p>

            {/* Second file input */}
            <input
              type="file"
              id="main-file-input"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />

            <button
              className="select-file-btn"
              onClick={() =>
                document.getElementById("main-file-input").click()
              }
            >
              Select File
            </button>
          </div>
        )}
      </div>
      {uploadedFiles.length > 0 && (
        <div className="detect-redact-container">
          <button
            className="detect-redact-btn"
            onClick={handleDetectRedact}
          >
            Detect & Redact
          </button>
        </div>
      )}
    </div>
  );
}
export default UploadFiles;