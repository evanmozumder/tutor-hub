import React from "react";
import Tutor from "../Tutor/Tutor";
import "./Tutors.css";

const Tutors = (props) => {
  // destructuring data from props
  const tutors = props.tutors;
  return (
    <div className="tutors">
      {tutors.map((tutor) => (
        <Tutor tutor={tutor} key={tutor.id} addedTutors={props.addedTutors} />
      ))}
    </div>
  );
};

export default Tutors;
