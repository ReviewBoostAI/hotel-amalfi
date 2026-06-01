import '../App.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Arrivare() {

  const { t } = useTranslation()

  return (

    <>

      <Navbar />

      {/* HERO */}

      <section className="page-hero arrivare-hero">

        <div className="overlay">

          <div className="hero-content">

            <span className="hero-mini">
              HOTEL AMALFI
            </span>

            <h1>

              {t('arriveHero')}

              <span>
                {' '}
                {t('arriveHero2')}
              </span>

            </h1>

            <p>
              {t('arriveMini')}
            </p>

          </div>

        </div>

      </section>

      {/* CONTATTI */}

      <section className="hotel-intro">

        <div className="hotel-container">

          <div className="hotel-text">

            <h2>

              {t('contacts')}

              <span>
                {' '}
                {t('contacts2')}
              </span>

            </h2>

            <p>

              Hotel Amalfi
              <br/>
              Via Giuseppe Verdi 73
              <br/>
              Lido di Jesolo (VE)

            </p>

            <p>

              Tel: +39 000 000000
              <br/>
              info@hotelamalfi.it

            </p>

            <div className="cta-buttons">

              <a
                href="tel:+39000000000"
                className="hero-btn"
              >
                {t('callNow')}
              </a>

              <a
                href="mailto:info@hotelamalfi.it"
                className="hero-outline dark"
              >
                Email
              </a>

            </div>

          </div>

          <div className="hotel-image">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Jesolo"
            />

          </div>

        </div>

      </section>

      {/* COME ARRIVARE */}

      <section className="services">

        <h2>

          {t('how')}

          <span>
            {' '}
            {t('how2')}
          </span>

        </h2>

        <div className="services-grid">

          <div className="service-card">

            <h3>
              {t('car')}
            </h3>

            <p>
              {t('carText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('train')}
            </h3>

            <p>
              {t('trainText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('airport')}
            </h3>

            <p>
              {t('airportText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('venice')}
            </h3>

            <p>
              {t('veniceText')}
            </p>

          </div>

        </div>

      </section>

      {/* MAPPA */}

      <section className="map-section">

        <h2>

          {t('where')}

          <span>
            {' '}
            {t('where2')}
          </span>

        </h2>

        <div className="map-box">

          <iframe
            title="Hotel Amalfi Jesolo"
            src="https://www.google.com/maps?q=Via+Giuseppe+Verdi+73+Jesolo&output=embed"
            width="100%"
            height="450"
            style={{ border:0 }}
            allowFullScreen=""
            loading="lazy"
          />

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

          <h2>

            {t('waiting')}

            <span>
              {' '}
              {t('waiting2')}
            </span>

          </h2>

          <p>
            {t('waitingText')}
          </p>

          <div className="cta-buttons">

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              {t('bookNow')}
            </Link>

            <a
              href="mailto:info@hotelamalfi.it"
              className="hero-outline dark"
            >
              {t('contact')}
            </a>

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Arrivare