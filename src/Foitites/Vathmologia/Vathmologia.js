import React, { useState } from 'react';
import useFetch from '../../useFetch';
import './Vathmologia.css';

import arrowIcon from '../../icons/imagetriangle.png';

const SemesterDropdowns = () => {
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [selectedSemesters, setSelectedSemesters] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState({});
  const [filterOption, setFilterOption] = useState('option1'); // Default to 'Όλες'

  const { data: semester } = useFetch(`http://localhost:8000/grades/`);

  const handleCheckboxToggle = (id) => {
    if (selectedSemesters.includes(id)) {
      setSelectedSemesters(selectedSemesters.filter((selectedId) => selectedId !== id));
      setSelectedClasses({ ...selectedClasses, [id]: [] });
    } else {
      setSelectedSemesters([...selectedSemesters, id]);
      setSelectedClasses({
        ...selectedClasses,
        [id]: semester.find((item) => item.id === id)?.classes.map((classItem) => classItem) || [],
      });
    }
  };

  const handleClassCheckboxToggle = (semesterId, classInfo) => {
    const semesterClasses = selectedClasses[semesterId] || [];
    const updatedClasses = semesterClasses.includes(classInfo)
      ? semesterClasses.filter((selectedClass) => selectedClass !== classInfo)
      : [...semesterClasses, classInfo];

    setSelectedClasses({
      ...selectedClasses,
      [semesterId]: updatedClasses,
    });
  };

  const handleDropdownToggle = (id) => {
    if (openDropdowns.includes(id)) {
      setOpenDropdowns(openDropdowns.filter((dropdownId) => dropdownId !== id));
    } else {
      setOpenDropdowns([...openDropdowns, id]);
    }
  };

  const handleSemesterClick = (id) => {
    handleDropdownToggle(id);
  };

  const handlePrintButtonClick = () => {
    const selectedClassesArray = Object.values(selectedClasses)
      .flatMap((classes) => filterClasses(classes))
      .filter(Boolean);

    const message = `ΕΚΤΥΠΩΣΗ ΒΑΘΜΟΛΟΓΙΑΣ:\n${selectedClassesArray.map((classInfo) => {
      return `${classInfo.name}: ${classInfo.grade}`;
    }).join('\n')}\n`;
    alert(message);
  };

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilterOption(selectedFilter);
  };

  const filterClasses = (classes) => {
    switch (filterOption) {
      case 'option2': // Επιτυχημένες
        return classes.filter((classInfo) => classInfo.grade >= 5);
      case 'option3': // Αποτυχημένες
        return classes.filter((classInfo) => classInfo.grade < 5);
      default: // Όλες
        return classes;
    }
  };

  return (
    semester && (
      <div className='vathm-wrapper'>
        <div className='vathm-buttons'>
          <p className='filter-title'>Προσπάθειες:</p>
          <select onChange={handleFilterChange} className='filter-dropdown'>
            <option value='option1'>Όλες</option>
            <option value='option2'>Επιτυχημένες</option>
            <option value='option3'>Αποτυχημένες</option>
          </select>
          <button onClick={handlePrintButtonClick} className='button-print'>Εκτύπωση</button>
        </div>
        <div className='vathm-container'>
          <div className='vathm-drop'>
            {semester.map((item) => (
              <div key={item.id}>
                <div className='vathm-checkbox-container'>
                  <input
                    type='checkbox'
                    checked={selectedSemesters.includes(item.id)}
                    onChange={() => handleCheckboxToggle(item.id)}
                    className='vathm-checkbox'
                  />
                </div>
                <button
                  onClick={() => handleSemesterClick(item.id)}
                  className='vathm-button'
                >
                  <span className='vathm-title'>{item.semester}</span>
                  <img
                    src={arrowIcon}
                    alt={openDropdowns.includes(item.id) ? 'Close' : 'Open'}
                    className={`vathm-arrow-icon ${openDropdowns.includes(item.id) ? 'open' : 'close'}`}
                  />
                </button>
                <span className='vathm-subtitle'>({item.classes.length} Μαθήματα)</span>
                {openDropdowns.includes(item.id) && (
                  <div>
                    <ul className='vathm-ul'>
                      {filterClasses(item.classes).map((classInfo) => (
                        <li className='vathm-li' key={classInfo.name}>
                          <div className='vathm-checkbox-container'>
                            <input
                              type='checkbox'
                              checked={selectedClasses[item.id]?.includes(classInfo)}
                              onChange={() => handleClassCheckboxToggle(item.id, classInfo)}
                              className='vathm-checkbox2'
                            />
                          </div>
                          <span className={`vathm-class ${classInfo.grade < 5 ? 'fail' : 'pass'}`}>
                            {classInfo.name}
                          </span>
                          <span className={`vathm-grade ${classInfo.grade < 5 ? 'fail' : 'pass'}`}>
                            {classInfo.grade}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default SemesterDropdowns;
