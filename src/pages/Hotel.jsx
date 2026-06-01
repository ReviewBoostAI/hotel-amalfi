import '../App.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Hotel() {

  const { t } = useTranslation()

  return (

    <>

      <Navbar />

      {/* HERO */}

      <section className="page-hero hotel-hero">

        <div className="overlay">

          <div className="hero-content">

            <span className="hero-mini">
              HOTEL AMALFI
            </span>

            <h1>

              {t('hotelHero')}

              <span>
                {' '}
                {t('hotelHero2')}
              </span>

            </h1>

            <p>
              {t('hotelMini')}
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="hotel-intro">

        <div className="hotel-container">

          <div className="hotel-text">

            <h2>

              {t('hotelWelcome')}

              <span>
                {t('hotelWelcome2')}
              </span>

            </h2>

            <p>
              {t('hotelText1')}
            </p>

            <p>
              {t('hotelText2')}
            </p>

            <Link
              to="/camere"
              className="hero-btn"
            >
              {t('discoverRooms')}
            </Link>

          </div>

          <div className="hotel-image">

            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Hotel Amalfi"
            />

          </div>

        </div>

      </section>

      {/* SERVIZI */}

      <section className="services">

        <h2>

          {t('comfortTitle')}

          <span>
            {' '}
            {t('comfortTitle2')}
          </span>

        </h2>

        <div className="services-grid">

          <div className="service-card">

            <h3>
              {t('wifi')}
            </h3>

            <p>
              {t('wifiText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('beach')}
            </h3>

            <p>
              {t('beachText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('parking')}
            </h3>

            <p>
              {t('parkingRuleText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              RistoMusicBar
            </h3>

            <p>
              {t('ristoText')}
            </p>

          </div>

        </div>

      </section>

      {/* REGOLE */}

      <section className="rules-section">

        <h2>

          {t('rulesTitle')}

          <span>
            {' '}
            {t('rulesTitle2')}
          </span>

        </h2>

        <div className="rules-container">

          <div className="rule-card">

            <h3>
              {t('check')}
            </h3>

            <p>
              {t('checkText')}
            </p>

          </div>

          <div className="rule-card">

            <h3>
              {t('parkingRule')}
            </h3>

            <p>
              {t('parkingRuleText')}
            </p>

          </div>

          <div className="rule-card">

            <h3>
              {t('paymentsRule')}
            </h3>

            <p>
              {t('paymentsRuleText')}
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

          <h2>

            {t('hotelCta')}

            <span>
              {' '}
              {t('hotelCta2')}
            </span>

          </h2>

          <p>
            {t('hotelCtaText')}
          </p>

          <div className="cta-buttons">

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              {t('bookNow')}
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

export default Hotel