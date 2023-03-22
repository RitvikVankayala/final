import ImageUploader from "../components/ImageUploader";
import getMessage from "./api/getmsg";
import { useState, useEffect } from "react";
import MyComponent from "../components/MyComponent";

export default function Home() {
  return (
    <div>
      <h1>Image Uploader</h1>
      <ImageUploader />
      <MyComponent />
    </div>
  );
}
