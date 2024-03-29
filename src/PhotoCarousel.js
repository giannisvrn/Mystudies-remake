// PhotoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './icons/image1.jpg'
import leftarrow from './icons/left-arrow.png'
import { Link } from 'react-router-dom';
import professor from './icons/professor.jpg'

const CustomPrevArrow = (props) => (
  <button {...props} className="carousel-arrow prev-arrow">
    <img src={leftarrow} alt='Previous' style={{ width: '30px', height: '30px' }}/>
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="carousel-arrow next-arrow">
    <img src={leftarrow} alt='Next' style={{ width: '30px', height: '30px', transform: 'scaleX(-1)' }} />
  </button>
);

const PhotoCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='carousel-slide'>
          <div className='carousel-container'>
            <p className="carousel-text">Είσαι Φοιτητής/τρια;</p>
            <img src={image1} alt="Slide 1" className='carousel-image' />
            <Link to="/signin" className="carousel-button">Σύνδεση</Link>
          </div>
        </div>
        <div>
        <div className='carousel-slide'>
        <div className='carousel-container'>
            <p className="carousel-text">Είσαι Διδάσκων;</p>
          <img src={professor} alt="Slide 2" className='carousel-image2'/>
          <Link to="/signin" className="carousel-button">Σύνδεση</Link>
          </div>
        </div>
        </div>
      </Slider>
      
      {currentSlide === 0 && (
              <div className="text-block" >
                <div className="block">
                  <p className="block-text">Μαθήματα</p>
                  <p className="block-description">Εδώ μπορείτε να βρείτε τα μαθήματα που προσφέρονται και να δηλώσετε αυτά που επιθυμείτε.</p>
                </div>
                <div className="block">
                  <p className="block-text">Βαθμολογία</p>
                  <p className="block-description">Επίσης μπορείτε να βρείτε τις βαθμολογίες που σας έχουν καταχωρηθεί και να τις εκυπώσετε.</p>
                </div>
                <div className="block">
                  <p className="block-text">Πιστοποιητικά</p>
                  <p className="block-description">Επιπλέον μπορείτε να βρείτε τα πιστοποιητικά που υπάρχουν διαθέσιμα και να τα εκυπώσετε.</p>
                </div>
              </div>
      )}
      {currentSlide === 1 && (
        <div className="text-block" >
                <div className="block">
                  <p className="block-text">Προβολή Μαθημάτων</p>
                  <p className="block-description">Παρακολουθήστε τα μαθήματα στα οποία μπορείτε να υποβάλετε βαθμολογίες.</p>
                </div>
                <div className="block">
                  <p className="block-text">Δημιουργία/Τροποποίηση Βαθμολογίου</p>
                  <p className="block-description">Δημιουργήστε νέα Βαθμολόγια, αποθηκεύστε τα είτε προσωρινά ή οριστικά, και παρακολουθήστε τα.</p>
                </div>
              </div>
      )}
      </div>
  );
};

export default PhotoCarousel;
