import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import data from "../../assets/data/books-name.json";

export const Books = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <PageBreadcrumb page="Books" />
        </Col>
      </Row>
      <Row className="g-4">
      {data.map((item) => (
        <Col xs={12} sm={6} md={6} lg={6} key={item.id}>
            <Card className="shadow-lg">
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + item.imageUrl}
              />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Card.Title>{item.tittle}</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
};
