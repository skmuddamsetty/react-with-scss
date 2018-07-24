import React from 'react';
const ThirdWebDesignPage = () => (
  <div className="third_web_design_page_container">
    <header className="twpd__header">
      <div className="twpd__navbar">
        <img src="images/logo-flower.png" alt="Logo" className="twpd__logo" />
        <nav className="twpd__main__nav">
          <ul className="twpd__main__nav__ul">
            <li className="twpd__main__nav__item">
              <a className="twpd__main__nav__link">sign in</a>
            </li>
            <li className="twpd__main__nav__item">
              <a className="twpd__main__nav__link">sign up</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="twpd__hero__box">
        <h1 className="twpd__hero__box__title">Renting Done Right. Finally.</h1>
        <input
          type="text"
          className="twpd__hero__box__input"
          placeholder="Where do you want to live?"
        />
        <h2 className="twpd__hero__box__sub-title">
          Market your property to millions
        </h2>
        <button className="twpd__hero__box__btn twpd-btn twpd-btn-yellow">
          List Your Rental
        </button>
      </div>
    </header>
    <section className="twpd__orange__section">
      <div className="twpd__orange__section__box">
        <div className="twpd__orange__section__div">
          <img
            className="twpd__orange__section__img"
            src="images/details.png"
          />
        </div>
        <div className="twpd__orange__section__text-box">
          <h3 className="twpd__orange__section__text-box__title">
            Know All Details Before Applying
          </h3>
          <p className="twpd__orange__section__text-box__sub-title">
            Knowing your competition is a key point in getting the most
            transparent rental experience. Analyze other offers, know where you
            stand in the rental process and evaluate your real chances of
            getting a place.
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <div className="twpd__orange__section__box">
        <div className="twpd__orange__section__div">
          <img
            className="twpd__orange__section__img"
            src="images/payment.png"
          />
        </div>
        <div className="twpd__orange__section__text-box">
          <h3 className="twpd__orange__section__text-box__title">
            Pay Rent Online
          </h3>
          <p className="twpd__orange__section__text-box__sub-title">
            Say goodbye to paper checks! Use Rentberry to schedule your next
            rental payment. Our secure ACH payment technology allows to connect
            bank accounts and make rental payments instantly. Sharing the rent?
            No problem! With Rentberry, you can conveniently split the payments
            with your roommates.
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </section>
  </div>
);

export default ThirdWebDesignPage;
