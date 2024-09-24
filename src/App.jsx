import './App.css'
import Aboutpage from './componets/aboutpage'
import Cardskerala from './componets/cardskerala'
import Header from './componets/header'
import Homepage from './componets/homepage'
import Kochi from './componets/kochi'
import Slider from './componets/slider'
import { Routes,Route } from 'react-router-dom'
import { lazy,Suspense } from 'react'
import Spinner from 'react-bootstrap/Spinner';

function App() {
          const Hpage = lazy(()=>import('./componets/homepage'))
          const Apage = lazy(()=>import('./componets/aboutpage'))
  return (
    <>
      <Header/>
      <section>
      <Suspense fallback={<div> <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>}/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path='/koc' element={<Kochi/>}/>
       </Routes> 
      </section>
            
    </>
  )
}

export default App
