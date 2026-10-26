import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import './App.css'

function App() {
  return <>
    <header>

    </header>
    <main className="flex-1">

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:code" element={<CountryDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>



    </main>
    <Footer />
  </>
}

export default App
