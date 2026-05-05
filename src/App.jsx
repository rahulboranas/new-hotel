import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      {/* min-h-[70vh] ka matlab hai screen ki minimum 70% vertical height */}
      <main className='min-h-[83vh]'>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App