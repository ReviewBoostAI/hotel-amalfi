import '../App.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Hotel() {

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

              Il Nostro
              <span> Hotel</span>

            </h1>

            <p>
              RELAX • COMFORT • JESOLO
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="hotel-intro">

        <div className="hotel-container">

          <div className="hotel-text">

            <h2>

              Benvenuti
              all'
              <span> Hotel Amalfi</span>

            </h2>

            <p>

              Hotel Amalfi è pensato
              per offrire una vacanza
              rilassante a pochi passi
              dal mare di Jesolo.

            </p>

            <p>

              Atmosfera familiare,
              servizi dedicati
              e comfort moderno
              per ogni soggiorno.

            </p>

            <Link
              to="/camere"
              className="hero-btn"
            >
              Scopri le Camere
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

          Servizi e
          <span> Comfort</span>

        </h2>

        <div className="services-grid">

          <div className="service-card">

            <h3>
              Wi-Fi
            </h3>

            <p>

              Connessione gratuita
              in tutta la struttura.

            </p>

          </div>

          <div className="service-card">

            <h3>
              Spiaggia
            </h3>

            <p>

              Posto spiaggia
              incluso nei pacchetti.

            </p>

          </div>

          <div className="service-card">

            <h3>
              Parcheggio
            </h3>

            <p>

              Disponibile secondo
              disponibilità.

            </p>

          </div>

          <div className="service-card">

            <h3>
              RistoMusicBar
            </h3>

            <p>

              Cucina italiana,
              buffet e relax.

            </p>

          </div>

        </div>

      </section>

      {/* REGOLAMENTO */}

      <section className="rules-section">

        <h2>

          Informazioni e
          <span> Regolamento</span>

        </h2>

        <div className="rules-container">

          <div className="rule-card">

            <h3>
              Check-in / Check-out
            </h3>

            <p>

              Check-in dalle 14:00.
              Check-out entro le 10:00.

            </p>

          </div>

          <div className="rule-card">

            <h3>
              Parcheggio
            </h3>

            <p>

              Disponibile secondo
              disponibilità.

            </p>

          </div>

          <div className="rule-card">

            <h3>
              Pagamenti
            </h3>

            <p>

              Carte, contanti
              e bonifico.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

          <h2>

            Vivi Jesolo
            con
            <span> Amalfi</span>

          </h2>

          <p>

            Prenota dal sito ufficiale
            e ottieni le migliori
            condizioni disponibili.

          </p>

          <div className="cta-buttons">

            <Link
              to="/prezzi"
              className="hero-btn"
            >
              Prenota Ora
            </Link>

            <Link
              to="/arrivare"
              className="hero-outline dark"
            >
              Contattaci
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Hotel