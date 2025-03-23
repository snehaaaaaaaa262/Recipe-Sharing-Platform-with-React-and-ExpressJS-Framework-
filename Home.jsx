import React from 'react';

const Home = () => {
  return (
    <div>
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images.jpg" className="w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="img.jpg" className="w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="img.webp" className="w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;