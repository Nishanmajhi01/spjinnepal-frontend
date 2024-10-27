import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import logo from '../../assets/img/logo.png'

export const Footer = () => {
  return (
    <div>
        <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col md={6}>
            <img src={logo} alt="" srcset="" width="70px" />
            <p>ज्ञान, शिक्षा, उच्च आदर्श, पावन चरित्र तथा श्री प्राणनाथ जी को ब्रह्मवाणी को सिद्धान्त (निजानन्द दर्शन) द्वारा मानवलाई महामानव बनाएर विश्व शान्तिको प्रयास गर्नु तथा सबैमा आध्यात्मिक चेतना जागृत गर्ने उद्देश्य बोकेको संस्था।</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Our Books</a></li>
              <li><a href="#" className="text-white">Recent Videos</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
              <li><a href="#" className="text-white">About us</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: spjin@gmail.com</p>
            <p>Phone: +1 234 567 890</p>
          </Col>
        </Row>
      </Container>
      <div className="mt-3">
      <span>© 2024 Copyright : </span>
    <a className="font-semibold" href="https://tw-elements.com/"
      > श्री प्राणनाथ ज्ञानपीठ || नेपाल </a>
      </div>
    </footer>
    </div>
  )
}


