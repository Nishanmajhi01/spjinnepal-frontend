import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, ListGroup, Card } from 'react-bootstrap';
import booksData from '../../assets/data/tartam-wani.json';
import data from "../../assets/data/tartam-wani.json";

export const SearchBook = () => {
  const [books, setBooks] = useState([]);           // All books from JSON
  const [filteredBooks, setFilteredBooks] = useState([]); // Filtered list for dropdown
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null); // Book to display when clicked
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility

  const handlePdfOpen = (pdfUrl) => {
    // Open the PDF in a new tab directly
    window.open(process.env.PUBLIC_URL + pdfUrl, "_blank");
  };

  // Load books on component mount
  useEffect(() => {
    setBooks(booksData);
    setFilteredBooks(booksData); // Initialize with all books
  }, []);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBooks(term);
    setSelectedBook(null); // Reset selected book when typing
    setShowDropdown(true); // Show dropdown when typing
  };

  // Filter books by title for dropdown
  const filterBooks = (term) => {
    if (term) {
      const filtered = books.filter(book =>
        book.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books); // Show all books if search is empty
    }
  };

  // Handle selecting a book from the dropdown
  const handleSelectBook = (book) => {
    setSelectedBook(book);  // Set the selected book to display its details
    setSearchTerm(book.title); // Set search term to the selected book's title
    setFilteredBooks([]); // Clear the dropdown after selecting
    setShowDropdown(false); // Hide dropdown after selecting a book
  };

  // Show dropdown when clicking on input
  const handleInputClick = () => {
    setShowDropdown(true);
  };

  // Hide dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (e.target.closest('#search-input')) return;
    setShowDropdown(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h1>Search Books</h1>
          <Form>
            <Form.Group controlId="formSearch">
              <Form.Control
                id="search-input"
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={handleSearchChange}
                onClick={handleInputClick}
                autoComplete="off"
              />
            </Form.Group>
          </Form>

          {/* Dropdown list of filtered books */}
          {showDropdown && filteredBooks.length > 0 && (
            <ListGroup className="position-absolute" style={{ zIndex: 1, maxHeight: '200px', overflowY: 'scroll' }}>
              {filteredBooks.map((book, index) => (
                <ListGroup.Item key={index} action onClick={() => handleSelectBook(book)}>
                  {book.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          {/* Display selected book details */}
          {selectedBook ? (
            <Row className="g-4 p-5">
              {data
                .filter(item => item.title === selectedBook.title) // Display only the selected book
                .map((item) => (
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
                          <Card.Link as="button" onClick={() => handlePdfOpen(item.pdfUrls[1])}>
                            टिका
                          </Card.Link>
                          <Card.Link as="button" onClick={() => handlePdfOpen(item.pdfUrls[0])}>
                            मुलवाणी
                          </Card.Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          ) : (
            <p className="text-muted">Select a book to view its details.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};
