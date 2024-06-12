
import hero1 from "../assets/unduhan (1).jpeg";
import hero2 from "../assets/unduhan (2).jpeg";
import hero3 from "../assets/unduhan (3).jpeg";

function ControlledCarousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={hero1} className="d-block w-100" alt="..."></img>
        </div>
        <div className="carousel-item">
          <img src={hero2} className="d-block w-100" alt="..."></img>
        </div>
        <div className="carousel-item">
          <img src={hero3} className="d-block w-100" alt="..."></img>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ControlledCarousel;
