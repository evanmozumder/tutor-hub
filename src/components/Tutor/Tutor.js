import React from "react";
import "./Tutor.css";

const Tutor = (props) => {
  // destructuring data from tutor object
  const {
    name,
    img,
    expertised,
    experience,
    institution,
    salary,
    contact,
    id,
  } = props.tutor;
  return (
    //   display tutor details
    <div className="tutor">
      <img src={img} alt="..." />
      <h2>
        Name: <span className="tutor-details"> {name}</span>
      </h2>
      <h3>
        Expertised: <span className="tutor-details">{expertised}</span>
      </h3>
      <h3>
        Experience:<span className="tutor-details"> {experience}</span>
      </h3>
      <h3>
        Institution:<span className="tutor-details"> {institution}</span>
      </h3>
      <h3>
        Contact:<span className="tutor-details"> {contact}</span>
      </h3>
      <h3>
        Salary: <span className="tutor-details"> {salary}</span>
      </h3>
      <button className="select-btn" onClick={() => props.addedTutors(id)}>
        <i className="fas fa-user-plus"></i>
        Select
      </button>
      <br />
      <i className="fas fa-envelope mail"></i>
    </div>
  );
};

export default Tutor;
