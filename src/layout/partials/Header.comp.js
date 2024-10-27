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
   
   >
    <Navbar.Brand><img src={logo} alt='logo' width="70px"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto'>
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/">Our Books</Nav.Link>
            <Nav.Link href="/dashboard">Recent Videos</Nav.Link>
            <Nav.Link href="/dashboard">Contact</Nav.Link>
            <Nav.Link href="/dashboard">About us</Nav.Link>
        </Nav>
    </Navbar.Collapse>
   </Navbar>
  )
}


