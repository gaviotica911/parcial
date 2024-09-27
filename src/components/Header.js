import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

function Header({ prop }) {
  if (!prop) {
    return <p>Loading...</p>;
  }
  return (
    <div className="header-container">
      <Container>
        <Row>
          <Col>
            <img src={prop.pppic} alt="profile" className="profile-pic" />
          </Col>
          <Col>
            <h1>{prop.fullname}</h1>
          </Col>
          <Col>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Running_icon_-_Noun_Project_17825.svg/1024px-Running_icon_-_Noun_Project_17825.svg.png"
              alt="run"
              className="icon"
            />
          </Col>
          <Col>
            <h2>{prop.bestTimeR} mins</h2>
          </Col>
          <Col>
            {" "}
            <img
              src="https://www.svgrepo.com/show/103297/swimming.svg"
              alt="swim"
              className="icon"
            />
          </Col>
          <Col>
            <h2>{prop.bestTimeS} mins</h2>
          </Col>
          <Col>
            <img
              src="https://cdn-icons-png.flaticon.com/512/923/923743.png"
              alt="bike"
              className="icon"
            />
          </Col>
          <Col>
            <h2>{prop.bestTimeC} mins</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
