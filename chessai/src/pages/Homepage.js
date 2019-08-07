import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Homebody from "../components/Homebody"

function Homepage() {
  return (
    <div>
      <Hero backgroundImage="https://png.pngtree.com/thumb_back/fh260/back_pic/03/88/78/7857d6c926b6dd6.jpg">
        <div className="container">
        <h1>Chess</h1>
        <h2>Challenge Someone or even yourself!</h2>
        </div>

      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
    <Homebody></Homebody>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
