import '../App.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Prezzi() {

  const { t } = useTranslation()

  return (

    <>

      <Navbar />

      {/* HERO */}

      <section className="page-hero prezzi-hero">

        <div className="overlay">

          <div className="hero-content">

            <span className="hero-mini">
              HOTEL AMALFI
            </span>

            <h1>
              {t('pricesTitle')}
              <span>
                {' '}
                {t('pricesTitle2')}
              </span>
            </h1>

            <p>
              {t('bestPrice')}
            </p>

          </div>

        </div>

      </section>

      {/* BOOKING BAR */}

      <section className="booking-bar">

        <p>
          {t('bookingBar')}
        </p>

      </section>

      {/* PACCHETTI */}

      <section className="packages">

        <h2>

          {t('choose')}

          <span>
            {' '}
            {t('package')}
          </span>

        </h2>

        <div className="cards">

          {/* B&B */}

          <div className="card">

            <div className="card-top">

              <h3>
                {t('bb')}
              </h3>

              <p>
                {t('bbDesc')}
              </p>

            </div>

            <ul>

              <li>
                ✓ {t('breakfast')}
              </li>

              <li>
                ✓ {t('beachPlace')}
              </li>

              <li>
                ✓ {t('parking')}
              </li>

            </ul>

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              {t('quoteBtn')}
            </Link>

          </div>

          {/* HALF */}

          <div className="card featured">

            <div className="card-top">

              <h3>
                {t('half')}
              </h3>

              <p>
                {t('halfDesc')}
              </p>

            </div>

            <ul>

              <li>
                ✓ {t('breakfast')}
              </li>

              <li>
                ✓ {t('dinner')}
              </li>

              <li>
                ✓ {t('beach')}
              </li>

              <li>
                ✓ {t('parking')}
              </li>

            </ul>

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              {t('quoteBtn')}
            </Link>

          </div>

          {/* FULL */}

          <div className="card">

            <div className="card-top">

              <h3>
                {t('full')}
              </h3>

              <p>
                {t('fullDesc')}
              </p>

            </div>

            <ul>

              <li>
                ✓ {t('breakfast')}
              </li>

              <li>
                ✓ {t('lunch')}
              </li>

              <li>
                ✓ {t('dinner')}
              </li>

              <li>
                ✓ {t('beach')}
              </li>

              <li>
                ✓ {t('parking')}
              </li>

            </ul>

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              {t('quoteBtn')}
            </Link>

          </div>

        </div>

      </section>

      {/* INFO */}

      <section className="services">

        <h2>

          {t('infoTitle')}

          <span>
            {' '}
            {t('infoTitle2')}
          </span>

        </h2>

        <div className="services-grid">

          <div className="service-card">

            <h3>
              {t('low')}
            </h3>

            <p>
              {t('lowText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('high')}
            </h3>

            <p>
              {t('highText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('extra')}
            </h3>

            <p>
              {t('extraText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('payments')}
            </h3>

            <p>
              {t('paymentsText')}
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

          <h2>

            {t('priceCta')}

            <span>
              {' '}
              {t('priceCta2')}
            </span>

          </h2>

          <p>
            {t('priceText')}
          </p>

          <div className="cta-buttons">

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              {t('quoteBtn')}
            </Link>

            <Link
              to="/arrivare"
              className="hero-outline dark"
            >
              {t('contact')}
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Prezzi