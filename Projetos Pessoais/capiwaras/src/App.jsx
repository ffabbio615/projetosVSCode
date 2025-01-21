
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import Delivery from './components/Delivery.jsx';
import AddItem from './components/AddItem.jsx';
import CapiwarasBag from './components/CapiwarasBag.jsx';
import FooterMenu from './components/fixed/FooterMenu.jsx'
import CompletedOrder from './components/CompletedOrder.jsx';

function App() {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/delivery' element={<Delivery/>} />
          <Route path='/delivery/add-item' element={<AddItem/>} />
          <Route path='/delivery/add-item/capiwaras-bag' element={<CapiwarasBag/>} />
          <Route path='/delivery/add-item/capiwaras-bag/completed-order' element={<CompletedOrder/>} />
        </Routes>
        <FooterMenu />
      </BrowserRouter>
    </>
  )
}

export default App
