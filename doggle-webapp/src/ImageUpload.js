import React, { useState } from "react";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
    console.log("handleImageChange:", selectedImage);
  };
  return (
    <div class="container text-center">
      <div class="mb-3">
        <input
          class="form-control"
          type="file"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
          accept="image/png, image/gif, image/jpeg"
          onChange={handleImageChange}
        />
      </div>

      <button
        class="btn btn-secondary"
        type="button"
        id="inputGroupFileAddon04"
        onClick={console.log("Button Click:", selectedImage)}
      >
        Run Model
      </button>
    </div>
  );
}
export default ImageUpload;
