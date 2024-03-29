import React, {useState} from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentSemester, onDeclareButtonClick, selectedFilter, onFilterChange }) => {
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  // Toggle the visibility of the filter modal
  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };
  const handleFilterToggle = (option) => {
    if (option === 'Όλα') {
      onFilterChange(['Όλα']);
    } else {
      const updatedFilter = [...selectedFilter];
      const allIndex = updatedFilter.indexOf('Όλα');

      if (allIndex !== -1) {
        // If "Όλα" is in the filter, remove it when any other option is checked
        updatedFilter.splice(allIndex, 1);
      }

      const optionIndex = updatedFilter.indexOf(option);

      if (optionIndex !== -1) {
        // Uncheck the option if it is already checked
        updatedFilter.splice(optionIndex, 1);
      } else {
        // Check the option
        updatedFilter.push(option);
      }

      onFilterChange(updatedFilter);
    }
  };
  return (
    <div>
      <div className="progress-bar-container">
        <div className="circle-container">
          <div className="circle completed"></div>
          <div className="label">Προβολή</div>
        </div>
        <div className="prog-line first-half"></div>
        <div className="circle-container">
          <div className="circle">2</div>
          <div className="label">Δήλωση</div>
        </div>
        <div className="prog-line"></div>
        <div className="circle-container">
          <div className="circle">3</div>
          <div className="label">Οριστικοποίηση</div>
        </div>
      </div>
      <div className="blue-line-container">
        <div className="above-line">
          <div className="blue-left-content">
            <p>{`${currentSemester}ο Εξάμηνο`}</p>
          </div>
          <div className="blue-right-content">
            <div className="button-container">
              <button onClick={toggleFilterModal}>Φίλτρα</button>
              <button onClick={onDeclareButtonClick}>Δήλωση</button>
            </div>
          </div>
        </div>
        <div className="blue-line"></div>
      </div>
      {isFilterModalVisible && (
        <div className="filter-modal">
          <p>Επιλέξτε τα φίλτρα:</p>
          <div>
            <label>
              <input
                type="checkbox"
                value="Όλα"
                checked={selectedFilter.includes('Όλα')}
                onChange={() => handleFilterToggle('Όλα')}
              />
              Όλα
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Υποχρεωτικό"
                checked={selectedFilter.includes('Υποχρεωτικό')}
                onChange={() => handleFilterToggle('Υποχρεωτικό')}
              />
              Υποχρεωτικό
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Προαιρετικό"
                checked={selectedFilter.includes('Προαιρετικό')}
                onChange={() => handleFilterToggle('Προαιρετικό')}
              />
              Προαιρετικό
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Γενικής Παιδείας"
                checked={selectedFilter.includes('Γενικής Παιδείας')}
                onChange={() => handleFilterToggle('Γενικής Παιδείας')}
              />
              Γενικής&nbsp;Παιδείας {/* non-breaking space*/}
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Κατ’ Επιλογή Υποχρεωτικό"
                checked={selectedFilter.includes('Κατ’ Επιλογή Υποχρεωτικό')}
                onChange={() => handleFilterToggle('Κατ’ Επιλογή Υποχρεωτικό')}
              />
              Κατ’&nbsp;Επιλογή&nbsp;Υποχρεωτικό {/* non-breaking space*/}
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Project"
                checked={selectedFilter.includes('Project')}
                onChange={() => handleFilterToggle('Project')}
              />
              Project
            </label>
          </div>
          <button onClick={toggleFilterModal}>Κλείσιμο</button>
        </div>
      )}
  </div>
  );
};

export default ProgressBar;
