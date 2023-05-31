import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Context } from './context/Context';
import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'cartItems';

function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });
  const data = {
    cart,
    setCart,
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);
  return (
    <Context.Provider value={data}>
      <div className="container flex flex-col h-screen items-center text-white">
        <Header />
        <div className="content container flex flex-grow items-center justify-center ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
