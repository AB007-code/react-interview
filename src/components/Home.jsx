import React, { useRef } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import smile from "../image/smile.png";
import person from "../image/person.png";
import people from "../image/peoples.png";
import image1 from "../image/image1.avif";
import image2 from "../image/image2.webp";
import image3 from "../image/image3.avif";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import contact from "../image/contact.png";
import fan from "../image/fan.png";
import stati from "../image/static.png";
const Home = () => {
  const modal = useRef();
  const modal1 = useRef();
  const modalDiv = useRef();
  const modal2 = useRef();
  const modalDiv2 = useRef();
  const modal3 = useRef();
  const popupHandel = () => {
    modal.current.style.backdropFilter = "blur(5px)";
    modal1.current.opacity = "1";
    modal.current.style.display = "block";
  };
  const handeler = (e) => {
    if (e.target == modal.current) {
      modal.current.style.display = "none";
    }
    if (e.target == modalDiv.current) {
      modalDiv.current.style.display = "none";
    }
    if (e.target == modalDiv2.current) {
      modalDiv2.current.style.display = "none";
    }
  };
  const divBtnHandeler = () => {
    modal.current.style.display = "none";
    modalDiv.current.style.display = "none";
    modalDiv2.current.style.display = "none";
  };
  const popupHandel2 = () => {
    modalDiv.current.style.backdropFilter = "blur(5px)";
    modal2.current.opacity = "1";
    modalDiv.current.style.display = "block";
  };
  const popupHandel3 = () => {
    modalDiv2.current.style.backdropFilter = "blur(5px)";
    modal3.current.opacity = "1";
    modalDiv2.current.style.display = "block";
  };
  return (
    <div>
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
        className="mt-5 d-flex flex-column justify-content-center"
        style={{
          height: "600px",
          backgroundColor: "#1E1E1E",
        }}
      >
        <div className="mx-5 h-75 p-2">
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
          <div className="row mt-5">
            <div className="col-4">
              <div
                style={{ height: "370px", color: "rgb(255, 255, 255)" }}
                className="d-flex flex-column justify-content-around"
              >
                <div
                  style={{
                    fontSize: "20px",
                    lineHeight: "29px",
                    fontWeight: "400",
                    width: "75%",
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
            <div className="col-8 row row-cols-3 gx-4 mb-4">
              <div className="h-100">
                <div
                  className="h-100 rounded-4 text-white p-3 d-flex flex-column justify-content-around"
                  style={{ backgroundColor: "#2E2E2E" }}
                >
                  <div>
                    <img
                      src={contact}
                      style={{
                        fontSize: "16px",
                        lineHeight: "18px",
                        fontWeight: "400",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "22.5px",
                      lineHeight: "23px",
                      fontWeight: "400",
                    }}
                  >
                    Unifying Communities
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      lineHeight: "24px",
                      fontWeight: "400",
                    }}
                  >
                    Communion bridges diverse religious communities, becoming
                    the social glue for faiths,
                  </div>
                  <div
                    className="btn text-white border border-2 rounded-pill btnHover"
                    style={{ width: "70%", backgroundColor: "#2E2E2E" }}
                    onClick={popupHandel3}
                  >
                    Learn More <FaArrowRight className="mb-1 ms-2 iconMove" />
                  </div>
                  {/*Making Modal*/}
                  <div className="modalDiv" ref={modalDiv2} onClick={handeler}>
                    <div
                      className="childDiv ps-5 pt-2  d-flex flex-column justify-content-evenly"
                      ref={modal3}
                    >
                      <div className="text-center">
                        <img src={contact} />
                      </div>
                      <h3 className="text-center mt-2 ">
                        Unifying Communities
                      </h3>
                      <div className="me-4">
                        <p className="me-2">
                          Discover a platform where different faiths come
                          together in harmony. Our community features:
                        </p>
                        <ul className=" px-4 " style={{ marginTop: "-15px" }}>
                          <li>Regular interfaith dialogues and discussions</li>
                          <li>
                            {" "}
                            Shared celebration of festivals and traditions
                          </li>
                          <li>Cultural exchange programs and events</li>
                          <li>Collaborative community service projects</li>
                          <li> Educational resources about different faiths</li>
                        </ul>
                      </div>
                      <p className="me-4">
                        Join us in building bridges across religious boundaries
                        and creating lasting connections..
                      </p>
                      <div
                        className="mb-2 text-center text-black d-flex flex-column flex-wrap justify-content-end align-content-center"
                        style={{ height: "50px" }}
                      >
                        <button
                          onClick={divBtnHandeler}
                          className="btn bg-white rounded-pill w-25 btnHover"
                        >
                          Show Less <FaArrowLeft />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-100">
                <div
                  className="h-100 rounded-4 text-white p-3 d-flex flex-column justify-content-around"
                  style={{ backgroundColor: "#2E2E2E" }}
                >
                  <div>
                    <img
                      src={fan}
                      style={{
                        fontSize: "16px",
                        lineHeight: "18px",
                        fontWeight: "400",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "22.5px",
                      lineHeight: "23px",
                      fontWeight: "400",
                    }}
                  >
                    Innovative and Fun
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      lineHeight: "24px",
                      fontWeight: "400",
                    }}
                  >
                    Experience faith in a fresh way through our interactive
                    features, engaging events, and modern approach to spiritual
                    connection.
                  </div>
                  <div
                    className="btn text-white border border-2 rounded-pill btnHover"
                    style={{ width: "70%", backgroundColor: "#2E2E2E" }}
                    onClick={popupHandel2}
                  >
                    Learn More <FaArrowRight className="mb-1 ms-2 iconMove" />
                  </div>
                  {/*Modal Section*/}
                  <div className="modalDiv" ref={modalDiv} onClick={handeler}>
                    <div
                      className="childDiv ps-5 pt-2  d-flex flex-column justify-content-evenly"
                      ref={modal2}
                    >
                      <div className="text-center">
                        <img src={fan} />
                      </div>
                      <h3 className="text-center mt-2 ">Innovative and Fun</h3>
                      <div>
                        <p>
                          Explore spirituality through cutting-edge technology
                          and engaging features:
                        </p>
                        <ul className=" px-4 " style={{ marginTop: "-15px" }}>
                          <li> Interactive virtual prayer rooms</li>
                          <li> Live-streamed religious ceremonies</li>
                          <li>Faith-based social networking</li>
                          <li>Gamified learning experiences</li>
                          <li> Mobile-first spiritual tools</li>
                        </ul>
                      </div>
                      <p>
                        Experience the perfect blend of tradition and technology
                        in your spiritual journey.
                      </p>
                      <div
                        className="mb-2 text-center text-black d-flex flex-column flex-wrap justify-content-end align-content-center"
                        style={{ height: "50px" }}
                      >
                        <button
                          onClick={divBtnHandeler}
                          className="btn bg-white rounded-pill w-25 btnHover"
                        >
                          Show Less <FaArrowLeft />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-100">
                <div
                  className="h-100 rounded-4 text-white p-3 d-flex flex-column justify-content-around"
                  style={{ backgroundColor: "#2E2E2E" }}
                >
                  <div>
                    <img
                      src={stati}
                      style={{
                        fontSize: "16px",
                        lineHeight: "18px",
                        fontWeight: "400",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "22.5px",
                      lineHeight: "23px",
                      fontWeight: "400",
                    }}
                  >
                    Promoting Unity
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      lineHeight: "24px",
                      fontWeight: "400",
                    }}
                  >
                    We foster understanding and harmony between different faith
                    communities through shared experiences and meaningful
                    dialogue.
                  </div>

                  <div
                    className="btn text-white border border-2 rounded-pill btnHover"
                    style={{ width: "70%", backgroundColor: "#2E2E2E" }}
                    onClick={popupHandel}
                  >
                    Learn More <FaArrowRight className="mb-1 ms-2 iconMove" />
                  </div>
                  {/*Making Modal*/}
                  <div className="modalDiv" ref={modal} onClick={handeler}>
                    <div
                      className="childDiv ps-5 pt-2  d-flex flex-column justify-content-evenly"
                      ref={modal1}
                      //   onClick={childHandeler}
                    >
                      <div className="text-center">
                        <img src={stati} />
                      </div>
                      <h3 className="text-center mt-2 me-4">Promoting Unity</h3>
                      <div className="me-4">
                        <p className="me-2">
                          Be part of a movement that celebrates unity in
                          diversity:
                        </p>
                        <ul className=" px-4 " style={{ marginTop: "-15px" }}>
                          <li>Cross-cultural meditation sessions</li>
                          <li> Interfaith peace initiatives</li>
                          <li>Community outreach programs</li>
                          <li>Youth leadership development</li>
                          <li> Global spiritual networking</li>
                        </ul>
                      </div>
                      <p>
                        Together, we're creating a world where all faiths thrive
                        in harmony.
                      </p>
                      <div
                        className="mb-2 text-center text-black d-flex flex-column flex-wrap justify-content-end align-content-center"
                        style={{ height: "50px" }}
                      >
                        <button
                          onClick={divBtnHandeler}
                          className="btn bg-white rounded-pill w-25 btnHover"
                        >
                          Show Less <FaArrowLeft />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 mx-5" style={{ height: "600px" }}>
        <div
          className=" row  d-flex justify-content-between"
          style={{ height: "130px" }}
        >
          <div className="col-5 d-flex flex-column justify-content-around ms-3">
            <h1>Join the Conversation</h1>
            <div
              className="d-flex flex-wrap align-content-center fs-2"
              style={{ color: "#4B9FFF" }}
            >
              <div>✦ </div>
              <div className="fw-semibold"> Build Connections</div>
            </div>
          </div>
          <div className="col-5">
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "600",
                color: "#4B5563",
              }}
              className="mt-3"
            >
              Discover a vibrant community, share your thoughts, and connect
              with like-minded individuals. Together, we grow.
            </p>
            <div className="mb-2 ">
              <button className="btn border text-white div1Hover">
                Join Conversations <FaArrowRight className="iconMove" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
