import { Link } from 'react-router-dom'

function Navbar() {

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

    </nav>

  )

}

export default Navbar