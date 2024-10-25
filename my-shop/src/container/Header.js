import React,{useState,useEffect} from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header className="head">
        <div className="logo-image">
          <a href="#">
            <img src="https://i.ibb.co/CKkJSh7/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="list">
          <div className="fashion">
            <a href="fashion.html">Fashion</a>
          </div>
          <div className="beauty">
            <a href="beauty.html">Beauty</a>
          </div>
          <div className="electronics">
            <a href="electronics.html">Electronics</a>
          </div>
          <div className="decorative">
            <a href="decorative.html">Decorative</a>
          </div>
        </div>
        <div className="search-box">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search your item"
              className="input"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="right">
          <div className="user">
            <div className="icon">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="font">User</div>
            <div className="dropdown-content">
              <a href="#">Profile</a>
              <a href="#">Address</a>
              <a href="#">Logout</a>
            </div>
          </div>
          <div className="wishlist">
            <div className="icon">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="font">Wishlist</div>
          </div>
          <div className="cart">
            <div className="icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="font">Cart</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
