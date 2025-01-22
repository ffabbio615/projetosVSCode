
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Menu from './components/menu/Menu.jsx';
import MenuAddItems from './components/menu/MenuAddItems.jsx';
import MenuEditItem from './components/menu/MenuEditItem.jsx';
import Delivery from './components/delivery/Delivery.jsx';
import AddItem from './components/delivery/AddItem.jsx';
import CapiwarasBag from './components/delivery/CapiwarasBag.jsx';
import CompletedOrder from './components/delivery/CompletedOrder.jsx';
import FooterMenu from './components/fixed/FooterMenu.jsx'

function App() {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/menu/add-items' element={<MenuAddItems/>} />
          <Route path='/menu/edit-item' element={<MenuEditItem/>} />
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
