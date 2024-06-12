import React from "react";
import Gameplay from "../assets/gameplay1.jpg";
import Gameplay2 from "../assets/gameplay2.jpg";
import Gameplay3 from "../assets/gameplay3.jpg";
import GameAPEX from "../assets/gameplayAPEX1.jpg";
import GameAPEX2 from "../assets/gameplayAPEX2.png";
import GameAPEX3 from "../assets/gameplayAPEX3.png";
import GameValorant from "../assets/gameplayValorant.jpg";
import GameValorant2 from "../assets/gameplayvalorant2.jpg";
import GameValorant3 from "../assets/gameplayvalorant3.png";
import WOW1 from "../assets/WOW1.jpg";
import WOW2 from "../assets/WOW2.jpg";
import WOW3 from "../assets/WOW3.jpg";
import WOT1 from "../assets/WOT1.jpg";
import WOT2 from "../assets/WOT2.jpg";
import WOT3 from "../assets/WOT3.jpg";

const cuplikan = () => {
  return (
    <div className="col-12 text-center my-4 text-white">
      <h2>Gameplay</h2>
      <div className="row justify-content-center">
        <div className="col-md-11 col-sm-12" style={{ maxWidth: "85rem" }}>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade my-3"
            data-bs-ride="carousel"
          >
            <h4>PUBG</h4>
            <div className="carousel-inner w-80 rounded-5">
              <div className="carousel-item active">
                <img src={Gameplay} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Gameplay2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Gameplay3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* APEX LEGENDS */}
          <div
            id="carouselExampleFade2"
            className="carousel slide carousel-fade my-4  "
            data-bs-ride="carousel"
          >
            <h4>APEX Legends</h4>
            <div className="carousel-inner w-80 rounded-5">
              <div className="carousel-item active">
                <img src={GameAPEX} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={GameAPEX2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={GameAPEX3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade2"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade2"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Valorant */}
          <div
            id="carouselExampleFade3"
            className="carousel slide carousel-fade my-4  "
            data-bs-ride="carousel"
          >
            <h4>VALORANT</h4>
            <div className="carousel-inner w-80 rounded-5">
              <div className="carousel-item active">
                <img src={GameValorant} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={GameValorant2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={GameValorant3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade3"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade3"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* {/* WOW */}
          <div
            id="carouselExampleFade4"
            className="carousel slide carousel-fade my-4  "
            data-bs-ride="carousel"
          >
            <h4>World Of Warship</h4>
            <div className="carousel-inner w-80 rounded-5">
              <div className="carousel-item active">
                <img src={WOW1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={WOW2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={WOW3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade4"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade4"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* {/* WOT */}
          <div
            id="carouselExampleFade5"
            className="carousel slide carousel-fade my-4  "
            data-bs-ride="carousel"
          >
            <h4>World Of Tanks</h4>
            <div className="carousel-inner w-80 rounded-5">
              <div className="carousel-item active">
                <img src={WOT1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={WOT2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={WOT3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade5"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade5"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="text px-5 text-center">
        <h5>
          "Jangan lewatkan kesempatan untuk merasakan keseruan dunia game di
          GameStation! Dengan koleksi game terbaru dan terpopuler, Anda pasti
          akan menemukan sesuatu yang menyenangkan."
        </h5>
      </div>
    </div>
  );
};

export default cuplikan;
