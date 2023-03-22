import React, { useState } from "react";
import initMiddleware from "../lib/init-middleware";
import Cors from "cors";

const cors = Cors();

const ImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const fileSelectedHandler = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const uploadFiles = async () => {
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("files[]", file);
    });

    const response = await fetch("http://127.0.0.1:5000/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div>
      <input type="file" multiple onChange={fileSelectedHandler} />
      <button onClick={uploadFiles}>Upload</button>
    </div>
  );
};

export default ImageUploader;
