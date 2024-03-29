import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [selectedOption, setSelectedOption] = useState('Επιλογή');

  const handleOptionClick = (option) => {
    // Set the selected option when a button is clicked
    setSelectedOption(option);
  };

  return (
    <div className="certificates-container">
      {/* Sidebar block */}
      <div className="sidebar">
        {/* Options */}
        <div className='line-top'></div>
        <div className="option-block">
          <button onClick={() => handleOptionClick('Επιλογή')}>Επιλογή</button>
        </div>
        <div className='line-middle'></div>
        <div className="option-block">
          <button onClick={() => handleOptionClick('Αιτήσεις')}>Αιτήσεις</button>
        </div>
        <div className='line-bottom'></div>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Conditional rendering based on the selected option */}
        {selectedOption === 'Επιλογή' && (
          <>
            <h1 className='main-text'>Επιλογή Πιστοποιητικού</h1>
            {/* Adding 5 blocks */}
            <div className="block-container">
                <div className="block-1">
                        <p className='over'>Φοιτητικής Ιδιότητας</p>
                        <button className="submit-button" onClick={() => alert('Επιτυχής αίτηση πιστοποιητικού φοιτητικής ιδιότητας')}>
                            Αίτηση
                        </button>
                        <p className='under'>Απομένουν 2 αντίτυπα!</p>
                        
                </div>
                <div className="block-2">
                    <p className='over'>Φορολογικής Χρήσης</p>
                    <button className="submit-button" onClick={() => alert('Επιτυχής αίτηση πιστοποιητικού φορολογικής χρήσης')}>
                        Αίτηση
                    </button>
                    <p className='under'>Απομένουν 2 αντίτυπα!</p>
                </div>
                <div className="block-3">
                    <p className='over'>Αναλυτική Βαθμολογία</p>
                    <button className="submit-button" onClick={() => alert('Επιτυχής αίτηση πιστοποιητικού αναλυτικής βαθμολογίας')}>
                        Αίτηση
                    </button>
                    <p className='under'>Απομένουν 3 αντίτυπα!</p>
                </div>
                <div className="block-4">
                    <p className='over'>Στρατολογικής χρήσης (Συνοπτικό)</p>
                    <button className="submit-button" onClick={() => alert('Επιτυχής αίτηση πιστοποιητικού στρατολογικής χρήσης(Συνοπτικό)')}>
                        Αίτηση
                    </button>
                    <p className='under'>Απομένουν 2 αντίτυπα!</p>
                </div>
                <div className="block-5">
                    <p className='over'>Στρατολογικής χρήσης(Αναλυτικό)</p>
                    <button className="submit-button" onClick={() => alert('Επιτυχής αίτηση πιστοποιητικού στρατολογικής χρήσης(Αναλυτικό)')}>
                        Αίτηση
                    </button>
                    <p className='under'>Απομένουν 1 αντίτυπα!</p>
                </div>
            </div>
          </>
        )}

        {selectedOption === 'Αιτήσεις' && (
          <>
          <h1 className='main-text'>Αιτήσεις Πιστοποιητικών</h1>
          {/* Adding 5 blocks */}
          <div className="block-container">
              <div className="block-1">
                      <p className='over'>Φοιτητικής Ιδιότητας</p>
                      <button className="submit-button2" onClick={() => console.log('Αίτηση for Block 1 clicked')}>
                          Εκτύπωση
                      </button>
              </div>
              <div className="block-2">
                  <p className='over'>Φορολογικής Χρήσης</p>
                  <button className="submit-button2" onClick={() => console.log('Αίτηση for Block 2 clicked')}>
                     Εκτύπωση
                  </button>
              </div>
              <div className="block-3">
                  <p className='over'>Αναλυτική Βαθμολογία</p>
                  <button className="submit-button2" onClick={() => console.log('Αίτηση for Block 3 clicked')}>
                      Εκτύπωση
                  </button>
              </div>
              <div className="block-4">
                  <p className='over'>Στρατολογικής χρήσης (Συνοπτικό)</p>
                  <button className="submit-button2" onClick={() => console.log('Αίτηση for Block 4 clicked')}>
                      Εκτύπωση
                  </button>
              </div>
              <div className="block-5">
                  <p className='over'>Στρατολογικής χρήσης (Αναλυτικό)</p>
                  <button className="submit-button2" onClick={() => console.log('Αίτηση for Block 5 clicked')}>
                      Εκτύπωση
                  </button>
              </div>
          </div>
        </>
        )}
      </div>
    </div>
  );
};

export default Certificates;
