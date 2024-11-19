import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import data from "../../assets/data/books-name.json";
import { useNavigate } from "react-router-dom";

export const Books = () => {

  const navigate = useNavigate();

  const handleItemClick = (item) =>{
    if (item.type === "tartam-wani"){
      navigate("/tartam-Wani");
    }
    else if (item.type === "sahitya"){
      navigate("/sahitya");
    }
    else if (item.type === "english-books"){
      navigate("/english-books");
    }
    
    else{
      window.open(process.env.PUBLIC_URL + item.pdfUrl, "_blank");
    }
  }

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
                <Button
                  variant="primary"
                  onClick={() => handleItemClick(item)}
                >
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
