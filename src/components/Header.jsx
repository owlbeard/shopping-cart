import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../assets/cart.svg';
import Bars from '../assets/bars.png';
import Checkout from './Checkout';
import { motion as m } from 'framer-motion';
import { Context, useContext } from '../context/Context';
import { itemCount, priceCount } from '../utilities/counters';

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [nav, setNav] = useState(false);
  const { cart } = useContext(Context);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const checkout = function () {
    setClicked(true);
  };
  const exit = function () {
    setClicked(false);
  };
  const open = function () {
    setNav(!nav);
  };
  return (
    <div className="container flex justify-between items-center pt-4">
      <Link to="/">
        <h1 className="p-2 lg:text-6xl sm:text-4xl text-2xl">SmolPliance</h1>
      </Link>
      {windowWidth >= 768 ? (
        <nav className="container flex justify-end items-center gap-10 text-xl ">
          <NavLink
            to="/"
            className="p-2 border-b-2 border-b-transparent hover:border-b-white hover:-translate-y-1 hover:scale-110 transition-transform rounded-xl"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="p-2 border-b-2 border-b-transparent hover:border-b-white hover:-translate-y-1 hover:scale-110 transition-transform rounded-xl"
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className="p-2 border-b-2 border-b-transparent hover:border-b-white hover:-translate-y-1 hover:scale-110 transition-transform rounded-xl"
          >
            Contact
          </NavLink>
          <button
            className="relative hover:scale-110 transition-transform"
            onClick={checkout}
          >
            <img
              id="cart-image"
              src={Icon}
              alt="shopping-cart"
              className="white w-12"
              onClick={checkout}
            />
            <div
              className="bg-grad rounded-fifty w-7 absolute top-6 left-6"
              onClick={checkout}
            >
              {itemCount(cart)}
            </div>
          </button>
        </nav>
      ) : !nav ? (
        <nav className="container flex justify-end items-center gap-4 text-xl">
          <button
            className="relative hover:scale-110 transition-transform"
            onClick={checkout}
          >
            <img
              id="cart-image"
              src={Icon}
              alt="shopping-cart"
              className="white w-12"
              onClick={checkout}
            />
            <div
              className="bg-grad rounded-fifty w-7 absolute top-6 left-6"
              onClick={checkout}
            >
              {itemCount(cart)}
            </div>
          </button>
          <button onClick={open}>
            <img className="w-12" src={Bars} alt="navbar" />
          </button>
        </nav>
      ) : (
        <nav
          animate={{ x: 0 }}
          initial={{ x: '200%' }}
          transition={{ duration: 0.5 }}
          className="container flex justify-end items-center gap-4 text-xl relative"
        >
          <button
            className="relative hover:scale-110 transition-transform"
            onClick={checkout}
          >
            <img
              id="cart-image"
              src={Icon}
              alt="shopping-cart"
              className="white w-12"
              onClick={checkout}
            />
            <div
              className="bg-grad rounded-fifty w-7 absolute top-6 left-6"
              onClick={checkout}
            >
              {itemCount(cart)}
            </div>
          </button>
          <button onClick={open}>
            <img className="w-12" src={Bars} alt="navbar" />
          </button>
          <m.div
            animate={{ x: 0 }}
            initial={{ x: '200%' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 justify-start items-end fixed top-0 right-0 h-screen w-52 bg-grad z-10 pr-4 pt-4"
          >
            <div className="flex justify-end items-center w-full ">
              <button onClick={open}>
                <img className="w-12" src={Bars} alt="navbar" />
              </button>
            </div>
            <NavLink
              to="/"
              className="p-2 active:scale-110 transition-transform rounded-xl"
              onClick={open}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="p-2 active:scale-110 transition-transform rounded-xl"
              onClick={open}
            >
              Shop
            </NavLink>
            <NavLink
              to="/contact"
              className="p-2 active:scale-110 transition-transform rounded-xl"
              onClick={open}
            >
              Contact
            </NavLink>
          </m.div>
        </nav>
      )}
      {clicked ? (
        <m.div
          animate={{ x: 0 }}
          initial={{ x: '200%' }}
          transition={{ duration: 0.5 }}
          className="sm:w-96 w-full flex flex-col gap-4 justify-start items-end fixed top-0 right-0 pr-2 pt-12 h-screen bg-grad z-10 p-4"
        >
          <div className="flex flex-col justify-start items-center w-full relative gap-4">
            <h1 className="lg:text-3xl sm:text-1xl text-lg">
              Your Shopping Cart
            </h1>
            <button
              className="fixed right-2 top-1 p-1 rounded-fifty shadow-math bg-white text-black hover:scale-110 transition-transform"
              onClick={exit}
            >
              X
            </button>
            {cart.length > 0 ? (
              <Checkout />
            ) : (
              <h3 className="text-center">Your cart is empty :(</h3>
            )}
            <h2>Total Price: {`$${priceCount(cart)}`}</h2>
            <button className="p-2 rounded-full bg-grad hover:scale-110 transition-transform">
              Proceed to Checkout
            </button>
          </div>
        </m.div>
      ) : null}
    </div>
  );
}
