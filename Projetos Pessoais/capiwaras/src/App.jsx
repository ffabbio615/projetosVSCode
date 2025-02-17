
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import { MenuProvider } from './components/context/MenuContext.jsx';
import Menu from './components/menu/Menu.jsx';
import MenuAddItems from './components/menu/MenuAddItems.jsx';
import MenuEditItem from './components/menu/MenuEditItem.jsx';
import { DeliveryProvider } from './components/context/DeliveryContext.jsx';
import Delivery from './components/delivery/Delivery.jsx';
import AddItem from './components/delivery/AddItem.jsx';
import EditItemInBag from './components/delivery/EditItemInBag.jsx';
import CapiwarasBag from './components/delivery/CapiwarasBag.jsx';
import CompletedOrder from './components/delivery/CompletedOrder.jsx';
import FooterMenu from './components/fixed/FooterMenu.jsx'


function App() {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <>
    <MenuProvider>
      <DeliveryProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/menu' element={<Menu/>} />
              <Route path='/menu/add-items' element={<MenuAddItems/>} />
              <Route path='/menu/edit-item/:itemId' element={<MenuEditItem/>} />
              <Route path='/delivery' element={<Delivery/>} />
              <Route path='/delivery/add-item/:itemId' element={<AddItem/>} />
              <Route path='/delivery/edit-item/:ids' element={<EditItemInBag/>} />
              <Route path='/delivery/add-item/capiwaras-bag' element={<CapiwarasBag/>} />
              <Route path='/delivery/add-item/capiwaras-bag/completed-order' element={<CompletedOrder/>} />
            </Routes>
            <FooterMenu />
          </BrowserRouter>
        </DeliveryProvider>
    </MenuProvider>
    </>
  )
}

export default App
