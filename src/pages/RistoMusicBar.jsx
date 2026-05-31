import '../App.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function RistoMusicBar() {

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

              Risto
              <span> Music Bar</span>

            </h1>

            <p>
              GUSTO • RELAX • ATMOSFERA
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="hotel-intro">

        <div className="hotel-container">

          <div className="hotel-text">

            <h2>

              Sapori e
              <span> Ospitalità</span>

            </h2>

            <p>

              Il RistoMusicBar Amalfi
              è uno spazio dedicato
              alla convivialità,
              alla cucina italiana
              e ai momenti di relax.

            </p>

            <p>

              Colazioni ricche,
              buffet e serate
              in un'atmosfera elegante
              e rilassata.

            </p>

            <Link
              to="/prezzi"
              className="hero-btn"
            >
              Prenota il Soggiorno
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

          Esperienze di
          <span> Gusto</span>

        </h2>

        <div className="rooms-grid">

          <div className="room-card">

            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
              alt=""
            />

            <div className="room-content">

              <h3>
                Colazione Buffet
              </h3>

              <p>

                Buffet dolce e salato
                con prodotti freschi
                e selezionati.

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
                Cucina Italiana
              </h3>

              <p>

                Piatti ispirati
                alla tradizione
                mediterranea.

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
                Cocktail & Music
              </h3>

              <p>

                Relax e atmosfera
                per serate speciali.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* BUFFET */}

      <section className="services">

        <h2>

          Grand
          <span> Buffet</span>

        </h2>

        <div className="services-grid">

          <div className="service-card">

            <h3>
              Colazione
            </h3>

            <p>

              Buffet ricco
              dolce e salato.

            </p>

          </div>

          <div className="service-card">

            <h3>
              Cucina
            </h3>

            <p>

              Piatti italiani
              e mediterranei.

            </p>

          </div>

          <div className="service-card">

            <h3>
              Aperitivi
            </h3>

            <p>

              Cocktail e momenti
              di relax.

            </p>

          </div>

          <div className="service-card">

            <h3>
              Music Bar
            </h3>

            <p>

              Atmosfera elegante
              e conviviale.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

          <h2>

            Vivi il gusto
            firmato
            <span> Amalfi</span>

          </h2>

          <p>

            Colazioni,
            cucina italiana
            e atmosfera unica
            a Jesolo.

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

export default RistoMusicBar