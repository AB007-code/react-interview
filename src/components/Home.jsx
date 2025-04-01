import React, { useRef, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import smile from "../image/smile.png";
import person from "../image/person.png";
import people from "../image/peoples.png";
import image1 from "../image/image1.avif";
import image2 from "../image/image2.webp";
import image3 from "../image/image3.avif";
import punjabi from "../image/punjabi.avif";
import worldPeople from "../image/worldPeople.avif";
import girl from "../image/girl.avif";
import bulkImg0 from "../image/bulkImg0.avif";
import bulkImg from "../image/bulkImg.avif";
import bulkImg2 from "../image/bulkImg2.avif";
import bulkImg3 from "../image/bulkImg3.avif";
import bulkImg4 from "../image/bulkImg4.avif";
import bulkImg5 from "../image/bulkImg5.avif";
import moment1 from "../image/moment1.jpg";
import moment2 from "../image/moment2.avif";
import moment3 from "../image/moment3.avif";
import moment4 from "../image/moment4.avif";
import moment5 from "../image/moment5.avif";
import moment6 from "../image/moment6.avif";
import hand from "../image/hand.avif";
import contact1 from "../image/contact1.png";
import light from "../image/light.png";
import meeting from "../image/meeting.avif";
import global from "../image/global.png";
import cross from "../image/cross.png";
import person1 from "../image/person-1.avif";
import person2 from "../image/person-2.avif";
import person3 from "../image/person-3.avif";
import person4 from "../image/person-4.avif";
import person5 from "../image/person-5.avif";
import hindu from "../image/hindu.png";
import muslim from "../image/muslim.png";
import sardar from "../image/sardar.png";
import container1 from "../image/Container1.png";
import container2 from "../image/Container2.png";
import container3 from "../image/Container3.png";
import container4 from "../image/Container4.png";
import container5 from "../image/Container5.png";
import logo2 from "../image/Logocommunion2.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
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
  const parentDiv = useRef();
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
  let i = 0;
  const leftHandeler = () => {
    if (i == 0) {
      i = -60;
    } else {
      i = i + 20;
    }
    parentDiv.current.style.transform = `translate(${i}%,0px)`;
    parentDiv.current.style.transition = "all 0.1s linear 0s";
  };
  const rightHandeler = () => {
    if (i == "-60") {
      i = 0;
    } else {
      i = i - 20;
    }
    parentDiv.current.style.transform = `translate(${i}%,0px)`;
    parentDiv.current.style.transition = "all 0.1s linear 0s";
  };
  let arrowIcon = useRef();
  let rowWidth = useRef();
  let hideDiv = useRef();
  let mainDiv = useRef();
  let btn2 = useRef();
  const [text, setText] = useState("View All");

  const textChangeClick = () => {
    switch (text) {
      case "View All":
        setText("Show Less");
        rowWidth.current.style.height = "50%";
        hideDiv.current.style.display = "block";
        mainDiv.current.style.height = "1400px";
        arrowIcon.current.setAttribute("class", "arrowIcon");
        break;
      case "Show Less":
        setText("View All");
        rowWidth.current.style.height = "650px";
        rowWidth.current.style.marginTop = "-30px";
        mainDiv.current.style.height = "750px";
        hideDiv.current.style.display = "none";
        // arrowIcon.current.style.transform = "rotate(90deg)";
        arrowIcon.current.setAttribute("class", "iconmove1");
        break;
    }
  };

  //toggle Handeler
  const toggleHandeler = (e) => {
    let childDiv = e.target.closest(".child1Div");
    let doc = document.querySelectorAll(".child1Div");
    console.log(doc);
    doc.forEach((ele) => {
      if (ele != childDiv) {
        ele.closest(".toggleDiv").children[1].style.display = "none";
        ele.closest(".toggleDiv").style.height = "100px";
        ele.children[1].textContent = "+";
        ele.children[1].style.fontSize = "2em";
      }
    });
    let divNone = e.target.closest(".toggleDiv").children[1];
    let toggleDiv = e.target.closest(".toggleDiv");
    let plusDiv = toggleDiv.children[0].children[1];
    if (divNone.style.display == "none") {
      divNone.style.display = "block";
      toggleDiv.style.height = "110px";
      plusDiv.textContent = "-";
      plusDiv.style.fontSize = "3em";
    } else {
      divNone.style.display = "none";
      toggleDiv.style.height = "100px";
      plusDiv.textContent = "+";
      plusDiv.style.fontSize = "2em";
    }
  };

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

      <div className="mt-5 mx-5" style={{ height: "700px" }}>
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

        <div className=" mt-3">
          <div className="row gx-3 " style={{ height: "400px" }}>
            <div className="col-7 h-100">
              <div className="h-100">
                <img
                  src={punjabi}
                  className="object-fit-cover w-100  h-100 rounded-4"
                />
              </div>
            </div>
            <div className="col-5 h-100">
              <div className="h-100">
                <img
                  src={girl}
                  className="object-fit-cover w-100 h-100 rounded-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5" style={{ height: "100px" }}>
          <div className="row h-100">
            <div className="col-5 d-flex flex-column justify-content-center">
              <h2 className="fw-semibold mt-2">
                Where Connections Thrive and Ideas Flourish{" "}
                <span style={{ color: "#028CBB" }}>✦</span> 2x
              </h2>
            </div>
            <div
              className="col-7 h-100"
              style={{ color: "#4B5563", fontWeight: "500" }}
            >
              <div className="h-100 d-flex justify-content-end">
                <div
                  style={{ width: "28%", backgroundColor: "#F7F5F5" }}
                  className="border h-100  rounded-4 d-flex flex-wrap justify-content-center align-content-center div2Hover"
                >
                  <span className="d-flex flex-wrap align-content-center justify-content-end w-25">
                    <FaRegDotCircle />
                  </span>
                  <span className="w-75 p-3"> Happy Community</span>
                </div>
                <div
                  style={{ width: "28%", backgroundColor: "#F7F5F5" }}
                  className="border h-100  mx-4 rounded-4 d-flex flex-wrap justify-content-center align-content-center div2Hover"
                >
                  <span className="d-flex flex-wrap align-content-center justify-content-end  w-25">
                    <FaRegDotCircle />
                  </span>
                  <span className="w-75 p-3">210% Boost in Engagement</span>
                </div>
                <div
                  style={{ width: "28%", backgroundColor: "#F7F5F5" }}
                  className="border h-100 rounded-4 d-flex flex-wrap justify-content-center align-content-center div2Hover"
                >
                  <span className="d-flex flex-wrap align-content-center justify-content-end w-25">
                    <FaRegDotCircle />
                  </span>
                  <span className="w-75 p-3">172+ Ranked Communities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-5"
        style={{
          height: "1300px",
          background: "rgb(72,75,75)",
          background:
            "linear-gradient(180deg, rgba(72,75,75,1) 35%, rgba(232, 240, 239, 0.8) 100%)",
          fontFamily: "Arial",
        }}
      >
        <div className="container  border-primary h-100">
          <div
            className=" d-flex flex-column justify-content-end"
            style={{ height: "240px" }}
          >
            <h1
              style={{
                fontSize: "56px",
                color: "#FFFFFF",
                fontWeight: "600",
                lineHeight: "67px",
              }}
            >
              Uniting Communities Through
            </h1>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "600",
                lineHeight: "67px",
              }}
              className="gradientColor"
            >
              ✦ Inspiring Events
            </h1>
          </div>
          <div className="row mb-5" style={{ height: "220px" }}>
            <div className="col-7 text-white d-flex flex-column justify-content-center">
              <h5
                style={{
                  fontSize: "1.34em",
                  lineHeight: "33px",
                  fontWeight: "400",
                }}
              >
                At Communion, we're committed to organizing events that foster
                connections, inspire personal and professional growth, and bring
                people together to share meaningful experiences. From workshops
                to conferences, every event is designed to leave a lasting
                impact on our attendees.
              </h5>
            </div>
            <div className="col-5">
              <div className="h-75 d-flex justify-content-center text-white flex-wrap align-content-center">
                <div className="w-50 me-2  d-flex justify-content-end flex-wrap align-content-center">
                  <img src={worldPeople} className="w-75" />
                </div>
                <h4
                  className="d-flex  justify-content-end flex-wrap align-content-center"
                  style={{ width: "30%" }}
                >
                  Trusted by Over 15k+ Individuals Worldwide
                </h4>
              </div>
              <div className="w-75 fs-5 text-center ms-4 mb-4">
                <button className="px-4 py-2 rounded-3 ms-3">
                  Explore Events <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="row mainDivHover  mt-4" style={{ height: "530px" }}>
            <div className="col-3 h-100">
              <img
                src={bulkImg0}
                className="h-100 w-100 rounded-3 object-fit-cover"
              />
            </div>

            <div className="col-3 h-100 d-flex flex-column justify-content-between">
              <div style={{ height: "49%" }}>
                <img
                  src={bulkImg}
                  className="h-100 w-100 rounded-3 object-fit-cover"
                />
              </div>

              <div style={{ height: "49%" }}>
                <img
                  src={bulkImg2}
                  className="h-100 w-100 rounded-3 object-fit-cover"
                />
              </div>
            </div>

            <div className="col-3 h-100">
              <img
                src={bulkImg3}
                className="h-100 w-100 rounded-3 object-fit-cover"
              />
            </div>

            <div className="col-3 h-100 d-flex flex-column justify-content-between">
              <div style={{ height: "49%" }}>
                <img
                  src={bulkImg4}
                  className="h-100 w-100 rounded-3 object-fit-cover"
                />
              </div>

              <div style={{ height: "49%" }}>
                <img
                  src={bulkImg5}
                  className="h-100 w-100 rounded-3 object-fit-cover"
                />
              </div>
            </div>
          </div>

          <div
            className="row mt-4 justify-content-between"
            style={{ height: "230px" }}
          >
            <div className="col-4 h-100  d-flex flex-column justify-content-end">
              <h3
                style={{
                  color: "#1E293B",
                  fontSize: "32px",
                  fontWeight: "600",
                  lineHeight: "32px",
                }}
              >
                Helping You Connect, <div className=" text-center">Learn,</div>
              </h3>
              <div className=" mt-4 w-75 text-center">
                <h3
                  style={{
                    color: "#1E293B",
                    fontSize: "32px",
                    fontWeight: "600",
                    lineHeight: "32px",
                  }}
                >
                  and Thrive <span className="gradientText">✦ 2x</span>
                </h3>
                <h3
                  style={{
                    color: "#1E293B",
                    fontSize: "32px",
                    fontWeight: "600",
                    lineHeight: "32px",
                    textAlign: "center",
                  }}
                  className="gradientText"
                >
                  Impact
                </h3>
              </div>
            </div>
            <div className="col-7  h-100 d-flex justify-content-end">
              <div className="w-75  h-100 text-center d-flex flex-column flex-wrap justify-content-center align-content-end">
                <h2
                  style={{
                    fontSize: "55px",
                    lineHeight: "63px",
                    fontWeight: "600",
                  }}
                  className="w-50 mb-3"
                >
                  98%
                </h2>
                <p className="w-50" style={{ color: "#555555" }}>
                  Opportunities Expanded
                </p>
              </div>
              <div className="w-75  h-100 text-center d-flex flex-column flex-wrap justify-content-center align-content-end">
                <h2
                  style={{
                    fontSize: "55px",
                    lineHeight: "63px",
                    fontWeight: "600",
                  }}
                  className=" w-50 mb-3"
                >
                  89%
                </h2>
                <p className=" w-50" style={{ color: "#555555" }}>
                  Attendee Satisfaction
                </p>
              </div>
              <div className="w-75 me-3  h-100 text-center d-flex flex-column flex-wrap justify-content-center align-content-end">
                <h2
                  style={{
                    fontSize: "55px",
                    lineHeight: "63px",
                    fontWeight: "600",
                  }}
                  className="w-50 mb-3"
                >
                  15k+
                </h2>
                <p className="w-50" style={{ color: "#555555" }}>
                  Engaged Participants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5" style={{ height: "900px" }}>
        <div className="container">
          <div
            className="text-center mx-5 d-flex flex-column justify-content-end"
            style={{
              height: "150px",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                lineHeight: "48px",
                fontWeight: "600",
              }}
            >
              More Than <span style={{ color: "#0066FF" }}>10,000+ </span>
              Engagements daily
            </h2>
            <h2
              style={{
                fontSize: "40px",
                lineHeight: "48px",
                fontWeight: "600",
              }}
            >
              across the world
            </h2>
          </div>

          <div
            className="text-center d-flex flex-column justify-content-center"
            style={{
              height: "80px",
              fontSize: "18px",
              lineHeight: "29px",
              fontWeight: "400",
              margin: "0px 120px 0px 120px",
              color: "#6D6D6D",
            }}
          >
            Experience the power of connection with over 10,000 daily
            interactions worldwide, uniting diverse communities through
            innovation, collaboration, and shared spirituality.
          </div>
        </div>

        <div className="row mt-5 mx-5" style={{ height: "650px" }}>
          <div className="col-6 d-flex mb-3 justify-content-between">
            <div
              className="h-100 d-flex  flex-column justify-content-end"
              style={{ width: "48%" }}
            >
              <img
                src={hand}
                className="w-100 object-fit-cover  rounded-pill img"
                style={{ height: "85%" }}
              />
            </div>
            <div
              className="h-100 d-flex flex-column justify-content-start"
              style={{ width: "48%" }}
            >
              <img
                src={meeting}
                className="w-100 object-fit-cover  rounded-pill img"
                style={{ height: "85%" }}
              />
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="h-50 d-flex">
              <div className="h-75 w-50 px-3 d-flex flex-column justify-content-between">
                <div>
                  <img src={global} />
                </div>
                <h5 className="h5Style">Global Connectivity</h5>
                <p className="pStyle">
                  Connecting people from diverse religious communities
                  worldwide, fostering meaningful engagement.
                </p>
              </div>
              <div
                className="w-50 px-3 d-flex flex-column justify-content-between"
                style={{ height: "95%" }}
              >
                <div>
                  <img src={contact1} />
                </div>
                <h5 className="h5Style">
                  Foster Inclusive Collaboration and Connect with People Around
                  You
                </h5>
                <p className="pStyle" style={{ width: "90%" }}>
                  Engage, collaborate, and connect with diverse people to build
                  inclusive and meaningful relationships.
                </p>
              </div>
            </div>
            <div className="h-50 d-flex">
              <div className="h-75 w-50 px-3 d-flex flex-column justify-content-between">
                <div>
                  <img src={cross} />
                </div>
                <h5 className="h5Style">Innovative Technology</h5>
                <p className="pStyle mb-4" style={{ width: "90%" }}>
                  Utilizing cutting-edge tools to enhance user experience and
                  encourage active participation.
                </p>
              </div>
              <div
                className="w-50 px-3 d-flex flex-column justify-content-between"
                style={{ height: "80%" }}
              >
                <div>
                  <img src={light} />
                </div>
                <h5 className="h5Style">Daily Growth</h5>
                <p className="pStyle mb-4" style={{ width: "90%" }}>
                  Over 10,000+ daily engagements, creating a thriving community
                  where spirituality and innovation meet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-5"
        style={{ height: "1500px", backgroundColor: "#1E1E1E" }}
      >
        <div
          className="text-center text-white mx-4 d-flex flex-wrap justify-content-center align-content-end"
          style={{ height: "220px" }}
        >
          <h1 className="w-50 fw-bold">
            Moments of Connection We've Made So Far...
          </h1>
        </div>
        <div
          className="text-center text-white mx-4 d-flex flex-wrap justify-content-center align-content-center"
          style={{ height: "100px" }}
        >
          <h5
            className="w-50"
            style={{
              fontSize: "18px",
              lineHeight: "29px",
              fontWeight: "400",
            }}
          >
            Explore the impactful connections we've fostered so far, bringing
            together diverse communities through shared experiences,
            collaboration, and innovation.
          </h5>
        </div>
        <div className="text-center" style={{ height: "45px" }}>
          <button className="px-4 h-100 rounded-pill border border-white text-white buttonHover">
            View All Moments <FaArrowRight className="ms-2 iconmove" />
          </button>
        </div>

        <div className="m-5 row" style={{ height: "1000px" }}>
          <div className="col-4">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div
                className="d-flex flex-column justify-content-between momentDivHover"
                style={{ height: "48%" }}
              >
                <div style={{ height: "62%" }}>
                  <img
                    src={moment1}
                    className="w-100 h-100 object-fit-cover rounded-4 momentHover"
                  />
                </div>
                <h4 className="titleStyle ">Shared Service Projects</h4>
                <p className="p1Style me-4 ">
                  Make a difference by joining hands to support impactful
                  projects that uplift communities and bring positive change.
                </p>
                <div className="div3Hover">View Cast Study {">"}</div>
              </div>
              <div
                className="d-flex flex-column justify-content-between momentDivHover"
                style={{ height: "48%" }}
              >
                <div style={{ height: "62%" }}>
                  <img
                    src={moment2}
                    className="w-100 h-100 object-fit-cover rounded-4 momentHover"
                  />
                </div>
                <h4 className="titleStyle ">Cultural Exchanges</h4>
                <p className="p1Style me-4 ">
                  Explore unique traditions, cuisines, and stories, building
                  bridges across diverse cultures and backgrounds.
                </p>
                <div className="div3Hover">View Cast Study {">"}</div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div
                className="d-flex flex-column justify-content-between momentDivHover"
                style={{ height: "58%" }}
              >
                <div style={{ height: "70%" }}>
                  <img
                    src={moment3}
                    className="w-100 h-100 object-fit-cover rounded-4 momentHover"
                  />
                </div>
                <h4 className="titleStyle ">Community Celebrations</h4>
                <p className="p1Style me-4 ">
                  Experience the joy of shared festivities as we honor
                  traditions, embrace diversity, and strengthen communal bonds.
                </p>
                <div className="div3Hover">View Cast Study {">"}</div>
              </div>
              <div
                className="d-flex flex-column justify-content-between momentDivHover"
                style={{ height: "40%" }}
              >
                <div style={{ height: "55%" }}>
                  <img
                    src={moment4}
                    className="w-100 h-100 object-fit-cover rounded-4 momentHover"
                  />
                </div>
                <h4 className="titleStyle ">Volunteer Gatherings</h4>
                <p className="p1Style me-4 ">
                  Join like-minded individuals in meaningful initiatives, giving
                  back to communities and building lasting connections.
                </p>
                <div className="div3Hover">View Cast Study {">"}</div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div
                className="d-flex flex-column justify-content-between momentDivHover"
                style={{ height: "48%" }}
              >
                <div style={{ height: "62%" }}>
                  <img
                    src={moment5}
                    className="w-100 h-100 object-fit-cover rounded-4 momentHover"
                  />
                </div>
                <h4 className="titleStyle ">Volunteer Gatherings</h4>
                <p className="p1Style me-4 ">
                  Join like-minded individuals in meaningful initiatives, giving
                  back to communities and building lasting connections.
                </p>
                <div className="div3Hover">View Cast Study {">"}</div>
              </div>
              <div
                className="d-flex flex-column justify-content-between momentDivHover"
                style={{ height: "48%" }}
              >
                <div style={{ height: "62%" }}>
                  <img
                    src={moment6}
                    className="w-100 h-100 object-fit-cover rounded-4 momentHover"
                  />
                </div>
                <h4 className="titleStyle ">Analytics and Reporting</h4>
                <p className="p1Style me-4 ">
                  Our cutting-edge social media marketing tactics will help you
                  maximize your brand's online visibility and expand your
                  business exponentially.
                </p>
                <div className="div3Hover">View Cast Study {">"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border" style={{ height: "870px" }}>
        <div
          className="d-flex flex-wrap justify-content-center align-content-end"
          style={{ height: "250px" }}
        >
          <h1
            style={{
              fontSize: "40px",
              lineHeight: "46px",
              fontWeight: "600",
              width: "50%",
              textAlign: "center",
              wordSpacing: "5px",
            }}
          >
            Trusted by Over 1500+ Active Global Users
          </h1>
        </div>
        <div
          className="d-flex justify-content-center flex-wrap align-content-end mb-5"
          style={{
            height: "80px",
            fontSize: "19px",
            lineHeight: "29px",
            fontWeight: "400",
            textAlign: "center",
            opacity: "0.8",
          }}
        >
          <p style={{ width: "48%" }}>
            Join a growing community of over 1500 users worldwide who trust us
            to connect, engage, and thrive together.
          </p>
        </div>

        <div
          className="container"
          style={{ height: "330px", overflow: "hidden" }}
        >
          <div
            style={{ width: "168%" }}
            className="d-flex h-100"
            ref={parentDiv}
          >
            <div style={{ width: "33%" }}>
              <div
                className="h-100 border rounded-4  p-5 blockHover"
                style={{ backgroundColor: "rgb(222, 226, 255)" }}
              >
                <div className="h-75">
                  <h5>
                    Communion has transformed how I connect with my community,
                    fostering unity and understanding among diverse faiths. The
                  </h5>
                </div>

                <div
                  style={{ height: "70px" }}
                  className="d-flex flex-wrap align-content-center"
                >
                  <div className="d-flex flex-wrap align-content-center">
                    <div
                      style={{ height: "60px", width: "60px" }}
                      className="me-4"
                    >
                      <img
                        src={person1}
                        className="h-100 w-100 object-fit-cover rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex h-100 flex-column justify-content-around">
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "18px",
                      }}
                    >
                      John M.,
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "16px",
                        color: "rgb(102, 102, 102)",

                        margin: "0px",
                      }}
                    >
                      USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: "33%" }} className="mx-2">
              <div
                className="h-100 border rounded-4 p-5 text-white blockHover"
                style={{ backgroundColor: "#111928" }}
              >
                <div className="h-75">
                  <h5>
                    Being part of Communion is life-changing, blending
                    innovation with spirituality to create a truly inclusive
                    space. The events and...
                  </h5>
                </div>

                <div
                  style={{ height: "70px" }}
                  className="d-flex flex-wrap align-content-center"
                >
                  <div className="d-flex flex-wrap align-content-center">
                    <div
                      style={{ height: "60px", width: "60px" }}
                      className="me-4"
                    >
                      <img
                        src={person2}
                        className="h-100 w-100 object-fit-cover rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex h-100 flex-column justify-content-around">
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "18px",
                      }}
                    >
                      Rohan K.,
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "16px",
                        color: "rgb(102, 102, 102)",
                        margin: "0px",
                      }}
                    >
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: "33%" }}>
              <div
                className="h-100 border rounded-4  p-5 blockHover"
                style={{ backgroundColor: "rgb(222, 226, 255)" }}
              >
                <div className="h-75">
                  <h5>
                    Through Communion, I've joined events and discussions that
                    broadened my perspective and connected me globally. The...
                  </h5>
                </div>

                <div
                  style={{ height: "70px" }}
                  className="d-flex flex-wrap align-content-center"
                >
                  <div className="d-flex flex-wrap align-content-center">
                    <div
                      style={{ height: "60px", width: "60px" }}
                      className="me-4"
                    >
                      <img
                        src={person3}
                        className="h-100 w-100 object-fit-cover rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex h-100 flex-column justify-content-around">
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "18px",
                      }}
                    >
                      Amira L.,
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "16px",
                        color: "rgb(102, 102, 102)",

                        margin: "0px",
                      }}
                    >
                      UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: "33%" }} className="mx-2">
              <div
                className="h-100 border rounded-4 p-5 text-white blockHover"
                style={{ backgroundColor: "#111928" }}
              >
                <div className="h-75">
                  <h5>
                    The platform's interfaith dialogue features have helped me
                    understand different perspectives and grow spiritually.
                    Communion...
                  </h5>
                </div>

                <div
                  style={{ height: "70px" }}
                  className="d-flex flex-wrap align-content-center"
                >
                  <div className="d-flex flex-wrap align-content-center">
                    <div
                      style={{ height: "60px", width: "60px" }}
                      className="me-4"
                    >
                      <img
                        src={person4}
                        className="h-100 w-100 object-fit-cover rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex h-100 flex-column justify-content-around">
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "18px",
                      }}
                    >
                      Sarah P.,
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "16px",
                        color: "rgb(102, 102, 102)",
                        margin: "0px",
                      }}
                    >
                      UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: "33%" }}>
              <div
                className="h-100 border rounded-4 p-5 blockHover"
                style={{ backgroundColor: "rgb(222, 226, 255)" }}
              >
                <div className="h-75">
                  <h5>
                    Communion's events feature has made it easy to organize and
                    participate in meaningful spiritual gatherings. The
                    community's...
                  </h5>
                </div>

                <div
                  style={{ height: "70px" }}
                  className="d-flex flex-wrap align-content-center"
                >
                  <div className="d-flex flex-wrap align-content-center">
                    <div
                      style={{ height: "60px", width: "60px" }}
                      className="me-4"
                    >
                      <img
                        src={person5}
                        className="h-100 w-100 object-fit-cover rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex h-100 flex-column justify-content-around">
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "18px",
                      }}
                    >
                      David C.,
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "16px",
                        color: "rgb(102, 102, 102)",

                        margin: "0px",
                      }}
                    >
                      Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-center mt-4"
          style={{ height: "60px" }}
        >
          <div
            style={{ width: "15%" }}
            className="h-100 d-flex justify-content-center"
          >
            <div className="icon2 rounded-circle me-2">
              <IoIosArrowDropleftCircle
                className="h-100 w-100 rounded-circle"
                onClick={leftHandeler}
              />
            </div>
            <div className="icon2 rounded-circle">
              <IoIosArrowDroprightCircle
                className="h-100 w-100 rounded-circle"
                onClick={rightHandeler}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "1120px", backgroundColor: "#14161F" }}>
        <div className="d-flex mx-5" style={{ height: "550px" }}>
          <div
            className=" d-flex flex-wrap align-content-center"
            style={{ height: "90%", width: "70%" }}
          >
            <div className="d-flex justify-content-around text-white">
              <div
                style={{ width: "50%" }}
                className=" mt-5 d-flex flex-column justify-content-between"
              >
                <h1
                  style={{
                    fontSize: "45px",
                    fontWeight: "600",
                    lineHeight: "54px",
                  }}
                >
                  Meet Our Social Expert Team
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: "400",
                    opacity: "0.9",
                  }}
                >
                  Our expert team blends technology, spirituality, and community
                  engagement to create an inclusive platform where everyone can
                  connect, share, and grow. Meet the passionate people behind
                  Communion's vision!
                </p>
                <div
                  style={{
                    width: "60%",
                    height: "50px",
                  }}
                >
                  <button
                    type="button"
                    className="h-100 w-100 border-white border text-white rounded-5 d-flex flex-wrap align-content-center justify-content-center"
                    style={{ backgroundColor: "#14161F" }}
                  >
                    Connect With Us
                    <span>
                      <FaArrowRight className="ms-3 mb-1" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="h-100" style={{ width: "230px" }}>
                <img
                  src={hindu}
                  className="w-100 rounded-pill object-fit-cover contanerImg"
                  style={{ height: "400px" }}
                />
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-around mt-3"
            style={{ width: "50%", marginTop: "4%" }}
          >
            <div className="h-100 d-flex flex-column justify-content-center">
              <div style={{ width: "230px", height: "75%" }}>
                <img
                  src={sardar}
                  className="w-100 object-fit-cover rounded-pill contanerImg"
                  style={{ height: "400px" }}
                />
              </div>
            </div>
            <div className="h-100 d-flex flex-column justify-content-end ms-4">
              <div style={{ width: "230px", height: "75%" }}>
                <img
                  src={muslim}
                  className=" w-100 object-fit-cover rounded-pill contanerImg"
                  style={{ height: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex  justify-content-between mx-5"
          style={{ height: "520px" }}
        >
          <div className="h-75" style={{ width: "220px" }}>
            <img
              src={container1}
              className="w-100 object-fit-cover rounded-pill contanerImg"
              style={{
                height: "400px",
                marginBottom: "100px",
                position: "relative",
                top: "-70px",
              }}
            />
          </div>

          <div className=" h-75" style={{ width: "220px" }}>
            <img
              src={container2}
              className="w-100 object-fit-cover rounded-pill contanerImg"
              style={{
                height: "400px",
                marginBottom: "100px",
                position: "relative",
                top: "-10px",
              }}
            />
          </div>

          <div className="h-75" style={{ width: "220px" }}>
            <img
              src={container3}
              className="w-100 object-fit-cover rounded-pill contanerImg"
              style={{
                height: "400px",
                marginBottom: "100px",
                position: "relative",
                top: "20px",
              }}
            />
          </div>

          <div className="h-75" style={{ width: "220px" }}>
            <img
              src={container4}
              className="w-100 object-fit-cover rounded-pill contanerImg"
              style={{
                height: "400px",
                marginBottom: "100px",
                position: "relative",
                top: "50px",
              }}
            />
          </div>

          <div className="h-75" style={{ width: "220px" }}>
            <img
              src={container5}
              className="w-100 object-fit-cover rounded-pill contanerImg"
              style={{
                height: "400px",
                marginBottom: "100px",
                position: "relative",
                top: "90px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="mx-5 d-flex mainDiv2" ref={mainDiv}>
        <div
          className="d-flex flex-column justify-content-around px-5"
          style={{ height: "300px", width: "40%", marginTop: "100px" }}
        >
          <h1
            style={{ fontSize: "56px", fontWeight: "600", lineHeight: "67px" }}
          >
            Frequently Asked Questions
          </h1>
          <button
            type="button"
            className="button2Hover"
            onClick={textChangeClick}
            ref={btn2}
          >
            <span>{text}</span>{" "}
            <span className="d-flex flex-column justify-content-center">
              <FaArrowRight className="iconmove1" ref={arrowIcon} />
            </span>
          </button>
        </div>

        <div className="container h-100" style={{ width: "60%" }}>
          <div style={{ height: "94%" }}>
            <div
              className="row row-cols-1 mt-5 gy-1 d-flex flex-column justify-content-around rowHeight"
              ref={rowWidth}
            >
              <div className="col">
                <div className="toggleDiv">
                  <div className="child1Div px-3" onClick={toggleHandeler}>
                    <div className="queDiv  d-flex flex-column justify-content-center">
                      What is the Communion App?
                    </div>
                    <div className="plusDiv d-flex flex-column justify-content-center">
                      +
                    </div>
                  </div>
                  <div className="divNone">
                    <div className="border border-black w-100"></div>
                    <p className="ptagDiv px-3">
                      A vibrant platform for connecting diverse faiths and
                      communities!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="toggleDiv">
                  <div
                    className=" child1Div px-3 "
                    onClick={toggleHandeler}
                    key={2}
                  >
                    <div className="queDiv  d-flex flex-column justify-content-center">
                      How does it promote social cohesion
                    </div>
                    <div className="plusDiv d-flex flex-column justify-content-center">
                      +
                    </div>
                  </div>
                  <div className="divNone">
                    <div className="border border-black w-100"></div>
                    <p className="ptagDiv px-3">
                      By fostering collaboration and understanding through
                      engaging activities!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="toggleDiv">
                  <div
                    className="child1Div px-3 "
                    onClick={toggleHandeler}
                    key={3}
                  >
                    <div className="queDiv  d-flex flex-column justify-content-center">
                      Is it free to use?
                    </div>
                    <div className="plusDiv d-flex flex-column justify-content-center">
                      +
                    </div>
                  </div>
                  <div className="divNone">
                    <div className="border border-black w-100"></div>
                    <p className="ptagDiv px-3">
                      Absolutely! Join the fun without spending a dime!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="toggleDiv">
                  <div
                    className="child1Div px-3 "
                    onClick={toggleHandeler}
                    key={4}
                  >
                    <div className="queDiv  d-flex flex-column justify-content-center">
                      Can I meet new People
                    </div>
                    <div className="plusDiv  d-flex flex-column justify-content-center">
                      +
                    </div>
                  </div>
                  <div className="divNone">
                    <div className="border border-black w-100"></div>
                    <p className="ptagDiv px-3">
                      Yes! Connect with like-minded individuals and expand your
                      circle!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="toggleDiv">
                  <div
                    className="child1Div px-3 "
                    onClick={toggleHandeler}
                    key={5}
                  >
                    <div className="queDiv  d-flex flex-column justify-content-center">
                      What if I have more questions?
                    </div>
                    <div className="plusDiv  d-flex flex-column justify-content-center">
                      +
                    </div>
                  </div>
                  <div className="divNone">
                    <div className="border border-black w-100"></div>
                    <p className="ptagDiv px-3">
                      Reach out to our support team anytime!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hiddenDiv"
              ref={hideDiv}
              style={{ marginTop: "1px" }}
            >
              <div
                className="row row-cols-1 mb-5 gy-1 d-flex flex-column justify-content-around rowHeight"
                style={{ marginTop: "1px" }}
              >
                <div className="col">
                  <div className="toggleDiv">
                    <div
                      className="child1Div px-3 "
                      onClick={toggleHandeler}
                      key={6}
                    >
                      <div className="queDiv  d-flex flex-column justify-content-center">
                        How secure is my data?
                      </div>
                      <div className="plusDiv  d-flex flex-column justify-content-center">
                        +
                      </div>
                    </div>
                    <div className="divNone">
                      <div className="border border-black w-100"></div>
                      <p className="ptagDiv px-3">
                        We use state-of-the-art encryption to protect your
                        personal information!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="toggleDiv my-1">
                    <div
                      className="child1Div px-3 "
                      onClick={toggleHandeler}
                      key={7}
                    >
                      <div className="queDiv  d-flex flex-column justify-content-center">
                        Can I create my own community?
                      </div>
                      <div className="plusDiv  d-flex flex-column justify-content-center">
                        +
                      </div>
                    </div>
                    <div className="divNone">
                      <div className="border border-black w-100"></div>
                      <p className="ptagDiv px-3">
                        Yes! Start your own community and invite others to join!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="toggleDiv">
                    <div
                      className="child1Div px-3 "
                      onClick={toggleHandeler}
                      key={8}
                    >
                      <div className="queDiv  d-flex flex-column justify-content-center">
                        Are there mobile apps available?
                      </div>
                      <div className="plusDiv  d-flex flex-column justify-content-center">
                        +
                      </div>
                    </div>
                    <div className="divNone">
                      <div className="border border-black w-100"></div>
                      <p className="ptagDiv px-3">
                        We have apps for both iOS and Android platforms!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="toggleDiv my-1">
                    <div className="child1Div px-3" onClick={toggleHandeler}>
                      <div className="queDiv  d-flex flex-column justify-content-center">
                        How can I report inappropriate content?
                      </div>
                      <div className="plusDiv  d-flex flex-column justify-content-center">
                        +
                      </div>
                    </div>
                    <div className="divNone">
                      <div className="border border-black w-100"></div>
                      <p className="ptagDiv px-3">
                        Use the report button or contact our moderation team
                        directly!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="toggleDiv">
                    <div className="child1Div px-3 " onClick={toggleHandeler}>
                      <div className="queDiv d-flex flex-column justify-content-center">
                        Can i delete my account?
                      </div>
                      <div className="plusDiv  d-flex flex-column justify-content-center">
                        +
                      </div>
                    </div>
                    <div className="divNone">
                      <div className="border border-black w-100"></div>
                      <p className="ptagDiv px-3">
                        Yes, you can delete your account and all associated data
                        at any time!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*footer section*/}
      <div style={{ height: "620px", backgroundColor: "#14161F" }}>
        <div className="container h-100">
          <div className="row h-75">
            <div className="col-4 p-2 d-flex flex-column justify-content-center">
              <div className="h-75 d-flex flex-column justify-content-around">
                <div style={{ height: "70px", width: "100%" }}>
                  <img
                    src={logo2}
                    className="h-100 object-fit-contain"
                    width="70%"
                  />
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    lineHeight: "26px",
                    color: "#FEFEFE",
                  }}
                >
                  Discover the power of connection with Communion. Uniting
                  diverse communities through spirituality and innovation, we
                  foster inclusivity, collaboration, and social cohesion for a
                  better world.
                </div>
                <div
                  className="d-flex justify-content-around flex-wrap align-content-center"
                  style={{ height: "80px", width: "60%" }}
                >
                  <div className="brandIconDiv fbIconHover text-white fs-5 rounded-circle d-flex flex-wrap justify-content-center align-content-center">
                    <FaFacebookF />
                  </div>
                  <div className="brandIconDiv twtIconHover text-white fs-5 rounded-circle d-flex flex-wrap justify-content-center align-content-center">
                    <FaTwitter />
                  </div>
                  <div className="brandIconDiv instaIconHover text-white fs-5 rounded-circle d-flex flex-wrap justify-content-center align-content-center">
                    <FaInstagram />
                  </div>
                  <div className="brandIconDiv youtubeIconHover text-white fs-5 rounded-circle d-flex flex-wrap justify-content-center align-content-center">
                    <FaYoutube />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 p-2 d-flex flex-column justify-content-center my-1 flex-wrap align-content-end">
              <div
                className="d-flex flex-column justify-content-center w-50"
                style={{ height: "65%" }}
              >
                <h5 className="text-white mt-4" style={{ fontWeight: "700" }}>
                  Company
                </h5>
                <div style={{ height: "80%" }} className="mt-3">
                  <ul className="ulDiv">
                    <li>
                      <span className="liHover">Home</span>
                    </li>
                    <li>
                      <span className="liHover">Communities</span>
                    </li>
                    <li>
                      <span className="liHover">Events</span>
                    </li>
                    <li>
                      <span className="liHover">Leaders</span>
                    </li>
                    <li>
                      <span className="liHover">Support</span>
                    </li>
                    <li>
                      <span className="liHover">Profile</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-4 p-2 d-flex flex-column justify-content-center my-1 flex-wrap align-content-center">
              <div
                className="d-flex flex-column justify-content-center w-50"
                style={{ height: "65%" }}
              >
                <h5 className="text-white mt-4" style={{ fontWeight: "700" }}>
                  Company
                </h5>
                <div style={{ height: "80%" }} className="mt-3 spanDiv1">
                  <span className="liHover">contact@communionhub.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-25 d-flex pt-5 justify-content-between copyRightMainDiv">
            <div
              className="w-50"
              //   style={{ color: "#A0A1A5", fontSize: "1.15em" }}
            >
              Copyright © 2025. All right reserved to Communion
            </div>
            <div className="w-50 d-flex justify-content-end">
              <div>
                <span className="me-3 spanDiv3">Privacy Policy</span>
              </div>
              <div>
                <span className="spanDiv3">Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
