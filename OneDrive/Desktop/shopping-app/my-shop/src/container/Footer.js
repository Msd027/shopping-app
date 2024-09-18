import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="last">
        <div className="block">
          <div className="mini-block">
            <div className="list2">
              <ul>
                <h5>ONLINE SHOPPING</h5>
                <li>Fashion</li>
                <li>Beauty</li>
                <li>Electronics</li>
                <li>Decorative</li>
              </ul>
            </div>
            <div className="list2">
              <ul>
                <h5>CUSTOMER POLICIES</h5>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>T&C</li>
                <li>Shipping</li>
                <li>Cancellation</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
                <li>Grievance Officer</li>
              </ul>
            </div>
            <div className="list2">
              <ul>
                <h5>USEFUL LINKS</h5>
                <li>Blog</li>
                <li>Careers</li>
                <li>Site Map</li>
                <li>Corporate Information</li>
                <li>Whitehat</li>
              </ul>
            </div>
            <div className="list2">
              <ul>
                <h5>CONTACT US</h5>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="social">
            <h5>KEEP IN TOUCH</h5>
            <div className="link">
              <a href="https://www.facebook.com/sufiyandanish" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </div>
            <div className="link">
              <a href="https://www.instagram.com/sufiyan027/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </div>
            <div className="link">
              <a href="https://x.com/SufiyanMsd" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="end">
        <div className="mini-container">
          <p>&copy; 2024, 10's free.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;