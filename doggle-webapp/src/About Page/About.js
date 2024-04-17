import React from "react";
import "./About.css";
import image_dion from "./Member_Images/dion.jpg";
import image_jewel from "./Member_Images/jewel.jpg";
import image_yj from "./Member_Images/yj.jpg";

function About() {
  const teamMembers = [
    {
      name: "Dion Toh Siyong",
      linkedin: "https://www.linkedin.com/in/dsiyong/",
      image: image_dion,
    },
    {
      name: "Jewel Wee Xin Yu",
      linkedin: "https://www.linkedin.com/in/jewelwee",
      image: image_jewel,
    },
    {
      name: "Tan Yue Jun",
      linkedin: "https://www.linkedin.com/in/yuejuntan/",
      image: image_yj,
    },
  ];

  return (
    <div className="about-container">
      <header>
        <h1 className="text-center mt-5">About Us</h1>
      </header>
      <div className="about-details">
        <div className="col-md-6">
          <h2>What we do</h2>
          <p>
            Doggle is your go-to platform for identifying dog breeds using
            cutting-edge computer vision technology. Simply upload a picture of
            a dog, and let Doggle do the rest. Not only does Doggle provide
            accurate breed identification, but it also offers fascinating fun
            facts about each breed, allowing you to learn more about your furry
            friends. Whether you're a dog enthusiast or simply curious about
            different breeds, Doggle is here to make your dog identification
            experience enjoyable and educational.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Team</h2>
          <p>Meet the amazing team behind this project:</p>
          <div className="members-container">
            {teamMembers.map((member) => (
              <div className="member-card">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <img src={member.image} className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <p className="card-title">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
