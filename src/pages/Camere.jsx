import '../App.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Camere() {

  const { t } = useTranslation()

  return (

    <>

      <Navbar />

      {/* HERO */}

      <section className="page-hero camere-hero">

        <div className="overlay">

          <div className="hero-content">

            <span className="hero-mini">
              HOTEL AMALFI
            </span>

            <h1>

              {t('roomsHero')}

              <span>
                {' '}
                {t('roomsHero2')}
              </span>

            </h1>

            <p>
              {t('roomsMini')}
            </p>

          </div>

        </div>

      </section>

      {/* CAMERE */}

      <section className="rooms-section">

        <h2>

          {t('roomsHero')}

          <span>
            {' '}
            {t('roomsHero2')}
          </span>

        </h2>

        <div className="rooms-grid">

          {/* CLASSIC */}

          <div className="room-card">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt="Classic"
            />

            <div className="room-content">

              <h3>
                {t('classic')}
              </h3>

              <p>
                {t('classicText')}
              </p>

              <Link
                to="/?scroll=preventivo"
                className="hero-btn"
              >
                {t('discover')}
              </Link>

            </div>

          </div>

          {/* COMFORT */}

          <div className="room-card">

            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              alt="Comfort"
            />

            <div className="room-content">

              <h3>
                {t('comfort')}
              </h3>

              <p>
                {t('comfortText')}
              </p>

              <Link
                to="/?scroll=preventivo"
                className="hero-btn"
              >
                {t('discover')}
              </Link>

            </div>

          </div>

          {/* SUPERIOR */}

          <div className="room-card">

            <img
              src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
              alt="Superior"
            />

            <div className="room-content">

              <h3>
                {t('superior')}
              </h3>

              <p>
                {t('superiorText')}
              </p>

              <Link
                to="/?scroll=preventivo"
                className="hero-btn"
              >
                {t('discover')}
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

          <h2>

            {t('roomsCta')}

            <span>
              {' '}
              {t('roomsCta2')}
            </span>

          </h2>

          <p>
            {t('roomsCtaText')}
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

export default Camere