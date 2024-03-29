import React from 'react';
import { Link } from 'react-router-dom';
import './SubjectCard.css';

const SubjectCard = ({ subject, isChecked, onCheckboxChange }) => {
  return (
    <div className="subject-card">
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={onCheckboxChange}
      />
      <Link to={`/mathimata/${subject.id}`} className="subject-link">
        <div className="top-left">{subject.subjectName}</div>
      </Link>
      <div className="top-right">{`Εξάμηνο: ${subject.semester}`}</div>
      <hr className="separator" />
      <div className="categories">
        <div className="left-categories">
          {[
            `Κωδικός: ${subject.id}`,
            `ECTS: ${subject.ECTS}`,
            `Τύπος: ${subject.Type}`,
          ].map((category, index) => (
            <div key={index} className="category">
              {category}
            </div>
          ))}
        </div>
        <div className="right-categories">
          {[
            `Κατεύθυνση: ${subject.Kateythinsi}`,
            `Καθηγητής: ${subject.Professor}`,
            `Διδακτικές Ώρες: ${subject.Hours}`,
          ].map((category, index) => (
            <div key={index} className="category">
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
