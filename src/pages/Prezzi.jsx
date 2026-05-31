import '../App.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Prezzi() {

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

              I Nostri
              <span> Prezzi</span>

            </h1>

            <p>
              MIGLIOR PREZZO GARANTITO
            </p>

          </div>

        </div>

      </section>

      {/* BOOKING BAR */}

      <section className="booking-bar">

        <p>
          Prenota dal sito ufficiale
          per ottenere le migliori condizioni.
        </p>

      </section>

      {/* PACCHETTI */}

      <section className="packages">

        <h2>

          Scegli il tuo
          <span> Pacchetto</span>

        </h2>

        <div className="cards">

          {/* CAMERA E COLAZIONE */}

          <div className="card">

            <div className="card-top">

              <h3>
                CAMERA E COLAZIONE
              </h3>

              <p>

                con SPIAGGIA
                e PARCHEGGIO

              </p>

            </div>

            <ul>

              <li>✓ Colazione Inclusa</li>
              <li>✓ Posto Spiaggia</li>
              <li>✓ Parcheggio</li>

            </ul>

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              Richiedi Preventivo
            </Link>

          </div>

          {/* MEZZA PENSIONE */}

          <div className="card featured">

            <div className="card-top">

              <h3>
                MEZZA PENSIONE
              </h3>

              <p>

                con BEVANDE
                e SPIAGGIA

              </p>

            </div>

            <ul>

              <li>✓ Colazione</li>
              <li>✓ Cena Inclusa</li>
              <li>✓ Spiaggia</li>
              <li>✓ Parcheggio</li>

            </ul>

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              Richiedi Preventivo
            </Link>

          </div>

          {/* PENSIONE COMPLETA */}

          <div className="card">

            <div className="card-top">

              <h3>
                PENSIONE COMPLETA
              </h3>

              <p>

                con BEVANDE
                e SPIAGGIA

              </p>

            </div>

            <ul>

              <li>✓ Colazione</li>
              <li>✓ Pranzo</li>
              <li>✓ Cena</li>
              <li>✓ Spiaggia</li>
              <li>✓ Parcheggio</li>

            </ul>

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              Richiedi Preventivo
            </Link>

          </div>

        </div>

      </section>

      {/* INFO */}

      <section className="services">

        <h2>

          Prezzi e
          <span> Informazioni</span>

        </h2>

        <div className="services-grid">

          <div className="service-card">

            <h3>
              Bassa Stagione
            </h3>

            <p>

              Tariffe dedicate
              e soggiorni convenienti.

            </p>

          </div>

          <div className="service-card">

            <h3>
              Alta Stagione
            </h3>

            <p>

              Disponibilità limitata
              e pacchetti premium.

            </p>

          </div>

          <div className="service-card">

            <h3>
              Servizi Extra
            </h3>

            <p>

              Spiaggia,
              parcheggio
              e richieste personalizzate.

            </p>

          </div>

          <div className="service-card">

            <h3>
              Pagamenti
            </h3>

            <p>

              Carte,
              contanti
              e bonifico.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

          <h2>

            Prenota al
            <span> Miglior Prezzo</span>

          </h2>

          <p>

            Contattaci direttamente
            e ricevi il preventivo
            migliore per il tuo soggiorno.

          </p>

          <div className="cta-buttons">

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              Richiedi Preventivo
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

export default Prezzi