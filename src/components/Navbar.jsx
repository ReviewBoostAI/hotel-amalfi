import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false)

  return (

    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >

        <small>
          HOTEL
        </small>

        <h2>
          AMALFI
          <span className="stars">
            ★★★
          </span>
        </h2>

        <div className="city">
          JESOLO VENEZIA
        </div>

      </Link>

      {/* DESKTOP */}

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/hotel">
          Hotel
        </Link>

        <Link to="/camere">
          Camere
        </Link>

        <Link to="/ristomusicbar">
          RistoMusicBar
        </Link>

        <Link to="/prezzi">
          Prezzi
        </Link>

        <Link to="/arrivare">
          Arrivare
        </Link>

      </div>

      <Link
        to="/?scroll=preventivo"
        className="nav-book-btn"
      >
        Prenota
      </Link>

      {/* MOBILE HAMBURGER */}

      <button
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </button>

      <div
        className={
          menuOpen
            ? 'mobile-menu active'
            : 'mobile-menu'
        }
      >

        <Link
          to="/"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Home
        </Link>

        <Link
          to="/hotel"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Hotel
        </Link>

        <Link
          to="/camere"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Camere
        </Link>

        <Link
          to="/ristomusicbar"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          RistoMusicBar
        </Link>

        <Link
          to="/prezzi"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Prezzi
        </Link>

        <Link
          to="/arrivare"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Arrivare
        </Link>

        <Link
          to="/?scroll=preventivo"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Prenota
        </Link>

      </div>

    </nav>

  )

}

export default Navbar