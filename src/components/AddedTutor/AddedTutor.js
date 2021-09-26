import React from "react";
import "./AddedTutor.css";

const AddedTutor = (props) => {
  //   console.log(props.names);
  const { count, salary } = props;
  return (
    <div className="added-tutors">
      <h2>Tutors Added: {count}</h2>
      <h3>Total Salary: {salary}</h3>
      <h3>List of Added Teachers: </h3>
      {props.names.map((name) => (
        <h3 className="added-tutor-name" key={name}>
          {name}
        </h3>
      ))}
    </div>
  );
};

export default AddedTutor;
