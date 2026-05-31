import '../App.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Camere() {

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

              Le Nostre
              <span> Camere</span>

            </h1>

            <p>
              COMFORT • RELAX • JESOLO
            </p>

          </div>

        </div>

      </section>

      {/* ROOMS */}

      <section className="rooms-section">

        <h2>

          Tipologie di
          <span> Camera</span>

        </h2>

        <div className="rooms-grid">

          {/* DOPPIA */}

          <div className="room-card">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt="Camera Doppia"
            />

            <div className="room-content">

              <h3>
                Camera Doppia
              </h3>

              <p>

                Camera elegante
                con letto matrimoniale,
                bagno privato,
                aria condizionata
                e balcone.

              </p>

              <Link
                to="/prezzi"
                className="hero-btn"
              >
                Vedi Prezzi
              </Link>

            </div>

          </div>

          {/* TRIPLA */}

          <div className="room-card">

            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              alt="Camera Tripla"
            />

            <div className="room-content">

              <h3>
                Camera Tripla
              </h3>

              <p>

                Ideale per famiglie
                o piccoli gruppi,
                ampia e luminosa
                con ogni comfort.

              </p>

              <Link
                to="/prezzi"
                className="hero-btn"
              >
                Vedi Prezzi
              </Link>

            </div>

          </div>

          {/* QUADRUPLA */}

          <div className="room-card">

            <img
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
              alt="Camera Quadrupla"
            />

            <div className="room-content">

              <h3>
                Camera Quadrupla
              </h3>

              <p>

                Spazio e comodità
                per tutta la famiglia
                con ambienti curati
                e atmosfera rilassante.

              </p>

              <Link
                to="/prezzi"
                className="hero-btn"
              >
                Vedi Prezzi
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* PACCHETTI */}

      <section className="packages">

        <h2>

          Pacchetti di
          <span> Soggiorno</span>

        </h2>

        <div className="cards">

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

              <li>✓ Colazione</li>
              <li>✓ Spiaggia</li>
              <li>✓ Parcheggio</li>

            </ul>

            <Link
              to="/prezzi"
              className="hero-btn"
            >
              Vedi Prezzi
            </Link>

          </div>

          <div className="card featured">

            <div className="card-top">

              <h3>
                MEZZA PENSIONE
              </h3>

              <p>

                con BEVANDE
                INCLUSE

              </p>

            </div>

            <ul>

              <li>✓ Colazione</li>
              <li>✓ Cena</li>
              <li>✓ Spiaggia</li>
              <li>✓ Parcheggio</li>

            </ul>

            <Link
              to="/prezzi"
              className="hero-btn"
            >
              Vedi Prezzi
            </Link>

          </div>

          <div className="card">

            <div className="card-top">

              <h3>
                PENSIONE COMPLETA
              </h3>

              <p>

                con BEVANDE
                INCLUSE

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
              to="/prezzi"
              className="hero-btn"
            >
              Vedi Prezzi
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Camere