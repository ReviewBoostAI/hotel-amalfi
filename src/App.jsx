import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Hotel from './pages/Hotel'
import Camere from './pages/Camere'
import RistoMusicBar from './pages/RistoMusicBar'
import Prezzi from './pages/Prezzi'
import Arrivare from './pages/Arrivare'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/hotel"
          element={<Hotel />}
        />

        <Route
          path="/camere"
          element={<Camere />}
        />

        <Route
          path="/ristomusicbar"
          element={<RistoMusicBar />}
        />

        <Route
          path="/prezzi"
          element={<Prezzi />}
        />

        <Route
          path="/arrivare"
          element={<Arrivare />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App