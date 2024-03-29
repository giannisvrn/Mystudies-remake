import React, { useState,useEffect } from 'react';
import './Profile.css';
import { collection, doc, getDoc,updateDoc } from 'firebase/firestore';
import { db, auth } from '../../config/firebase'; // Import your Firebase configuration
import { onAuthStateChanged, getAuth, currentUser } from 'firebase/auth';


const Profile = () => {
  const [selectedOption, setSelectedOption] = useState('Γενικές Πληροφορίες');
  const [selectedDropdownOption, setSelectedDropdownOption] = useState('Option 1');
  const [selectedDropdownOption2, setSelectedDropdownOption2] = useState('Option-1');
  const [selectedOptionText, setSelectedOptionText] = useState('');
  const [selectedOptionText2, setSelectedOptionText2] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fatherName: '',
    motherName: '',
    birthday: '',
    family: '',
    siblings: '',
    army: '',
    town: '',
    id: '',
    town2: '',
    date: '',
    amka: '',
    permanent_addr: '',
    permanent_town: '',
    permanent_number: '',
    permanent_tk: '',
    temp_addr: '',
    temp_town: '',
    temp_number: '',
    temp_tk: '',
    email: '',
    semester_first: '',
    semester_now: '',
    date_reg: '',
    year_reg: ''
  });

  useEffect(() => {
    const fetchUserData = async (userId) => {
      const userDocRef = doc(db, 'users', userId);

      try {
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setFormData({
            fatherName: userData.fatherName || '',
            motherName: userData.motherName || '',
            birthday: userData.birthday || '',
            family: userData.family || '',
            siblings: userData.siblings || '',
            army: userData.army || '',
            town: userData.town || '',
            id: userData.id || '',
            town2: userData.town2 || '',
            date: userData.date || '',
            amka: userData.amka || '',
            permanent_addr: userData.permanent_addr || '',
            permanent_town: userData.permanent_town || '',
            permanent_number: userData.permanent_number || '',
            permanent_tk: userData.permanent_tk || '',
            temp_addr: userData.temp_addr || '',
            temp_town: userData.temp_town || '',
            temp_number: userData.temp_number || '',
            temp_tk: userData.temp_tk || '',
            email: userData.email || '',
            semester_first: userData.semester_first || '',
            semester_now: userData.semester_now || '',
            date_reg: userData.date_reg || '',
            year_reg: userData.year_reg || ''
          });
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      // A user is signed in, check their email
      if (user.email === 'giannisvrn@gmail.com') {
        const userId = 'user1';
        console.log('id', userId);
        fetchUserData(userId);
      } else if (user.email === 'sdi1234@di.uoa.gr') {
        const userId = 'user2';
        console.log('id', userId);
        fetchUserData(userId);
      } else {
        console.log('Unknown user email:', user.email);
      }
    } else {
      console.log('No user signed in');
    }
  });

  return () => unsubscribe();
  }, []);


  const generateChangeHandler = (fieldName) => (event) => {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  };

  const renderField = (label, fieldName, top,top2, className, lineClass) => {
    return (
      <div>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={formData[fieldName]}
              onChange={generateChangeHandler(fieldName)}
              className={className}
              style={{ top: top2 }}
            />
            <div className={lineClass}></div>
          </div>
        ) : (
          <div>
            <p className={className} style={{ top: top }}>{formData[fieldName]}</p>
            <div className={lineClass}></div>
          </div>
        )}
      </div>
    );
  };

  const handleOptionClick = (option) => {
    // Set the selected option when a button is clicked
    setSelectedOption(option);
  };

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedDropdownOption(selectedOption);

    switch (selectedOption) {
      case 'Option 1':
        setSelectedOptionText(
          <div className='selected-text'>
            <p>15100408-ΛΕΙΤΟΥΡΓΙΚΑ ΣΥΣΤΗΜΑΤΑ</p>
            <p>15100442-ΤΕΧΝΗΤΗ ΝΟΗΜΟΣΥΝΗ ΙΙ</p>
            <p>15100301-ΕΠΙΚΟΙΝΩΝΙΑ ΑΝΘΡΩΠΟΥ - ΜΗΧΑΝΗΣ</p>
          </div>
        );
        break;
      case 'Option 2':
        setSelectedOptionText(
          <div className='selected-text'>
            <p>15100163-ΓΡΑΦΙΚΑ Ι</p>
            <p>15100126-ΣΗΜΑΤΑ ΚΑΙ ΣΥΣΤΗΜΑΤΑ</p>
          </div>
        );
        break;
      case 'Option 3':
        setSelectedOptionText(
          <div className='selected-text'>
            <p>15100428-ΘΕΩΡΙΑ ΥΠΟΛΟΓΙΣΜΟΥ</p>
            <p>15100141-ΛΟΓΙΚΟΣ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΣ</p>
          </div>
        );
        break;
      default:
      setSelectedOptionText('');
    }
  };  

  useEffect(() => {
    // Set the default text for Option 1
    setSelectedOptionText(<div className='selected-text'>
    <p>15100408-ΛΕΙΤΟΥΡΓΙΚΑ ΣΥΣΤΗΜΑΤΑ</p>
    <p>15100442-ΤΕΧΝΗΤΗ ΝΟΗΜΟΣΥΝΗ ΙΙ</p>
    <p>15100301-ΕΠΙΚΟΙΝΩΝΙΑ ΑΝΘΡΩΠΟΥ - ΜΗΧΑΝΗΣ</p>
  </div>);

  }, []);

  const handleDropdownChange2 = (event) => {
    const selectedOption = event.target.value;
    setSelectedDropdownOption2(selectedOption);

    switch (selectedOption) {
      case 'Option-1':
        setSelectedOptionText2(
          <div className='selected-text'>
            <p>Αναλυτική Βαθμολογία</p>
          </div>
        );
        break;
      case 'Option-2':
        setSelectedOptionText2(
          <div className='selected-text'>
            <p>Φοιτητικής Ιδιότητας</p>
          </div>
        );
        break;
        case 'Option-3':
          setSelectedOptionText2(
            <div className='selected-text'>
            <p>Φορολογικής χρήσης</p>
          </div>
        );
        break;
      default:
      setSelectedOptionText2('');
    }
  }; 
  
  useEffect(() => {
    // Set the default text for Option-1
    setSelectedOptionText2(<div className='selected-text'>
    <p>Αναλυτική Βαθμολογία</p>
  </div>);

  }, []);


  const handleSaveChanges = async () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
    try {
      const user = auth.currentUser;

      if (user) {
        const userId = user.email === 'giannisvrn@gmail.com' ? 'user1' : 'user2';

        const userDocRef = doc(db, 'users', userId);

        // Update the Firestore document with the new data
        await updateDoc(userDocRef, formData);

        // Inform the user that changes have been saved (optional)
        console.log('Changes saved successfully');
      } else {
        console.log('No user signed in');
      }
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  return (
    <div className="profiles-container">
      {/* Sidebar block */}
      <div className="p-sidebar">
        {/* Options */}
        <div className='p-line-top'></div>
        <div className="p-option-block">
          <button onClick={() => handleOptionClick('Γενικές Πληροφορίες')}>Γενικές Πληροφορίες</button>
        </div>
        <div className='p-line-middle'></div>
        <div className="p-option-block2">
          <button onClick={() => handleOptionClick('Ιστορικό')}>Ιστορικό</button>
        </div>
        <div className='p-line-bottom'></div>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Conditional rendering based on the selected option */}
        {selectedOption === 'Γενικές Πληροφορίες' && (
          <>
            <div className="p-block-container">
                <div className="p-block-1">
                <p className='p-over'>Προσωπικά Στοιχεία</p>
                <p className='p-under-1'>Όνομα Πατέρα</p>
                {renderField('Όνομα Πατέρα', 'fatherName', '80px','60px', 'p-under-1-2', 'p-line-1')}
                <p className='p-under-2'>Όνομα Μητέρας</p>
                {renderField('Όνομα Μητέρας', 'motherName', '120px','100px', 'p-under-2-2', 'p-line-2')}
                <p className='p-under-3'>Ημερομηνία Γέννησης</p>
                {renderField('Ημερομηνία Γέννης', 'birthday', '160px','140px', 'p-under-3-2', 'p-line-3')}
                <p className='p-under-4'>Οικογενειακή Κατάσταση</p>
                {renderField('Οικογενειακή Κατάσταση', 'family', '200px','180px', 'p-under-4-2', 'p-line-4')}
                <p className='p-under-5'>Αριθμός Αδελφών</p>
                {renderField('Αριθμός Αδελφών', 'siblings', '240px','220px', 'p-under-5-2', 'p-line-5')}
                <p className='p-under-6'>Εκπλήρωση Στρατιωτικής Θητείας</p>
                {renderField('Εκπλήρωση Στρατιωτικής Θητείας', 'army', '290px','270px', 'p-under-6-2', 'p-line-6')}
                <p className='p-under-7'>Πόλη/Χωριό Γέννησης</p>
                {renderField('Πόλη/Χωριό Γέννησης', 'town', '340px','320px', 'p-under-7-2', 'p-line-7')}
                <p className='p-under-8'>Αριθμός Ταυτότητας</p>
                {renderField('Αριθμός Ταυτότητας', 'id', '380px','360px', 'p-under-8-2', 'p-line-8')}
                <p className='p-under-9'>Εκδούσα Αρχή</p>
                {renderField('Εκδούσα Αρχή', 'town2', '420px','400px', 'p-under-9-2', 'p-line-9')}
                <p className='p-under-10'>Ημερομηνία Έκδοσης</p>
                {renderField('Ημερομηνία Έκδοσης', 'date', '460px','440px', 'p-under-10-2', 'p-line-10')}
                <p className='p-under-11'>ΑΜΚΑ</p>
                {renderField('ΑΜΚΑ', 'amka', '500px','480px', 'p-under-11-2', 'p-line-11')}
                </div>
            </div>
            <div className="p-block-container">
                <div className="p-block-2">
                        <p className='p-over'>Επικοινωνία</p>
                        <p className='p-under-1'>Μόνιμη Διεύθυνση Κατοικίας</p>
                        {renderField('Μόνιμη Διεύθυνση Κατοικίας', 'permanent_addr', '90px','70px', 'p-under-1-2', 'e-line-1')}
                        <p className='e-under-2'>Μόνιμη Πόλη Κατοικίας</p>
                        {renderField('Μόνιμη Πόλη Κατοικίας', 'permanent_town', '140px','120px', 'e-under-2-2', 'e-line-2')}
                        <p className='p-under-3'>Τηλέφωνο Μόνιμης Κατοικίας</p>
                        {renderField('Τηλέφωνο Μόνιμης Κατοικίας', 'permanent_number', '180px','160px', 'p-under-3-2', 'e-line-3')}
                        <p className='e-under-4'>ΤΚ Μόνιμης Κατοικίας</p>
                        {renderField('ΤΚ Μόνιμης Κατοικίας', 'permanent_tk', '220px','200px', 'e-under-4-2', 'e-line-4')}
                        <p className='p-under-5'>Προσωρινή Διεύθυνση Κατοικίας</p>
                        {renderField('Προσωρινή Διεύθυνση Κατοικίας', 'temp_addr', '260px','240px', 'p-under-5-2', 'e-line-5')}
                        <p className='e-under-6'>Προσωρινή Πόλη Κατοικίας</p>
                        {renderField('Προσωρινή Πόλη Κατοικίας', 'temp_town', '310px','290px', 'e-under-6-2', 'e-line-6')}
                        <p className='p-under-7'>Τηλέφωνο Προσωρινής Κατοικίας</p>
                        {renderField('Τηλέφωνο Προσωρινής Κατοικίας', 'temp_number', '350px','330px', 'p-under-7-2', 'e-line-7')}
                        <p className='e-under-8'>ΤΚ Προσωρινής Κατοικίας</p>
                        {renderField('ΤΚ Προσωρινής Κατοικίας', 'temp_tk', '410px','370px', 'e-under-8-2', 'e-line-8')}
                        <p className='e-under-9'>Διεύθυνση Ηλεκτρονικού Ταχυδρομείου</p>
                        {renderField('Διεύθυνση Ηλεκτρονικού Ταχυδρομείου', 'email', '450px','430px', 'p-under-9-2', 'e-line-9')}
                </div>
            </div>
            <div className="p-block-container">
                <div className="p-block-3">
                        <p className='p-over'>Σπουδές</p>
                        <p className='p-under-1'>Εξάμηνο 1ης Εγγραφής</p>
                        {renderField('Εξάμηνο 1ης Εγγραφής', 'semester_first', '80px','60px', 'p-under-1-2', 'p-line-1')}
                        <p className='p-under-2'>Εξάμηνο Φοίτησης</p>
                        {renderField('Εξάμηνο Φοίτησης', 'semester_now', '120px','100px', 'p-under-2-2', 'p-line-2')}
                        <p className='p-under-3'>Ημερομηνία 1ης Εγγραφής</p>
                        {renderField('Ημερομηνία 1ης Εγγραφής', 'date_reg', '180px','160px', 'p-under-3-2', 's-line-3')}
                        <p className='s-under-4'>Ακαδημαϊκό Έτος 1ης Εγγραφής</p>
                        {renderField('Ακαδημαϊκό Έτος 1ης Εγγραφής', 'year_reg', '230px','210px', 'p-under-4-2', 's-line-4')}
                </div>
            </div>
            <button className='e-button' onClick={handleSaveChanges}>
              {isEditing ? 'Αποθήκευση Αλλαγών' : 'Επεξεργασία Προφίλ'}
            </button>
          </>
        )}

        {selectedOption === 'Ιστορικό' && (
          <>
          <div className='i-block-container'>
            <div className='i-block-1'>
              <h1 className='i-main-text'>Δηλώσεις</h1>
              <select className='i-dropdown' value={selectedDropdownOption} onChange={handleDropdownChange}>
                  <option value="Option 1">Τρίτη 16 Ιανουαρίου 2024</option>
                  <option value="Option 2">Δευτέρα 15 Ιανουαρίου 2024</option>
                  <option value="Option 3">Παρασκευή 1 Δεκεμβρίου 2023</option>
              </select>
              <p className='selected-1'>{selectedOptionText}</p>
              <h1 className='i-main-text-2'>Αιτήσεις Πιστοποιητικών</h1>
              <select className='i-dropdown-2' value={selectedDropdownOption2} onChange={handleDropdownChange2}>
                  <option value="Option-1">Τρίτη 16 Ιανουαρίου 2024</option>
                  <option value="Option-2">Δευτέρα 15 Ιανουαρίου 2024</option>
                  <option value="Option-3">Σάββατο 2 Δεκεμβρίου 2023</option>
              </select>
              <p className='selected-2'>{selectedOptionText2}</p>
            </div>
          </div>
        </>
        )}
      </div>
    </div>
  );
};

export default Profile;
