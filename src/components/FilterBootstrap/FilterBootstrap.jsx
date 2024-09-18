import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl,Button } from 'react-bootstrap';  

import Department from '../../components/ShopFilters/FilterSlidebar/Department/Department'
import Category from '../../components/ShopFilters/FilterSlidebar/Category/Category'
import Colour from '../../components/ShopFilters/FilterSlidebar/Colour/Colour'

const FilterBootstrap = ({handleChange}) => {
  return (
    <>  
    <Navbar bg="light" expand={false}>  
 <Container fluid>  
   <Navbar.Brand href="" className='Filter-title' style={{fontSize: '2.3rem'}}>Filter</Navbar.Brand>  
   <Navbar.Toggle aria-controls="offcanvasNavbar" />  
   <Navbar.Offcanvas  
     id="offcanvasNavbar"  
     aria-labelledby="offcanvasNavbarLabel"  
     placement="start"  
   >  
     <Offcanvas.Header closeButton>  
       <Offcanvas.Title id="offcanvasNavbarLabel">Filter</Offcanvas.Title>  
     </Offcanvas.Header>  
     <Offcanvas.Body>  
       <Nav className="justify-content-end flex-grow-1 pe-3">  
       
          <Nav.Link href="#action1"><Category handleChange={handleChange} /></Nav.Link>
                 <Nav.Link href=""><Department handleChange={handleChange} /></Nav.Link>
                 <Nav.Link href=""><Colour handleChange={handleChange} /></Nav.Link>
         
       </Nav>  
     
     </Offcanvas.Body>  
   </Navbar.Offcanvas>  
 </Container>  
</Navbar>  
   </>  
  )
}

export default FilterBootstrap
