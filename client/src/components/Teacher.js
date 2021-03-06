import React from "react";

const Teacher = ({ name, bio, img_src }) => (
  <div className="teacher">
    <img className="teacher-img" src={img_src} alt="teacher" />
    <h3>{name}</h3>
    <p>{bio}</p>
  </div>
);

export default Teacher;
