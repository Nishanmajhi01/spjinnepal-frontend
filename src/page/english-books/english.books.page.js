import React from "react";
import { Container, Row, Col, Card,Button} from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import data from "../../assets/data/english-book.json";

export const EnglishBooks = () => {

  const handlePdfOpen = (pdfUrl) => {
    // Open the PDF in a new tab directly
    window.open(process.env.PUBLIC_URL + pdfUrl, "_blank");
  };

  const handlePdfDownload = (pdfUrl) => {
    // Trigger file download
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + pdfUrl;
    link.download = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1); // Extract the file name
    link.click();
  };


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
                <div className="d-flex justify-content-between align-items-center w-50 g-2">
                <Button 
                className="mx-2 " 
                    variant="primary" 
                    size="sm" 
                    onClick={() => handlePdfOpen(item.pdfUrls[0])}>
                    View
                  </Button>
                  <Button 
                  className="mx-2" 
                    variant="secondary" 
                    size="sm" 
                    onClick={() => handlePdfDownload(item.pdfUrls[0])}>
                    Download
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
