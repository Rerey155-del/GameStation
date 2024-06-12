import React from "react";
import xIcon from "../assets/x.svg";
import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";
import { Nav } from "react-bootstrap";
import latarValorant2 from "../assets/latarValorant2.jpg";

const footer = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${latarValorant2})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <br></br>
          <div className="col-lg-6 col-md-12 mb-3 mt-4 text-center text-md-left text-white ">
            <h2>My GameStation</h2>
            <Nav className="text-white d-flex align-items-center justify-content-center justify-content-md-start mt-4">
              <Nav.Link className="text-white" href="#features">
                <h6>Beranda</h6>
              </Nav.Link>
              <Nav.Link className="text-white" href="#pricing">
                <h6>About</h6>
              </Nav.Link>
              <Nav.Link className="text-white" href="#pricing">
                <h6>Kontak</h6>
              </Nav.Link>
            </Nav>
          </div>
          <div className="col-lg-6 col-md-12 mb-3 mt-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-5">
              <a href="https://www.x.com/">
                <img src={xIcon} alt="" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={facebookIcon} alt="" />
              </a>
              <a href="https://www.Instagram.com/">
                <img src={instagramIcon} alt="" />
              </a>
            </div>
            <div className="mt-4 d-flex align-items-center justify-content-center justify-content-md-end text-white">
              <h6>created by Rey Vars</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
