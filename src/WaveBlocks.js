// WaveBlocks.js
import React from 'react';
import student from './icons/student.png'
import teacher from './icons/teacher.png'
import books from './icons/books.png'

const WaveBlocks = () => {
  return (
    <div className="additional-blocks">
      <div className="block2">
        <img src={student} alt='student' className='student-img'/>
        <p className="block-text">Φοιτητές</p>
        <p className="block-desc">Δήλωση μαθημάτων και προβολή βαθμολογιών</p>
        <p className='add-dot-1'>{'\u2B24'}</p>
        <p className='add-dot-2'>{'\u2B24'}</p>
        <p className='add-dot-3'>{'\u2B24'}</p>
        <p className='add-dot-4'>{'\u2B24'}</p>
        <p className='add-dot-5'>{'\u2B24'}</p>
      </div>
      <div className="block2">
        <img src={books} alt='books' className='books-img'/>
        <p className="block-text">Βαθμολογία & Δηλώσεις</p>
        <p className='add-dot-6'>{'\u2B24'}</p>
        <p className='add-dot-7'>{'\u2B24'}</p>
        <p className='add-dot-8'>{'\u2B24'}</p>
        <p className='add-dot-9'>{'\u2B24'}</p>
        <p className='add-dot-10'>{'\u2B24'}</p>
      </div>
      <div className="block2">
        <img src={teacher} alt='teacher' className='teacher-img'/>
        <p className="block-text">Διδάσκοντες</p>
        <p className="block-desc">Βαθμολόγηση φοιτητών και ανάρτηση των οριστικών βαθμολογιών</p>
      </div>
    </div>
  );
};

export default WaveBlocks;
