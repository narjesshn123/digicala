import React from 'react'
import famila from '../../assets/image/famila.png'
import mimas from '../../assets/image/mimas.png'
import pizza from '../../assets/image/pizza.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import clear from '../../assets/image/clear.png'
import shoma from '../../assets/image/shoma.png'
import percil from '../../assets/image/percil.png'
// import './Carouselstyle.css'

// import { CarouselItems } from './CarouselItems'
// import Container from 'react-bootstrap/esm/Container'
// export const Carousel = () => {
//   return (
//     <div>
//       <Container>
//       <CarouselItems/>
//       </Container>
           
//     </div>
//   )
// }
// import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BiBorderRadius } from 'react-icons/bi';

function UncontrolledExample() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
       <Row sm={4}>
        <img style={{width:"100%", borderRadius:"2.75rem"}} src={clear}/>
       </Row>
       <br/>
       <Row sm={4}>
       <img style={{width:"100%", borderRadius:"2.75rem"}} src={shoma}/>
       </Row>
       <br/>
       <Row sm={4}>
       <img style={{width:"100%", borderRadius:"2.75rem"}} src={percil}/>
       </Row>
       <br/>
        </Col>
        
        <Col sm={8}>
      
        <Carousel>
         
      <Carousel.Item>
        <img style={{borderRadius:"2.75rem"}}
          className="d-block w-100"
          src={famila}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{borderRadius:"2.75rem"}}
          src={mimas}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{borderRadius:"2.75rem"}}
          src={pizza}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
      </Container>
   
  );
}

export default UncontrolledExample;