import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./Home.css";
import Header from "./Header";
import { FormattedMessage } from "react-intl";

function Home({ isAuthenticated, fetchApi1, fetchApi2 }) {
  const [showModal, setShowModal] = useState(false);
  const [carrera, setCarrera] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      fetchApi1().then((data1) => setCarrera(data1));
      fetchApi2().then((data2) => setSelectedProfile(data2));
    }
  }, [isAuthenticated, fetchApi1, fetchApi2]);

  console.log(selectedProfile);

  const cycling = carrera.filter((item) => item.type === 0).slice(0, 10);
  const running = carrera.filter((item) => item.type === 1).slice(0, 10);
  const swimming = carrera.filter((item) => item.type === 2).slice(0, 10);

  const handleImageClick = (i, img) => {
    setSelectedImage(i);
    setShowModal(true);
    setImg(img);
  };

  const handleCloseModal = () => setShowModal(false);

  const renderCards = (items, title, img) => (
    <Col className="p-3">
      <h1 style={{ alignItems: "center" }}>
        <FormattedMessage id={title} />
      </h1>
      <Row className="flex-wrap">
        {items.map((i, index) => (
          <Col key={index} xs={12} md={6} className="mb-4 d-flex">
            <Card
              style={{
                width: "100%",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
              }}
              onClick={() => handleImageClick(i, img)}
            >
              <Card.Body>
                <Card.Title>
                  <FormattedMessage id={`${title} session`} />
                </Card.Title>

                <Card.Text>
                  <FormattedMessage id="Tour around " /> {i.city}
                </Card.Text>
                <Card.Text>
                  {i.distance} km - {i.time} mins
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );

  return (
    <body>
      <div className="home-container">
        <Container fluid className="main-container">
          <Row className="justify-content-around">
            {renderCards(
              cycling,
              "Cycling",
              "https://i.ytimg.com/vi/2JwjHAaf4RE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCA0fiSkahAGQbJ5Uy1KBoKfWPZwQ"
            )}
            {renderCards(
              running,
              "Running",
              "https://images.unsplash.com/photo-1486218119243-13883505764c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D"
            )}
            {renderCards(
              swimming,
              "Swimming",
              "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            )}
          </Row>
        </Container>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Body
            className="d-flex justify-content-center align-items-center p-0"
            style={{
              color: "white",
            }}
          >
            <Card
              style={{
                width: "100%",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <FormattedMessage id="Session Detail" />
                </Card.Title>
                <Card.Text>
                  <FormattedMessage id="Tour around " /> {selectedImage.city}
                </Card.Text>
                <Card.Text>
                  {selectedImage.distance} km - {selectedImage.time} mins
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
        <Header prop={selectedProfile[0]} />
      </div>
    </body>
  );
}

export default Home;
