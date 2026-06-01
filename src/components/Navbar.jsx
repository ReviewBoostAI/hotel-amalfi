import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false)

  const {
    t,
    i18n
  } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setMenuOpen(false)
  }

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
          {t('home')}
        </Link>

        <Link to="/hotel">
          {t('hotel')}
        </Link>

        <Link to="/camere">
          {t('camere')}
        </Link>

        <Link to="/ristomusicbar">
          {t('risto')}
        </Link>

        <Link to="/prezzi">
          {t('prezzi')}
        </Link>

        <Link to="/arrivare">
          {t('arrivare')}
        </Link>

      </div>

      {/* DESKTOP LANG */}

      <div className="lang-switch">

        <button
          onClick={() =>
            changeLanguage('it')
          }
        >
          IT
        </button>

        <button
          onClick={() =>
            changeLanguage('en')
          }
        >
          EN
        </button>

        <button
          onClick={() =>
            changeLanguage('de')
          }
        >
          DE
        </button>

      </div>

      {/* PRENOTA */}

      <Link
        to="/?scroll=preventivo"
        className="nav-book-btn"
      >
        {t('prenota')}
      </Link>

      {/* HAMBURGER */}

      <button
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </button>

      {/* MOBILE MENU */}

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
          {t('home')}
        </Link>

        <Link
          to="/hotel"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          {t('hotel')}
        </Link>

        <Link
          to="/camere"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          {t('camere')}
        </Link>

        <Link
          to="/ristomusicbar"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          {t('risto')}
        </Link>

        <Link
          to="/prezzi"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          {t('prezzi')}
        </Link>

        <Link
          to="/arrivare"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          {t('arrivare')}
        </Link>

        <Link
          to="/?scroll=preventivo"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          {t('prenota')}
        </Link>

        <div className="mobile-lang">

          <span>
            Language
          </span>

          <div className="mobile-lang-buttons">

            <button
              onClick={() =>
                changeLanguage('it')
              }
            >
              IT
            </button>

            <button
              onClick={() =>
                changeLanguage('en')
              }
            >
              EN
            </button>

            <button
              onClick={() =>
                changeLanguage('de')
              }
            >
              DE
            </button>

          </div>

        </div>

      </div>

    </nav>

  )

}

export default Navbar