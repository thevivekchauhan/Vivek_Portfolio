import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vivek Chauhan </span>
            from  Ahmedabad, Gujarat,<span className="purple"> India.</span><br></br>
            <br />
            I was finished   3-month internship at Bitbeast Company. Additionally, I have 1 year of professional working experience.
            A part from my technical expertise, I also run live website which is did myself. I am eager to contribute to team and help achieve my goals with clear vision.<br></br>
            <br />
            I have completed my Bachelor of Computer Applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {/* <li className="about-activity">
              <ImPointRight /> Playing Games Like GTA 5
            </li>
            <li className="about-activity">
              <ImPointRight /> Vlogging
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling <br></br>
              <ImPointRight /> Vlogging <br></br>
              <ImPointRight /> Chess
            </li>
          </ul>
            <br></br>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Every family has a person who break the Chain of poverty maybe you are the person believe in yourself ."{" "}
          </p><br></br>
          <footer className="blockquote-footer">Vivek Chauhan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
