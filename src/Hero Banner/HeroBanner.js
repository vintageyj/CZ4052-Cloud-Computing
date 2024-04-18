import React from "react";
import banner_image from "./hero_banner_image.png";
import "./HeroBanner.css";

function HeroBanner({ imageUrl, title, subtext, textColor }) {
  const textStyle = { color: textColor };

  return (
    <div
      className="container-fluid px-0 dogImage"
      style={{
        backgroundImage: `url(${banner_image})`,
      }}
    >
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6"></div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3" style={textStyle}>
              {title}
            </h1>
            <p className="lead" style={textStyle}>
              {subtext}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
