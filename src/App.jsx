import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import {cre}
import Second from './pages/Second'
import Third from './pages/Third'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/second' element={<Second/>}/>
        <Route path='/third' element={<Third/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
