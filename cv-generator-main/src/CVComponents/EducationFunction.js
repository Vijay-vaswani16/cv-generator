import { useState } from 'react';
import { InsertEdit,  toggleEdit } from './_helper'

function Education(props) {
  // education0 initial states
  const [edu0Degree, setEdu0Degree] = useState({
    value: 'Bachelor of Technology',
    edit: false,
  });
  const [edu0Date, setEdu0Date] = useState({
    value: 'Nov 2020 - July 2024',
    edit: false,
  });
  const [edu0Location, setEdu0Location] = useState({
    value: 'IIEST SHIBPUR',
    edit: false,
  });

  // education1 initial states
  const [edu1Degree, setEdu1Degree] = useState({
    value: '12th',
    edit: false,
  });
  const [edu1Date, setEdu1Date] = useState({
    value: '2018 - 2020',
    edit: false,
  });
  const [edu1Location, setEdu1Location] = useState({
    value: 'JVP International School',
    edit: false,
  });

  // education2 initial states
  const [edu2Degree, setEdu2Degree] = useState({
    value: '10th',
    edit: false,
  });
  const [edu2Date, setEdu2Date] = useState({
    value: '2016 - 2018',
    edit: false,
  });
  const [edu2Location, setEdu2Location] = useState({
    value: 'Alpine Public School',
    edit: false,
  });

  // place states into arr to iterate with for-loops
  const eduDegreeArr = [edu0Degree, edu1Degree, edu2Degree];
  const setEduDegreeArr = [setEdu0Degree, setEdu1Degree, setEdu2Degree];
  const eduDateArr = [edu0Date, edu1Date, edu2Date];
  const setEduDateArr = [setEdu0Date, setEdu1Date, setEdu2Date];
  const eduLocationArr = [edu0Location, edu1Location, edu2Location];
  const setEduLocationArr = [setEdu0Location, setEdu1Location, setEdu2Location];
  
  function InsertEdu() {
    const arr = [];
    for (let i = 0; i < props.educationNum; i += 1) {
      const edu = (
        <div
          key={`edu${i}`}
          className={'section'}
        >
          {/* degree and date section */}
          <div
            className={'space-between'}
          >
            {/* degree */}
            <span
              className='bold capitalize'
              onClick={() => toggleEdit(setEduDegreeArr[i])}
            >
              {InsertEdit(
                eduDegreeArr[i].edit,
                eduDegreeArr[i].value,
                'input',
                setEduDegreeArr[i],
              )}
            </span>
            {/* date */}
            <span
              className='capitalize'
              onClick={() => toggleEdit(setEduDateArr[i])}
            >
              {InsertEdit(
                eduDateArr[i].edit,
                eduDateArr[i].value,
                'input',
                setEduDateArr[i]
              )}
            </span>
          </div>
          {/* location */}
          <span
            onClick={() => toggleEdit(setEduLocationArr[i])}
          >
            {InsertEdit(
              eduLocationArr[i].edit,
              eduLocationArr[i].value,
              'input',
              setEduLocationArr[i],
            )}
          </span>
        </div>
      )
      arr.push(edu);
    }
    return arr; 
  }

  if (props.educationNum > 0) {
    return (
      <div>
        <h1>Education</h1>
        <InsertEdu />
      </div>
    );
  }
}

export default Education;
