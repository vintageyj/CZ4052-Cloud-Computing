import React from "react";
import "./SuggestedImages.css"; // Import CSS file
// Import local images
import image1 from "./Images/dhole.jpeg";
import image2 from "./Images/toy_terrier.jpeg";
import image3 from "./Images/dachshund.jpeg";
import image4 from "./Images/chihuahua.jpeg";
import image5 from "./Images/german_shepherd.jpeg";
import image6 from "./Images/golden-retriever.jpeg";
import image7 from "./Images/husky.jpeg";
import image8 from "./Images/rottweiler.jpeg";
import image9 from "./Images/pug.jpeg";

function SuggestedImages({ onSelectImage }) {
  const suggestedImages = [image1, image2];

  const handleSelectImage = (imageUrl) => {
    console.log("SelectedImage!", imageUrl);
    // onSelectImage(imageUrl);
  };

  return (
    <div
      id="suggestedImages"
      className="carousel slide"
      style={{
        paddingInline: "10%",
        paddingBottom: "3%",
      }}
    >
      <p>Try Doggling these images by clicking on them:</p>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <div className="container-fluid">
            <div className="row align-items-center overflow-hidden">
              <img className="col-sm-3 mx-auto suggested_img" src={image1} />
              <img className="col-sm-3 mx-auto suggested_img" src={image2} />
              <img className="col-sm-3 mx-auto suggested_img" src={image3} />
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <div className="container-fluid">
            <div className="row align-items-center">
              <img className="col-sm-3 mx-auto suggested_img" src={image4} />
              <img className="col-sm-3 mx-auto suggested_img" src={image5} />
              <img className="col-sm-3 mx-auto suggested_img" src={image6} />
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <div className="container-fluid">
            <div className="row align-items-center">
              <img className="col-sm-3 mx-auto suggested_img" src={image7} />
              <img className="col-sm-3 mx-auto suggested_img" src={image8} />
              <img className="col-sm-3 mx-auto suggested_img" src={image9} />
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#suggestedImages"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#suggestedImages"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default SuggestedImages;
