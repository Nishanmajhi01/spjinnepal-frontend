import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import  logo from '../../assets/img/logo.png'

export const Header = () => {
  return (
   <Navbar
   collapseOnSelect
   variant='dark'
   bg='dark'
   expand='md'
   className='px-3 fixed-top'
   >
    <Navbar.Brand className='text-white text-center'>
        <img src={logo} alt='logo' width="60px"/>
        <h2 className='mt-2'>श्री प्राणनाथ ज्ञानपीठ</h2>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto'>
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/books">Our Books</Nav.Link>
            <Nav.Link href="/video-gallery">Videos Gallery</Nav.Link>
            <Nav.Link href="/search-books">Search Books</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/dashboard">About us</Nav.Link>
        </Nav>
    </Navbar.Collapse>
   </Navbar>
  )
}


