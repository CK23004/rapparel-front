import React, { useState, useEffect } from 'react';
import './Banner.css'; // Importing the CSS file
import { assets } from '../../assets/assets';

function Banner() {
  const [slideIndex, setSlideIndex] = useState(1);

  // Function to handle next and previous controls
  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  // Function to handle thumbnail image controls
  const currentSlide = (n) => {
    showSlides(n);
  };

  // Function to display the current slide
  const showSlides = (n) => {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    let index = n;

    if (n > slides.length) {
      index = 1;
    }
    if (n < 1) {
      index = slides.length;
    }
    
    setSlideIndex(index);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[index - 1].style.display = 'block';
    dots[index - 1].className += ' active';
  };

  // UseEffect to initially show the first slide
  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      {/* Full-width images with number and caption text */}
      <div className="mySlides">
        <div className="numbertext">1 / 3</div>
        <img src={assets.banner1} alt="Slide 1" style={{ width: '100%', borderRadius:' 1rem'}} />
        {/* <div className="text">Caption Text</div> */}
      </div>

      <div className="mySlides">
        <div className="numbertext">2 / 3</div>
        <img src={assets.banner1} alt="Slide 2" style={{ width: '100%', borderRadius:' 1rem' }} />
        {/* <div className="text">Caption Two</div> */}
      </div>

      <div className="mySlides">
        <div className="numbertext">3 / 3</div>
        <img src={assets.banner3} alt="Slide 3" style={{ width: '100%', borderRadius:' 1rem' }} />
        {/* <div className="text">Caption Three</div> */}
      </div>

      {/* Next and previous buttons */}
      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>

      {/* Dots/circles for navigation */}
      <div style={{ textAlign: 'center'}} className='dot-conatiner'>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
}

export default Banner;
