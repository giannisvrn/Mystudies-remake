import React from 'react';
import './LoggedIn.css';
import { Link } from 'react-router-dom';
import arrowdown from '../../icons/arrow-down.png'

const LoggedIn = () => {
  return (
    <div className="logged-in-container">
      {/* Section 1: Μαθήματα */}
      <div className="courses-block">
        <Link to='/mathimata' className="centered-and-underlined">Μαθήματα</Link>
      </div>
      <div className="three-blocks-container">
        <div className="single-block">
          <p>Προβολή Μαθημάτων</p>
          <p className='block-text'>Δείτε τα μαθήματα που προσφέρονται από το Πρόγραμμα Σπουδών.</p>
        <img src={arrowdown} alt='arrow' className='arrow-down'></img>
        </div>
        <div className="single-block middle-block">
          <p>Δήλωση Μαθημάτων</p>
          <p className='block-text'>Δηλώστε τα μαθήματα που σας ενδιαφέρουν, αρχικά προσωρινά.</p>
        <img src={arrowdown} alt='arrow' className='arrow-down2'></img>
        </div>
        <div className="single-block">
          <p>Οριστικοποίηση Μαθημάτων</p>
          <p className='block-text'>Ξανά δείτε την προσωρινή δήλωση μαθημάτων σας και όταν είσαστε σίγουροι οριστικοποιείστε την δήλωση.</p>
        </div>
      </div>

      {/* Section 2: Βαθμολογία */}
      <div className="courses-block">
        <Link to='/vathmologia' className="centered-and-underlined">Βαθμολογία</Link>
      </div>
      <div className="three-blocks-container">
        <div className="single-block">
          <p>Προβολή Βαθμολογίας</p>
          <img src={arrowdown} alt='arrow' className='arrow-down3'></img>
          <p className='block-text'>Δείτε τις βαθμολογίες που έχουν καταχωρηθεί στο όνομα σας, σε κάθε εξετασική περίοδο που έχετε συμμετάσχει.</p>
        </div>
        <div className="single-block middle-block">
          <p>Τροποποίηση Φίλτρων</p>
          <img src={arrowdown} alt='arrow' className='arrow-down4'></img>
          <p className='block-text'>Τροποποιείστε τις βαθμολογίες που εμφανίζονται, όπως: μόνο προβιβάσιμους βαθμούς, ή μόνο μαθήματα του 1ου εξαμήνου.</p>
        </div>
        <div className="single-block">
          <p>Εκτύπωση Βαθμολογίας</p>
          <p className='block-text'>Εκτυπώστε το βαθμολόγιο σας, είτε ολόκληρο ή με βάση τα φίλτρα που έχετε ορίσει.</p>
        </div>
      </div>

      {/* Section 3: Πιστοποιητικά */}
      <div className="courses-block">
        <Link to='/pistopoihtika' className="centered-and-underlined">Πιστοποιητικά</Link>
      </div>
      <div className="three-blocks-container">
        <div className="single-block">
          <p>Προβολή Πιστοποιητικών</p>
          <img src={arrowdown} alt='arrow' className='arrow-down5'></img>
          <p className='block-text'>Δείτε τα πιστοποιητικά που είναι διαθέσιμα από το τμήμα σας.</p>
        </div>
        <div className="single-block middle-block">
          <p>Υποβολή Αίτησης</p>
          <img src={arrowdown} alt='arrow' className='arrow-down6'></img>
          <p className='block-text'>Υποβάλετε στην γραμματεία αίτηση για την παροχή κάποιου πιστοποιητικού.Μπορείτε να υποβάλετε μέχρι 3 αιτήσεις για κάθε πιστοποιητικό ανά εξάμηνο.</p>
        </div>
        <div className="single-block">
          <p>Εκτύπωση Πιστοποιητικού</p>
          <p className='block-text'>Μετά από την έγκριση της αίτησης από την γραμματεία, εκτυπώστε το πιστοποιητικό.</p>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
