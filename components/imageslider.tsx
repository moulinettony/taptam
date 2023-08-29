import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative py-14">
      <h1 className='text-3xl font-semibold mb-10'>You are just one click away from 5 stars!</h1>
      <div className='lg:flex'>
      <Carousel
        className='lg:w-1/2'
        showThumbs={false}
        selectedItem={currentImageIndex}
        onChange={goToSlide}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>

      {/* Custom Navigation Buttons */}
      <div className="custom-nav-buttons gap-6 text-left lg:w-1/2 justify-center flex flex-col">
        <button
          className={`carousel-button ${currentImageIndex === 0 ? 'selected-button' : ''}`}
          onClick={() => goToSlide(0)}
        >
          <h3>5 Smartap Google Cards + FREE SHIPPING</h3>
          <p>$99.00 $199.00</p>
        </button>
        <button
          className={`carousel-button ${currentImageIndex === 1 ? 'selected-button' : ''}`}
          onClick={() => goToSlide(1)}
        >
          <h3>5 Smartap Google Cards + FREE SHIPPING</h3>
          <p>$99.00 $199.00</p>
        </button>
        <button
          className={`carousel-button ${currentImageIndex === 2 ? 'selected-button' : ''}`}
          onClick={() => goToSlide(2)}
        >
          <h3>5 Smartap Google Cards + FREE SHIPPING</h3>
          <p>$99.00 $199.00</p>
        </button>
        <button
          className={`carousel-button ${currentImageIndex === 3 ? 'selected-button' : ''}`}
          onClick={() => goToSlide(3)}
        >
          <h3>5 Smartap Google Cards + FREE SHIPPING</h3>
          <p>$99.00 $199.00</p>
        </button>
        <a className='buy-now flex justify-center gap-4' href="/productpage">
          <svg width="41" height="25" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.2059 3.61336C39.8875 3.18725 39.4001 2.94312 38.8681 2.94312H33.7711H13.7836L13.4746 1.75308C13.2066 0.72114 12.2747 0 11.2085 0H7.80102C7.55238 0 7.35059 0.201793 7.35059 0.450431C7.35059 0.699069 7.55238 0.900862 7.80102 0.900862H11.2085C11.8648 0.900862 12.4378 1.34409 12.6031 1.97919L16.6997 17.7542C16.7511 17.9528 16.9303 18.0916 17.1357 18.0916H36.2881C36.5372 18.0916 36.7385 17.8902 36.7385 17.6411C36.7385 17.392 36.5372 17.1907 36.2881 17.1907H17.4835L16.647 13.9706H36.0948C37.1236 13.9706 38.0461 13.2814 38.3375 12.295L40.469 5.08536C40.6203 4.57593 40.5239 4.03901 40.2059 3.61336ZM39.6055 4.83042L37.474 12.04C37.2948 12.6467 36.7277 13.0702 36.0953 13.0702H16.4133L14.0174 3.84398H33.7711H38.8681C39.1132 3.84398 39.3375 3.95658 39.4839 4.15252C39.6307 4.34846 39.6749 4.59575 39.6055 4.83042Z" fill="black"/>
          <path d="M20.4482 24.6253C19.0216 24.6253 17.8613 23.465 17.8613 22.0385C17.8613 20.6125 19.0216 19.4521 20.4482 19.4521C21.8742 19.4521 23.035 20.6125 23.035 22.0385C23.035 23.465 21.8747 24.6253 20.4482 24.6253ZM20.4482 20.353C19.5185 20.353 18.7622 21.1093 18.7622 22.0385C18.7622 22.9682 19.5185 23.7245 20.4482 23.7245C21.3778 23.7245 22.1341 22.9682 22.1341 22.0385C22.1341 21.1093 21.3778 20.353 20.4482 20.353Z" fill="black"/>
          <path d="M32.4819 24.6253C31.0558 24.6253 29.8955 23.465 29.8955 22.0385C29.8955 20.6125 31.0558 19.4521 32.4819 19.4521C33.9084 19.4521 35.0687 20.6125 35.0687 22.0385C35.0687 23.465 33.9084 24.6253 32.4819 24.6253ZM32.4819 20.353C31.5526 20.353 30.7964 21.1093 30.7964 22.0385C30.7964 22.9682 31.5526 23.7245 32.4819 23.7245C33.4116 23.7245 34.1678 22.9682 34.1678 22.0385C34.1678 21.1093 33.4116 20.353 32.4819 20.353Z" fill="black"/>
          <path d="M9.43022 6.54979H0.450431C0.201793 6.54979 0 6.34799 0 6.09936C0 5.85072 0.201793 5.64893 0.450431 5.64893H9.43022C9.67886 5.64893 9.88065 5.85072 9.88065 6.09936C9.88065 6.34799 9.67886 6.54979 9.43022 6.54979Z" fill="black"/>
          <path d="M9.89657 10.2602H0.917228C0.66859 10.2602 0.466797 10.0584 0.466797 9.80981C0.466797 9.56117 0.66859 9.35938 0.917228 9.35938H9.89702C10.1457 9.35938 10.3474 9.56117 10.3474 9.80981C10.347 10.0584 10.1452 10.2602 9.89657 10.2602Z" fill="black"/>
          <path d="M10.4624 13.9712H1.48266C1.23402 13.9712 1.03223 13.7698 1.03223 13.5207C1.03223 13.2717 1.23402 13.0703 1.48266 13.0703H10.4624C10.7111 13.0703 10.9129 13.2717 10.9129 13.5207C10.9129 13.7698 10.7111 13.9712 10.4624 13.9712Z" fill="black"/>
          </svg>
          BUY NOW</a>
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;
