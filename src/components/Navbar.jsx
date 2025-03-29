import React from "react";
import image1 from "../image/communion.png";
import "../index.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "1000",
          backgroundColor: "white",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 d-flex flex-column justify-content-center">
              <img
                src={image1}
                className="object-fit-contain"
                style={{ width: "75%" }}
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <ul
                style={{
                  listStyle: "none",
                  padding: "0px",
                }}
                className="d-flex justify-content-around m-4 fw-semibold"
              >
                <Link to="/" className="hover1">
                  <li>Home</li>
                </Link>
                <Link className="hover1">
                  <li>Communities</li>
                </Link>
                <Link className="hover1">
                  <li>Events</li>
                </Link>
                <Link className="hover1">
                  <li>Leaders</li>
                </Link>
              </ul>
            </div>
            <div className="col-md-3 d-flex justify-content-end flex-wrap align-content-center">
              <button className="btn btn-secondary w-50">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
