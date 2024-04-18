import React from "react";
import banner_image from "./hero_banner_image.png";

function HeroBanner({ imageUrl, title, subtext, textColor }) {
  const textStyle = { color: textColor };

  return (
    <div
      className="container-fluid px-0"
      style={{
        backgroundImage: `url(${banner_image})`,
        backgroundSize: "contain", // Use contain to maintain aspect ratio
        backgroundPosition: "center", // Align image to the right
        backgroundRepeat: "no-repeat",
        backgroundColor: "#e6e9f0",
        alignSelf: 'flex-start',
        paddingLeft: '50%',
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

// <div class="container col-xxl-8 px-4 py-5">
//   <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
//     <div class="col-10 col-sm-8 col-lg-6">
//       {/* <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"> */}
//       <image imageUrl={imageUrl} />
//     </div>
//     <div class="col-lg-6">
//       <h1 class="display-5 fw-bold lh-1 mb-3">
//         Responsive left-aligned hero with image
//       </h1>
//       <p class="lead">
//         Quickly design and customize responsive mobile-first sites with
//         Bootstrap, the world’s most popular front-end open source toolkit,
//         featuring Sass variables and mixins, responsive grid system,
//         extensive prebuilt components, and powerful JavaScript plugins.
//       </p>
//       <div class="d-grid gap-2 d-md-flex justify-content-md-start">
//         <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
//           Primary
//         </button>
//         <button type="button" class="btn btn-outline-secondary btn-lg px-4">
//           Default
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
