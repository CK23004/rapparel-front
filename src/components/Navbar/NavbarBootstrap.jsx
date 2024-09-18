import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import './NavbarBootstrap.css'

import { assets } from '../../assets/assets'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBars, faBagShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import DropdownList from './DropdownList';
import SearchForm from '../SearchForm/SearchForm';



const navbarbootstrap = () => {

  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);

  // Toggle the search form visibility
  const toggleSearchForm = () => {
    setIsSearchFormVisible(!isSearchFormVisible);
  };

  return (
    <>
      <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <img src={assets.logomain} alt="" className="location-icon" />
        </Navbar.Brand>

        {/* Adding margin-right to the logo for spacing */}
        <div className="d-flex w-100 justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/Wishlist" className="mx-2">
                <FontAwesomeIcon icon={faHeart} />
              </Nav.Link>
              <Nav.Link href="" onClick={toggleSearchForm} className="mx-2">
                <FontAwesomeIcon icon={faSearch} />
              </Nav.Link>
              <Nav.Link href="/cart" className="mx-2">
                <FontAwesomeIcon icon={faBagShopping} />
              </Nav.Link>
              <Nav.Link href="/account" className="mx-2">
                <FontAwesomeIcon icon={faUser} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
      {isSearchFormVisible && <SearchForm toggleSearchForm={toggleSearchForm} />}
    </Navbar>
    </>)
}

export default navbarbootstrap
