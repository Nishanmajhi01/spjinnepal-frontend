import React from 'react'
import {Carousel, Container,Row,Col} from 'react-bootstrap'
import photo from  '../../assets/img/p1.jpg'
import { Temple } from '../sections/Temple-section'
import { Swami } from '../sections/Swami-section'
import { Rajan } from '../sections/Rajan-swami-section'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'


export const Dashboard = () => {
  return (
    <Container>
      <Row>
            <Col>
            <PageBreadcrumb page="Dashboard"/>
            </Col>
        </Row>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo}
          alt="First slide"
        />
        <Carousel.Caption className='text-white '>
          <h5>ज्ञान, शिक्षा, उच्च आदर्श, पावन चरित्र तथा श्री प्राणनाथ जी को ब्रह्मवाणी को सिद्धान्त</h5>
          <p>(निजानन्द दर्शन) द्वारा मानवलाई महामानव बनाएर विश्व शान्तिको प्रयास गर्नु तथा सबैमा आध्यात्मिक चेतना जागृत गर्ने उद्देश्य बोकेको संस्था।</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo}
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
        <h5>ज्ञान, शिक्षा, उच्च आदर्श, पावन चरित्र तथा श्री प्राणनाथ जी को ब्रह्मवाणी को सिद्धान्त</h5>
        <p>(निजानन्द दर्शन) द्वारा मानवलाई महामानव बनाएर विश्व शान्तिको प्रयास गर्नु तथा सबैमा आध्यात्मिक चेतना जागृत गर्ने उद्देश्य बोकेको संस्था।</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo}
          alt="Third slide"
        />
        <Carousel.Caption className='text-white'>
        <h5>ज्ञान, शिक्षा, उच्च आदर्श, पावन चरित्र तथा श्री प्राणनाथ जी को ब्रह्मवाणी को सिद्धान्त</h5>
        <p>(निजानन्द दर्शन) द्वारा मानवलाई महामानव बनाएर विश्व शान्तिको प्रयास गर्नु तथा सबैमा आध्यात्मिक चेतना जागृत गर्ने उद्देश्य बोकेको संस्था।</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr />
    <Temple/>
    <hr />
    <Swami/>
    <hr/>
    <Rajan/>

  
    </Container>
  )
}

