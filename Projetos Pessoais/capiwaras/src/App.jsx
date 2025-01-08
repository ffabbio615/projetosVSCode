
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='menu' element={<Menu/>} />
          <Route path='delivery' element={<Delivery/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
