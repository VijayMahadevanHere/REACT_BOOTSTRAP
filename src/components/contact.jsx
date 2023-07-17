import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function contact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="block contact-block" id="contact">
          <div className="title-holder">
            <h2>CONTACT INFO</h2>
            <div className="subtitle">get connected with us</div>
          </div>
          <Form>
            <Row>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="email"
                  placeholder="Enter your eamil address"
                  required
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="tel"
                  placeholder="Enter your contact number"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Control as="textarea" placeholder="Enter your message" />
              </Col>
            </Row>

            <div className="btn-holder">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>
      </Container>
      <div className="google-map">
        <iframe title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324288.0342739379!2d174.40167675117644!3d-36.866172920712245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1689566014943!5m2!1sen!2sin"
          
        
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
            <ul>
                <li>
                    <i className="fas fa-envelope"></i>
                    xyz@gmail.com
                </li>
                <li>
                    <i className="fas fa-phone"></i>
                    000-000-000
                </li>
                <li>
                    <i className="fas fa-map-marker-alt"></i>
                    AuckLand,New Zealand
                </li> 
            </ul>

        </div>

      </Container>
    </section>
  );
}

export default contact;
