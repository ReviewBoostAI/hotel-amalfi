import '../App.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Arrivare() {

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

              Come
              <span> Arrivare</span>

            </h1>

            <p>
              JESOLO • VENEZIA • RELAX
            </p>

          </div>

        </div>

      </section>

      {/* CONTATTI */}

      <section className="hotel-intro">

        <div className="hotel-container">

          <div className="hotel-text">

            <h2>

              Contatti e
              <span> Posizione</span>

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
                Chiama Ora
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

          Come
          <span> Arrivare</span>

        </h2>

        <div className="services-grid">

          <div className="service-card">

            <h3>
              In Auto
            </h3>

            <p>

              Autostrada A4,
              uscita Noventa
              direzione Jesolo.

            </p>

          </div>

          <div className="service-card">

            <h3>
              In Treno
            </h3>

            <p>

              Mestre o San Donà
              con collegamento bus.

            </p>

          </div>

          <div className="service-card">

            <h3>
              Aeroporto
            </h3>

            <p>

              Venezia Marco Polo
              a breve distanza.

            </p>

          </div>

          <div className="service-card">

            <h3>
              Venezia
            </h3>

            <p>

              Escursioni rapide
              verso la laguna.

            </p>

          </div>

        </div>

      </section>

      {/* MAPPA */}

      <section className="map-section">

        <h2>

          Dove
          <span> Siamo</span>

        </h2>

        <div className="map-box">

          <iframe
            title="Hotel Amalfi Jesolo"
            src="https://www.google.com/maps?q=Via+Giuseppe+Verdi+73+Lido+di+Jesolo&output=embed"
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

            Ti aspettiamo
            all'
            <span> Hotel Amalfi</span>

          </h2>

          <p>

            Organizza il tuo soggiorno
            e vivi Jesolo
            con comfort e relax.

          </p>

          <div className="cta-buttons">

            <Link
              to="/prezzi"
              className="hero-btn"
            >
              Prenota Ora
            </Link>

            <a
              href="mailto:info@hotelamalfi.it"
              className="hero-outline dark"
            >
              Contattaci
            </a>

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Arrivare