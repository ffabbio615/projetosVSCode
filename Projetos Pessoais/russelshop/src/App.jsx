import './App.scss';
import ProductSection from './components/home/ProductSection';
import PromoSection from './components/home/PromoSection';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/product/ProductDetails.jsx';

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      picture: 'commonMouse.jpg',
      title: 'Mouse Gamer Sem Fio Logitech G Pro X Superlight 2 com Lightspeed, 32000 DPI, Sensor Hero 2, com Bateria Recarregável, Preto',
      originalValue: 1529.48,
      promoValue: 814.90,
      isPromo: true,
      fulfilledBy: 'Logitech Brasil',
      inStock: true,
    },
    {
      id: 2,
      picture: 'transformerMouse.jpg',
      title: 'Mouse Gamer Sem Fio Logitech G502 LIGHTSPEED RGB LIGHTSYNC, Ajuste Peso, 11 Botões, Recarregável, Compatível POWERPLAY',
      originalValue: 705.87,
      promoValue: 499.99,
      isPromo: true,
      fulfilledBy: 'Logitech Brasil',
      inStock: false,
    },
    {
      id: 3,
      picture: 'simpleHeadset.jpg',
      title: 'Headset Gamer Sem Fio Logitech G Astro A30, Drivers 40mm, Bluetooth, PS e PC, Azul Escuro',
      originalValue: 1999.99,
      promoValue: 1499.99,
      isPromo: true,
      fulfilledBy: 'Logitech Brasil',
      inStock: true,
    },
    {
      id: 4,
      picture: 'speakerSystem.jpg',
      title: 'Caixa de som Logitech G560 com RGB LIGHTSYNC, Sistema 2.1 e Conexão Bluetooth, USB ou 3,5mm',
      originalValue: 1777.77,
      promoValue: 999.90,
      isPromo: true,
      fulfilledBy: 'Logitech Brasil',
      inStock: false,
    },
    {
      id: 5,
      picture: 'videoCardRX6600.jpg',
      title: 'Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6',
      originalValue: 2267.47,
      promoValue: 1349.99,
      isPromo: false,
      fulfilledBy: 'KaBuM!',
      inStock: true,
    },
    {
      id: 6,
      picture: 'videoCardRX6750.jpg',
      title: 'Placa de Vídeo RX 6750XT Gaming XFX Graphics Card AMD Radeon, 12GB GDDR6, Ray tracing, Fidelity FX',
      originalValue: 4229.29,
      promoValue: 2999.99,
      isPromo: false,
      fulfilledBy: 'MegaMamute',
      inStock: true,
    },
    {
      id: 7,
      picture: 'videoCardRX4060.jpg',
      title: 'Placa de Vídeo RTX 4060 AERO OC Gigabyte NVIDIA GeForce, 8GB GDDR6, RGB, DLSS, Ray Tracing, Branco',
      originalValue: 3599.99,
      promoValue: 2499.99,
      isPromo: false,
      fulfilledBy: 'Pichau',
      inStock: true,
    },
    {
      id: 8,
      picture: 'videoCardGTX1650.jpg',
      title: 'Placa de Vídeo GTX 1650 D6 Ventus XS OCV3 MSI NVIDIA GeForce, 4GB GDDR6, G- Sync',
      originalValue: 947.36,
      promoValue: 799.99,
      isPromo: false,
      fulfilledBy: 'MegaMamute',
      inStock: true,
    },
    {
      id: 9,
      picture: 'videoCardGigRX6600.jpg',
      title: 'Placa de Vídeo Gigabyte Radeon RX 6600 EAGLE AMD, 8GB GDDR6, Preto',
      originalValue: 2477.94,
      promoValue: 1399.99,
      isPromo: false,
      fulfilledBy: 'KaBuM!',
      inStock: true,
    },
    

    // {
    //   id: 1,
    //   picture: '',
    //   title: '',
    //   originalValue: 1,
    //   promoValue: 1,
    //   isPromo: false,
    //   fulfilledBy: 'Logitech Brasil',
    //   inStock: true,
    // }
  ]);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <>
            <PromoSection products={products}/>
            <ProductSection products={products}/>
          </>}/>

          <Route path="/product/:id" element={<ProductDetails products={products}/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
