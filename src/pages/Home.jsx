import '../App.css'
import {
  Link,
  useLocation
} from 'react-router-dom'
import {
  useEffect
} from 'react'
import {
  useTranslation
} from 'react-i18next'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {

  const location = useLocation()

  const { t } = useTranslation()

  useEffect(() => {

    const params =
      new URLSearchParams(
        location.search
      )

    if(
      params.get('scroll')
      === 'preventivo'
    ){

      setTimeout(() => {

        document
          .getElementById(
            'preventivo'
          )
          ?.scrollIntoView({
            behavior:'smooth'
          })

      },200)

    }

  },[location])

  return (

    <>

      <Navbar />

      {/* HERO */}

      <section
        className="hero"
        style={{
          backgroundImage:
          "url('https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2000&auto=format&fit=crop')"
        }}
      >

        <div className="overlay">

          <div className="hero-content">

            <span className="hero-mini">
              HOTEL ★★★
            </span>

            <h1>
              {t('heroTitle')}
              <span> Amalfi</span>
            </h1>

            <p>
              {t('heroLocation')}
            </p>

            <div className="hero-buttons">

              <Link
                to="/?scroll=preventivo"
                className="hero-btn"
              >
                {t('heroBook')}
              </Link>

              <Link
                to="/hotel"
                className="hero-outline"
              >
                {t('heroDiscover')}
              </Link>

            </div>

          </div>

          <div className="dots">

            <div className="dot"></div>
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>

          </div>

        </div>

      </section>

      {/* WELCOME */}

      <section className="welcome">

        <div className="welcome-box">

          <h2>

            {t('welcomeTitle')}

            <span>
              {t('welcomeHotel')}
            </span>

          </h2>

          <p>
            {t('welcomeText')}
          </p>

        </div>

      </section>

      {/* SERVICES */}

      <section className="services">

        <h2>

          {t('services')}

          <span>
            {' '}
            {t('services2')}
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
              {t('parkingText')}
            </p>

          </div>

          <div className="service-card">

            <h3>
              {t('restaurant')}
            </h3>

            <p>
              {t('restaurantText')}
            </p>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="gallery-section">

        <h2>

          {t('gallery')}

          <span>
            {' '}
            {t('gallery2')}
          </span>

        </h2>

        <div className="gallery-grid">

          <div className="gallery-card">

            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Hotel"
            />

            <div className="gallery-overlay">

              <h3>
                {t('galleryHotel')}
              </h3>

            </div>

          </div>

          <div className="gallery-card">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt="Camera"
            />

            <div className="gallery-overlay">

              <h3>
                {t('galleryRooms')}
              </h3>

            </div>

          </div>

          <div className="gallery-card">

            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
              alt="Ristorante"
            />

            <div className="gallery-overlay">

              <h3>
                {t('galleryRestaurant')}
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* PREVENTIVO */}

      <section
        className="booking-section"
        id="preventivo"
      >

        <div className="booking-box">

          <h2>

            {t('quoteTitle')}

            <span>
              {' '}
              {t('quoteTitle2')}
            </span>

          </h2>

          <p>
            {t('quoteText')}
          </p>

          <form className="booking-form">

            <input
              type="text"
              placeholder={t('name')}
              required
            />

            <input
              type="email"
              placeholder={t('email')}
              required
            />

            <input
              type="tel"
              placeholder={t('phone')}
              required
            />

            <div className="contact-grid">

              <div>

                <label>
                  {t('arrival')}
                </label>

                <input
                  type="date"
                  required
                />

              </div>

              <div>

                <label>
                  {t('departure')}
                </label>

                <input
                  type="date"
                  required
                />

              </div>

            </div>

            <div className="contact-grid">

              <div>

                <label>
                  {t('adults')}
                </label>

                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  required
                />

              </div>

              <div>

                <label>
                  {t('kids')}
                </label>

                <input
                  type="number"
                  min="0"
                  defaultValue="0"
                />

              </div>
<select className="quote-input">

  <option value="">
    Trattamento Richiesto
  </option>

  <option>
    Camera e Colazione
  </option>

  <option>
    Mezza Pensione
  </option>

  <option>
    Pensione Completa
  </option>

</select>
            </div>

            <textarea
              rows="5"
              placeholder={t('message')}
            ></textarea>

            <button type="submit">
              {t('send')}
            </button>

          </form>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

          <h2>

            {t('ctaTitle')}

            <span>
              {' '}
              {t('ctaTitle2')}
            </span>

          </h2>

          <p>
            {t('ctaText')}
          </p>

          <div className="cta-buttons">

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              {t('availability')}
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

export default Home