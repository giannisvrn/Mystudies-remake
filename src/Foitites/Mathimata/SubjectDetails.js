import React from 'react';
import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './SubjectDetails.css'
import leftarrow from '../../icons/left-arrow.png'

const SubjectDetails = () => {
  const { id } = useParams();
  const { data: subject } = useFetch(`http://localhost:8000/subjects/${id}`);

  return ( subject && (
    <>
        <div className="return-container">
          <img src={leftarrow} alt="Arrow" className="details-image" />
          <Link to="/mathimata" className="details-return">
            Επιστροφή
          </Link>
        </div>
        <div className="subject-details-card">
        <div className="detail-top-left">{subject.Type}</div>
        <div className="detail-top-left2">{subject.subjectName}</div>
        <div className="detail-top-left3">Κωδικός:{subject.id}</div>
        <hr className="detail-separator" />
        <div className="categories">
            <div className="details-left-categories">
            {[
                <p><span className='text-bold'>Περιγραφή:</span> {subject.Description}</p>,
            ].map((category, index) => (
                <div key={index} className="category">
                {category}
                </div>
            ))}
            </div>
            <div className="details-right-categories">
            {[
                <p><span className='text-bold'>ECTS:</span> {subject.ECTS}</p>,
                <p><span className='text-bold'>Εξάμηνο:</span> {subject.semester}</p>,
                <p><span className='text-bold'>Κατεύθυνση:</span> {subject.Kateythinsi}</p>,
                <p><span className='text-bold'>Καθηγητής:</span> {subject.Professor}</p>,
                <p><span className='text-bold'>Διδακτικές Ώρες:</span> {subject.Hours}</p>,
            ].map((category, index) => (
                <div key={index} className="category">
                {category}
                </div>
            ))}
            </div>
        </div>
        </div>
    </>
  )
  );
};

export default SubjectDetails;
