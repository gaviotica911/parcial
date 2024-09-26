import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [carrera, setCarrera] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/times.json?key=5c07ee00"
      );
      const data = await response.json();
      setCarrera(data);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const cycling = carrera.filter((item) => item.type === 0);
  const running = carrera.filter((item) => item.type === 1);
  const swimming = carrera.filter((item) => item.type === 2);
  const handleImageClick = (i) => {
    setSelectedImage(i);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Cycling</h1>
            <ul>
              {cycling.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <h1>Running</h1>
            <ul>
              {running.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <h1>Swimming</h1>
            <ul>
              {swimming.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {cycling.map((i, index) => (
            <Col key={index} xs={6} md={4} className="mb-4">
              <Card style={{ width: "18rem" }} id="cycling">
                <Card.Body>
                  <Card.Title>Cycling session</Card.Title>
                  <Card.Text>Recorrido al rededor de {i.city}</Card.Text>
                  <Card.Text>
                    {i.distance} km - {i.time} mins
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          {running.map((i, index) => (
            <Col key={index} xs={6} md={4} className="mb-4">
              <Card
                style={{ width: "18rem" }}
                id="running"
                onClick={() => handleImageClick(i)}
              >
                <Card.Body>
                  <Card.Title>Running session</Card.Title>
                  <Card.Text>Recorrido al rededor de {i.city}</Card.Text>
                  <Card.Text>
                    {i.distance} km - {i.time} mins
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          {swimming.map((i, index) => (
            <Col key={index} xs={6} md={4} className="mb-4">
              <Card style={{ width: "18rem" }} id="swimming">
                <Card.Body>
                  <Card.Title>Swimming session</Card.Title>
                  <Card.Text>Recorrido al rededor de {i.city}</Card.Text>
                  <Card.Text>
                    {i.distance} km - {i.time} mins
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Body className="d-flex justify-content-center align-items-center p-0">
            <Card style={{ width: "18rem" }} id={selectedImage.type}>
              <Card.Body>
                <Card.Title>Swimming session</Card.Title>
                <Card.Text>
                  Recorrido al rededor de {selectedImage.city}
                </Card.Text>
                <Card.Text>
                  {selectedImage.distance} km - {selectedImage.time} mins
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Home;
