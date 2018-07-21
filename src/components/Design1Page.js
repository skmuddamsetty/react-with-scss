import React from 'react';
const Design1Page = () => (
  <div className="dp1__container">
    <nav className="dp1__nav-bar">
      <img src="images/logo.png" alt="Logo" className="dp1__logo" />
      <ul className="dp1__nav-bar-ul">
        <li className="dp1__nav-bar__item">
          <a href="#" className="dp1__nav-bar__link">
            <span>Features</span>
          </a>
        </li>
        <li className="dp1__nav-bar__item">
          <a href="#" className="dp1__nav-bar__link">
            <span>Implementation</span>
          </a>
        </li>
        <li className="dp1__nav-bar__item">
          <a href="#" className="dp1__nav-bar__link">
            <span>Pricing</span>
          </a>
        </li>
        <li className="dp1__nav-bar__item">
          <a href="#" className="dp1__nav-bar__link">
            <span>Support</span>
          </a>
        </li>
      </ul>
      <div className="dp1__nav-bar__ctas">
        <button className="dp1__btn-inline">Log in</button>
        <button className="dp1__btn-cta">Sign Up</button>
      </div>
    </nav>
  </div>
);

export default Design1Page;
