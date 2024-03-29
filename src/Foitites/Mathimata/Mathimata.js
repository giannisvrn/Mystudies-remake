// Mathimata.js
import React, { useState } from 'react';
import './Mathimata.css';
import ProgressBar from './ProgressBar';
import SubjectCard from './SubjectCard';
import useFetch from '../../useFetch';
import { useNavigate } from 'react-router-dom';

const Mathimata = () => {
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [checkedSubjects, setCheckedSubjects] = useState({});
  const [selectedFilter, setSelectedFilter] = useState('Όλα'); // Default filter is 'Όλα'
  const {data : subjects} = useFetch('http://localhost:8000/subjects');
  const navigate = useNavigate();

  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
  };

  const handleCheckboxChange = (subjectId) => {
    setCheckedSubjects((prevCheckedSubjects) => {
      return {
        ...prevCheckedSubjects,
        [subjectId]: !prevCheckedSubjects[subjectId],
      };
    });
  };
  

  const handleDeclareButtonClick = () => {
    const checkedSubjectNames = subjects
      .filter((subject) => checkedSubjects[subject.id])
      .map((subject) => subject.subjectName);

      if(checkedSubjectNames.length > 10) { 
        alert('Μπορείτε να επιλέξετε μέχρι 10 μαθήματα ανά εξάμηνο')
      }
      else if (checkedSubjectNames.length > 0) {
        const selectedSubjectsPath = '/dilwsi';
        // Use navigate to navigate to the new path
        navigate(selectedSubjectsPath, { state: { checkedSubjects, subjects }});
    } else {
      alert('Δεν έχετε επιλέξει κανένα μάθημα.');
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const renderSubjectCards = () => {
    let filteredSubjects = subjects;

    // Apply semester filter
    filteredSubjects = filteredSubjects.filter((subject) => subject.semester === selectedSemester);

    // Apply type filter
    if (!selectedFilter.includes('Όλα')) {
      filteredSubjects = filteredSubjects.filter((subject) => selectedFilter.includes(subject.Type));
    }

    return filteredSubjects.map((subject, index) => (
      <SubjectCard
        key={subject.id}
        subject={subject}
        isChecked={checkedSubjects[subject.id] || false}
        onCheckboxChange={() => handleCheckboxChange(subject.id)}
      />
    ));
  };

  return (
    <div className="mathimata-container">
      {/* Sidebar block */}
      <div className="sidebar">
        {/* Semester blocks */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
          <div className="semester-block" key={semester}>
            <button onClick={() => handleSemesterClick(semester)}>{`${semester}ο Εξάμηνο`}</button>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="main-content">
        <ProgressBar 
          currentSemester={selectedSemester} 
          selectedFilter={selectedFilter} 
          onFilterChange={handleFilterChange}
          checkedSubjects={checkedSubjects} 
          onDeclareButtonClick={handleDeclareButtonClick} 
        />
        {/* subjects && because we dont want to render at the beginning where subjects are NULL */}
        {subjects && renderSubjectCards()}  
      </div>
    </div>
  );
};

export default Mathimata;
