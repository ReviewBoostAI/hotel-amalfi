import '../App.css'
import {
  Link,
  useLocation
} from 'react-router-dom'
import {
  useEffect
} from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {

  const location = useLocation()

  useEffect(() => {

    const params = new URLSearchParams(
      location.search
    )

    if (
      params.get('scroll')
      === 'preventivo'
    ) {

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
              Hotel
              <span> Amalfi</span>
            </h1>

            <p>
              JESOLO • VENEZIA
            </p>

            <div className="hero-buttons">

              <Link
                to="/?scroll=preventivo"
                className="hero-btn"
              >
                Prenota al Miglior Prezzo
              </Link>

              <Link
                to="/hotel"
                className="hero-outline"
              >
                Scopri l'Hotel
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
            Benvenuti all'
            <span> Hotel Amalfi</span>
          </h2>

          <p>
            Un hotel accogliente nel cuore di Jesolo,
            perfetto per vacanze tra mare, relax
            e ospitalità italiana.
          </p>

        </div>

      </section>

      {/* SERVICES */}

      <section className="services">

        <h2>
          I Nostri
          <span> Servizi</span>
        </h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Wi-Fi</h3>
            <p>
              Connessione gratuita
              in tutta la struttura.
            </p>
          </div>

          <div className="service-card">
            <h3>Spiaggia</h3>
            <p>
              Posto spiaggia
              incluso nei pacchetti.
            </p>
          </div>

          <div className="service-card">
            <h3>Parcheggio</h3>
            <p>
              Disponibile
              per i clienti hotel.
            </p>
          </div>

          <div className="service-card">
            <h3>Ristorante</h3>
            <p>
              Cucina italiana
              e atmosfera rilassata.
            </p>
          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="gallery-section">

        <h2>
          Scopri
          <span> Amalfi</span>
        </h2>

        <div className="gallery-grid">

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Hotel"
            />
            <div className="gallery-overlay">
              <h3>Hotel</h3>
            </div>
          </div>

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt="Camera"
            />
            <div className="gallery-overlay">
              <h3>Camere</h3>
            </div>
          </div>

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
              alt="Ristorante"
            />
            <div className="gallery-overlay">
              <h3>Ristorante</h3>
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
            Richiedi un
            <span> Preventivo</span>
          </h2>

          <p>
            Compila il modulo e ti risponderemo
            nel più breve tempo possibile
            con la migliore offerta disponibile.
          </p>

          <form className="booking-form">

            <input
              type="text"
              placeholder="Nome e Cognome"
              required
            />

            <input
              type="email"
              placeholder="Email"
              required
            />

            <input
              type="tel"
              placeholder="Telefono"
              required
            />

            <div className="contact-grid">

              <div>
                <label>Data Arrivo</label>
                <input
                  type="date"
                  required
                />
              </div>

              <div>
                <label>Data Partenza</label>
                <input
                  type="date"
                  required
                />
              </div>

            </div>

            <div className="contact-grid">

              <div>
                <label>Maggiorenni *</label>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  required
                />
              </div>

              <div>
                <label>Bambini</label>
                <input
                  type="number"
                  min="0"
                  defaultValue="0"
                />
              </div>

            </div>

            <textarea
              rows="5"
              placeholder="Messaggio o richieste speciali"
            ></textarea>

            <button type="submit">
              Richiedi Preventivo
            </button>

          </form>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-box">

          <h2>
            Vivi Jesolo con
            <span> Amalfi</span>
          </h2>

          <p>
            Prenota direttamente
            dal sito ufficiale
            per ottenere
            il miglior prezzo.
          </p>

          <div className="cta-buttons">

            <Link
              to="/?scroll=preventivo"
              className="hero-btn"
            >
              Verifica Disponibilità
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

export default Home