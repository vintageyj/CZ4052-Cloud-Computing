import React, { useState } from "react";

function ImageUpload({ onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
  };

  const handleRunModel = () => {
    // Call the callback function with the selected image
    onImageSelect(selectedImage);
  };

  return (
    <div className="container text-center">
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
          accept="image/png, image/gif, image/jpeg"
          onChange={handleImageChange}
        />
      </div>

      <button
        className="btn btn-secondary"
        type="button"
        id="inputGroupFileAddon04"
        onClick={handleRunModel}
      >
        Run Model
      </button>
    </div>
  );
}

export default ImageUpload;
