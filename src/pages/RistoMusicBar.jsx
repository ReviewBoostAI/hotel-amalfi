import '../App.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function RistoMusicBar() {

  const { t } = useTranslation()

  return (

    <>

      <Navbar />

      {/* HERO */}

      <section className="page-hero risto-hero">

        <div className="overlay">

          <div className="hero-content">

            <span className="hero-mini">
              HOTEL AMALFI
            </span>

            <h1>

              {t('ristoHero')}

              <span>
                {' '}
                {t('ristoHero2')}
              </span>

            </h1>

            <p>
              {t('ristoMini')}
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="hotel-intro">

        <div className="hotel-container">

          <div className="hotel-text">

            <h2>

              {t('flavors')}

              <span>
                {' '}
                {t('hospitality')}
              </span>

            </h2>

            <p>
              {t('ristoIntro1')}
            </p>

            <p>
              {t('ristoIntro2')}
            </p>

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              {t('bookStay')}
            </Link>

          </div>

          <div className="hotel-image">

            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947"
              alt="Ristorante Hotel"
            />

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}

      <section className="rooms-section">

        <h2>

          {t('taste')}

          <span>
            {' '}
            {t('taste2')}
          </span>

        </h2>

        <div className="rooms-grid">

          <div className="room-card">

            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
              alt=""
            />

            <div className="room-content">

              <h3>
                {t('buffetBreakfast')}
              </h3>

              <p>
                {t('buffetBreakfastText')}
              </p>

            </div>

          </div>

          <div className="room-card">

            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947"
              alt=""
            />

            <div className="room-content">

              <h3>
                {t('italianCuisine')}
              </h3>

              <p>
                {t('italianCuisineText')}
              </p>

            </div>

          </div>

          <div className="room-card">

            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
              alt=""
            />

            <div className="room-content">

              <h3>
                {t('cocktailMusic')}
              </h3>

              <p>
                {t('cocktailMusicText')}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* BUFFET */}

      <section className="services">

        <h2>

          {t('grand')}

          <span>
            {' '}
            {t('buffet')}
          </span>

        </h2>

        <div className="services-grid">

          <div className="service-card">

            <h3>
              {t('breakfast2')}
            </h3>

            <p>
              {t('breakfast2Text')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('kitchen')}
            </h3>

            <p>
              {t('kitchenText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('aperitif')}
            </h3>

            <p>
              {t('aperitifText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('musicBar')}
            </h3>

            <p>
              {t('musicBarText')}
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

          <h2>

            {t('tasteCta')}

            <span>
              {' '}
              {t('tasteCta2')}
            </span>

          </h2>

          <p>
            {t('tasteCtaText')}
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

export default RistoMusicBar