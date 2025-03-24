import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import smile from "../image/smile.png";
import person from "../image/person.png";
import people from "../image/peoples.png";
import image1 from "../image/image1.avif";
import image2 from "../image/image2.webp";
import image3 from "../image/image3.avif";
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="text-center mt-3">
        <h1
          style={{
            fontSize: "61px",
            fontWeight: "600",
            lineHeight: "73px",
          }}
        >
          Connect Communities
        </h1>
        <p style={{ fontSize: "1.3em" }} className="text-secondary">
          Bridging gaps between faiths with tech and a dash of fun!
        </p>
      </div>

      {/*Hero Section...*/}
      <div className="mx-5 mt-5" style={{ height: "500px" }}>
        <div className="row h-100">
          <div
            className="col-5 p-3 d-flex flex-column justify-content-around"
            style={{ height: "90%" }}
          >
            <div
              className="text-center rounded-5 p-2"
              style={{ backgroundColor: "#E8F2FF", width: "42%" }}
            >
              <BsCheckCircleFill
                style={{
                  color: "#1C64F2",
                  fontSize: "22px",
                }}
              />{" "}
              <span
                style={{ color: "#3F7CF4", fontSize: "15px" }}
                className="fw-semibold ms-2"
              >
                Unlimited Advantage
              </span>
            </div>
            <div
              style={{
                fontSize: "48px",
                lineHeight: "48px",
                fontWeight: "600",
                color: "rgb(0,0,0)",
              }}
            >
              Unite, innovate, <img src={smile} /> <img src={person} /> Connect,
              Inspires Together <img src={people} />
            </div>
            <div
              style={{
                fontSize: "15px",
                lineHeight: "21px",
                color: "rgb(0, 0, 0)",
                textAlign: "center",
              }}
            >
              Join us to be part of a community where spirituality meets
              innovation. Together, we'll build a world that's more inclusive,
              engaging, and connected than ever before!
            </div>
            <div
              className="btn btn-secondary divHover w-50 rounded-4 d-flex justify-content-center flex-wrap align-content-center"
              style={{
                fontSize: "16px",
                lineHeight: "18px",
                padding: "12px 14px 12px 14px",
              }}
            >
              <div className="me-2">View Our Services </div>
              <div>
                <FaArrowRight className="iconMove" />
              </div>
            </div>
          </div>
          <div className="col-7 d-flex justify-content-between h-100">
            <div className="h-100" style={{ width: "33.33%" }}>
              <div className="h-100 w-100 p-3 d-flex flex-column justify-content-end divHover1">
                <img
                  src={image1}
                  className="w-100 border object-fit-cover rounded-pill img"
                  style={{ height: "80%" }}
                />
              </div>
            </div>

            <div className="h-100" style={{ width: "33.33%" }}>
              <div className="h-100 w-100 p-3 d-flex flex-column justify-content-center divHover1">
                <img
                  src={image2}
                  className="w-100 object-fit-cover border rounded-pill img"
                  style={{ height: "80%" }}
                />
              </div>
            </div>
            <div className=" h-100" style={{ width: "33.33%" }}>
              <div className="h-100 w-100 p-3 divHover1">
                <img
                  src={image3}
                  className="w-100 object-fit-cover border rounded-pill img"
                  style={{ height: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="border mt-5 d-flex flex-column justify-content-center"
        style={{
          height: "600px",
          backgroundColor: "#1E1E1E",
        }}
      >
        <div
          className="container h-75 mt-5"
          style={{ border: "1px solid yellow" }}
        >
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "40px",
              lineHeight: "46px",
              fontWeight: "500",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Why Communion Rocks!
          </div>
          <div className="row">
            <div className="col-4">
              <div
                style={{ height: "370px", color: "rgb(255, 255, 255)" }}
                className=" d-flex flex-column justify-content-around p-1"
              >
                <div
                  style={{
                    fontSize: "20px",
                    lineHeight: "29px",
                    fontWeight: "400",
                    width: "80%",
                  }}
                >
                  Communion is not just another platform—it's a vibrant space
                  that unites diverse faiths, beliefs, and traditions. By
                  promoting collaboration and connection, we're fostering a
                  world where differences become strengths and unity becomes the
                  norm.
                </div>
                <div
                  className="text-white d-flex flex-wrap align-content-center justify-content-center "
                  style={{ width: "70%", fontSize: "18px", height: "60px" }}
                >
                  <div
                    className="d-flex  flex-wrap align-content-center justify-content-around joinBtn p-2"
                    style={{ width: "75%", height: "80%" }}
                  >
                    Why Join Us?{" "}
                    <span>
                      <FaArrowRight
                        className="iconMove "
                        style={{ fontSize: "15px" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
