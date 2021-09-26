import React, { useEffect, useState } from "react";
import AddedTutor from "../AddedTutor/AddedTutor";
import Tutors from "../Tutors/Tutors";
import "./TutorCollection.css";

const TutorCollection = () => {
  // declaring states
  const [tutors, setTutors] = useState([]);
  const [tutorCount, setCount] = useState(0);
  const [salary, setSalary] = useState(0);
  const [selectedTutorsList, setNames] = useState([]);

  //   fetching data
  useEffect(() => {
    fetch("./tutorsData.json")
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, []);

  //   select button functionality
  const addedTutors = (id) => {
    for (const tutor of tutors) {
      if (tutor.id === id) {
        if (
          selectedTutorsList.find((nameInList) => nameInList === tutor.name)
        ) {
          alert("Already Selected!!!");
        } else {
          setCount(tutorCount + 1);
          setSalary(salary + tutor.salary);
          const newAddedTutors = [...selectedTutorsList, tutor.name];
          setNames(newAddedTutors);
        }
      }
    }
  };
  return (
    <div className="tutor-collection">
      {/* sending data using props  */}
      <Tutors addedTutors={addedTutors} tutors={tutors} />
      <AddedTutor
        count={tutorCount}
        salary={salary}
        names={selectedTutorsList}
      />
    </div>
  );
};

export default TutorCollection;
