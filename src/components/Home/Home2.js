import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vc2.jpg";
import Tilt from "react-parallax-tilt";
import {
  // AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in
              <b className="purple"> love with programming </b>
              and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am good in
              <i>
                <b className="purple"> Front-end Developer </b>
                  (HTML, CSS, Javascript, React JS, Ant Design,MUI). 
                <b className="purple"> , Video editing, Cartoon images, Youtube Vlogger. </b>
              </i>
              <br />
              <br />
              I finished my graduation in  &nbsp;
              <i>
                <b className="purple">BCA </b>
                ({" "}
                <b className="purple">
                  Bachelor of Computer Application
                </b>
                ) from Gandhinagar with 8.18.
              </i>
              <br />
              <br />
              I completed a three-month internship at
              <b className="purple"> Bitbeast Company </b>
              and have one year of professional work experience.
              {/* <b className="purple">Frontend Developer</b> and
              <i>
                <i>
                  {" "}
                  Which name is 
                </i>
              </i> */}
              &nbsp;
              {/* <i>
                <b className="purple"> Bitbeast private limited company.</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@theVivekChauhan/videos"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/the_vivekchauhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/vivekchauhan005"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vivekchauhan005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
