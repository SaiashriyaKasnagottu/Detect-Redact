
import React, { useState } from "react";
import Header from "./components/Header";
import LeftPane from "./pages/UploadFiles";
import RightPane from "./pages/Generated";

function App() {
  // const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // return (
  //   <div>
  //     <Header />
  //     <div style={{ display: "flex", height: "100vh" }}>
  //       <LeftPane onFileUpload={setUploadedFile} />
  //       <RightPane file={uploadedFile} />
  //     </div>
  //   </div>
  // );
  return (
    <div style={{ height: "100rem" }}>
      <Header />
      <div style={{ display: "flex", height: "calc(100% - 80px)" }}>
        <LeftPane
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          setSelectedFile={setSelectedFile}
        />
        <RightPane
          selectedFile={selectedFile}
          closePreview={() => setSelectedFile(null)}
        />
      </div>
    </div>
  );
}

export default App;

