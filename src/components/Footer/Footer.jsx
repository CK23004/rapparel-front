import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

import SimpleBottomNavigation from '../BottomNavigation/SimpleBottomNavigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  // State to manage dropdown visibility for each section
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [isCompanyInfoDropdownOpen, setCompanyInfoDropdownOpen] = useState(false);
  const [isQuickLinksDropdownOpen, setQuickLinksDropdownOpen] = useState(false);

  // Function to toggle dropdown for Shop section
  const toggleShopDropdown = () => {
    setShopDropdownOpen(!isShopDropdownOpen);
  };

  // Function to toggle dropdown for Company Info section
  const toggleCompanyInfoDropdown = () => {
    setCompanyInfoDropdownOpen(!isCompanyInfoDropdownOpen);
  };

  // Function to toggle dropdown for Quick Links section
  const toggleQuickLinksDropdown = () => {
    setQuickLinksDropdownOpen(!isQuickLinksDropdownOpen);
  };

  return (
    <div className="footer container-fluid bg-light py-5" id="footer">
      <SimpleBottomNavigation />
      <div className="footer-content container border-top pt-4">
        <div className="row align-items-start">
          {/* Left Section: Logo and Social Icons */}
          <div className="col-lg-4 col-md-12 text-center mb-4 mb-lg-0 d-flex  align-items-center justify-content-center flex-column">
            <img src={assets.logomain} alt="Logo" className="footer-logo mb-3" />
            <div className="footer-social-icons d-flex justify-content-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          {/* Right Section: Links */}
          <div className="col-lg-8 col-md-12">
            <div className="row text-center text-lg-start">
              {/* Shop Section with Dropdown on Small Screens */}
              <div className="col-md-4 mb-4">
                <h2
                  className="h5 d-flex justify-content-between align-items-center"
                  onClick={toggleShopDropdown}
                >
                  Shop
                  <span className="dropdown-toggle d-lg-none"></span>
                </h2>
                <ul className={`list-unstyled footer-dropdown ${isShopDropdownOpen ? 'd-block' : ''}`}>
                  <li className="py-1">Men</li>
                  <li className="py-1">Women</li>
                  <li className="py-1">Kids</li>
                </ul>
              </div>

              {/* Company Info Section with Dropdown on Small Screens */}
              <div className="col-md-4 mb-4">
                <h2
                  className="h5 d-flex justify-content-between align-items-center"
                  onClick={toggleCompanyInfoDropdown}
                >
                  Company Info
                  <span className="dropdown-toggle d-lg-none"></span>
                </h2>
                <ul className={`list-unstyled footer-dropdown ${isCompanyInfoDropdownOpen ? 'd-block' : ''}`}>
                  <li className="py-1">About Us</li>
                  <li className="py-1">Location</li>
                  <li className="py-1">Store</li>
                </ul>
              </div>

              {/* Quick Links Section with Dropdown on Small Screens */}
              <div className="col-md-4 mb-4">
                <h2
                  className="h5 d-flex justify-content-between align-items-center"
                  onClick={toggleQuickLinksDropdown}
                >
                  Quick Links
                  <span className="dropdown-toggle d-lg-none"></span>
                </h2>
                <ul className={`list-unstyled footer-dropdown ${isQuickLinksDropdownOpen ? 'd-block' : ''}`}>
                  <li className="py-1">Customer Services</li>
                  <li className="py-1">Legal & Privacy</li>
                  <li className="py-1">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
