import React from "react";
import SubjectCard from "./SubjectCard";
import { useLocation } from 'react-router-dom';
import './Dilwsi.css'
import { Link } from "react-router-dom";
import leftarrow from '../../icons/left-arrow.png'

const Dilwsi = () => {
  const location = useLocation();
  const { checkedSubjects, subjects } = location.state || { checkedSubjects: {}, subjects: [] };

  const renderSubjectCards = () => {
    return Object.keys(checkedSubjects).map((subjectId, index) => {
      const subject = subjects.find((s) => s.id.toString() === subjectId);
      return (
        <SubjectCard
          key={subjectId}
          subject={subject}
          isChecked={checkedSubjects[subjectId] || false}
        />
      );
    });
  };

  const handleTemporary = () => {
    alert("Επιτυχής προσωρινή αποθήκευση δήλωσης μαθημάτων!");
  };

  return (
    <div>
        <div className="return-container">
            <img src={leftarrow} alt="Arrow" className="details-image" />
            <Link to="/mathimata" className="details-return">
            Επιστροφή
            </Link>
        </div>
        <div className="progress-bar-container2">
        <div className="circle-container">
          <div className="circle completed"></div>
          <div className="label">Προβολή</div>
        </div>
        <div className="prog-line completed"></div>
        <div className="circle-container">
          <div className="circle completed"></div>
          <div className="label">Δήλωση</div>
        </div>
        <div className="prog-line first-half"></div>
            <div className="circle-container">
            <div className="circle">3</div>
            <div className="label">Οριστικοποίηση</div>
            </div>
        </div>
        
        <div className="blue-line2">
            <div className="blue-left-content2">
                <Link to='/mathimata'>Επεξεργασία Δήλωσης</Link>
            </div>
            <div className="blue-right-content2">
                <div className="button-container2">
                    <button onClick={handleTemporary}>Προσωρινή Αποθήκευση</button>
                    <Link to='/oristikopoihsh'>Οριστικοποίηση Υποβολής</Link>
                </div>
            </div>
        </div>

        <div className="dilwsi-content">
            {renderSubjectCards()}
        </div>
    </div>
  );
};

export default Dilwsi;
