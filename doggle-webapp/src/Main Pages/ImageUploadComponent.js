import React, { useState } from "react";

function ImageUpload({ onSelectImage }) {
  const handleSelectImage = (event) => {
    console.log(event.target.files);
    onSelectImage(event.target.files[0]);
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
          onChange={handleSelectImage}
        />
      </div>
    </div>
  );
}

export default ImageUpload;
