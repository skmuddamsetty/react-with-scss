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
    <main>
      <div className="swpd-one-stop-shop">
        <div className="swpd-one-stop-shop__div">
          <img
            src="images/sale.png"
            alt="Hero"
            className="swpd-one-stop-shop__img"
          />
        </div>
        <div className="swpd-one-stop-shop__text-box">
          <h2 className="swpd__h2">One Stop Shop</h2>
          <p className="swpd__p">
            Run a successful online store with one subscription - collect
            payments, ship products, track inventory, manage customers, improve
            SEO, run marketing campaigns and promotions.
          </p>
          <button className="swpd__btn-light-blue">start selling</button>
        </div>
      </div>

      <div className="swpd-cards">
        <div className="swpd-card">
          <div className="swpd-card__div">
            <img
              src="images/improve.png"
              alt="Hero"
              className="swpd-card__img"
            />
          </div>
          <div className="swpd-card__text-box">
            <h2 className="swpd-card__h2">Improve Sales</h2>
            <p className="swpd-card__p">
              Use advanced analytics and tracking tools to understand how your
              website is faring with your customers. Choose from hundreds of
              themes designed to improve conversion and sales, and achieve
              immediate results.
            </p>
            <button className="swpd__btn-light-blue">browse themes</button>
          </div>
        </div>
        <div className="swpd-card">
          <div className="swpd-card__div">
            <img
              src="images/integrate.png"
              alt="Hero"
              className="swpd-card__img"
            />
          </div>
          <div className="swpd-card__text-box">
            <h2 className="swpd-card__h2">Integrate & Extend</h2>
            <p className="swpd-card__p">
              Use 300+ APIs & webhooks and integrate with third party systems,
              install extensions and plugins, or develop your own in Python.
            </p>
            <button className="swpd__btn-light-blue">start building</button>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default SecondWebDesignPage;
