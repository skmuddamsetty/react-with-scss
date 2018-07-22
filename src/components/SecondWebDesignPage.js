import React from 'react';
const SecondWebDesignPage = () => (
  <div className="second_web_design_page">
    <header className="swpd__header">
      <div className="swpd__navbar">
        <img src="images/dollar_logo.svg" alt="Logo" className="swpd__logo" />
        <nav className="swpd__main__nav">
          <ul className="swpd__main__nav__ul">
            <li className="swpd__main__nav__item">
              <a className="swpd__main__nav__link">Home</a>
            </li>
            <li className="swpd__main__nav__item">
              <a className="swpd__main__nav__link">Features</a>
            </li>
            <li className="swpd__main__nav__item">
              <a className="swpd__main__nav__link">Pricing</a>
            </li>
            <li className="swpd__main__nav__item">
              <a className="swpd__main__nav__link">Career</a>
            </li>
            <li className="swpd__main__nav__item">
              <a className="swpd__main__nav__link">Blog</a>
            </li>
            <li className="swpd__main__nav__item">
              <a className="swpd__main__nav__link">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="swpd__ctas">
          <button className="swpd__btn-white">sign up</button>
          <button className="swpd__btn-blue">Log in</button>
        </div>
      </div>
      <div className="swpd__header__content">
        <div className="swpd__header__intro">
          <h1 className="hero__text">Sell like a Pro</h1>
          <p className="hero__p">
            Build your successful e-commerce business with one single
            application.
          </p>
          <div className="request__box">
            <input
              placeholder="Your e-mail address"
              type="text"
              className="request__email"
            />
            <button className="swpd__btn-request">
              Request Demo<span className="request__icon">&rarr;</span>
            </button>
          </div>
        </div>
        <div className="swpd__header__hero__img">
          <img src="images/hero_logo_3.png" alt="Hero" />
        </div>
      </div>
    </header>
  </div>
);

export default SecondWebDesignPage;
