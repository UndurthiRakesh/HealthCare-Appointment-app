import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css' // You can create this for extra styles

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">
        Meet Our HealthCare Doctors
      </h2>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        <div className="carousel-slide">
          <img
            src="https://res.cloudinary.com/dtge185n9/image/upload/v1754259391/Screenshot_2025-08-04_034606_bghsb0.png"
            alt="Doctor 1"
            className="doctor-image"
          />
          <div className="legend">
            <h3>Dr. Nisha Reddy</h3>
            <p>
              Cardiologist with 22+ years of experience providing advanced heart care.
            </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img
            src="https://res.cloudinary.com/dtge185n9/image/upload/v1754174883/Screenshot_2025-08-03_041640_dmxkgl.png"
            alt="Doctor 2"
            className="doctor-image"
          />
          <div className="legend">
            <h3>24/7 Emergency Care</h3>
            <p>
              We are Providing 24/7 specility. without any distabance
            </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img
            src="https://res.cloudinary.com/dtge185n9/image/upload/v1754260123/Screenshot_2025-08-04_035821_t6uqgo.png"
            alt="Doctor 3"
            className="doctor-image"
          />
          <div className="legend">
            <h3>Trusted by Thousands</h3>
            <p>
              Tousands of People Trusted Our HealthCare.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
