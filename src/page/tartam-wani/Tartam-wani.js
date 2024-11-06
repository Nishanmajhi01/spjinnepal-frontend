import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import data from "../../assets/data/tartam-wani.json";

export const Tartam = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <PageBreadcrumb page="श्री तारतम वाणी" />
        </Col>
      </Row>
      <Row className="g-4 p-5">
        {data.map((item) => (
          <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card className="shadow-lg" style={{ height: "22rem" }}>
              <Card.Img
                style={{ height: "15rem" }}
                variant="secondary"
                src={process.env.PUBLIC_URL + item.imageUrl}
              />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Card.Title>{item.title}</Card.Title>
                <div className="d-flex justify-content-between w-50">
                  <Card.Link href="#">टिका</Card.Link>
                  <Card.Link href="#">मुलवाणी</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
