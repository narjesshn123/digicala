import React from 'react'
import logo from '../../assets/image/logo.svg';
import takhfif from '../../assets/image/takhfif.gif'
import basket from '../../assets/image/basket.png'
import search from '../../assets/image/search.png';   
import { Carousel } from '../Carousel/Carousel';  
import login from '../../assets/image/login.png';  
import { BiBasket, BiSearch } from 'react-icons/bi';
import { CartMenu } from '../CartMenu/CartMenu';
import { useState } from 'react';
 import { useSelector } from 'react-redux';              
import Auth from '../../api/localStorage';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header({filter, setFilter}) {
  const[show, setShow] = useState()
  const total_count = useSelector((state) => state.cart.items.reduce((count, item)=>
count + item.count, 0))
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid="md">
        <Navbar.Brand onMouseEnter={()=>setShow(true)} style={{position:"relative"}}>
            <BiBasket style={{cursor: "pointer"}}/>
            <span>{total_count}</span>
          <CartMenu show={show} setShow={setShow}/>           
       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>             

            
          </Nav>
          <Form onSubmit={e=>e.preventDefault()} className="d-flex">
            <Form.Control style={{width:'100%'}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e=>setFilter(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr />         
    </>
  );
}

export default Header;