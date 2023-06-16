import React, { useState } from 'react';
import { motion as m } from 'framer-motion';
import uniqid from 'uniqid';
import { Context, useContext } from '../context/Context';
import items from '../data/items.json';

const itemImages = Object.values(
  import.meta.glob('../assets/items/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

for (let i = 0; i < items.length; i++) {
  items[i].src = itemImages[i];
}

export default function Shop() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="container grid grid-cols-responsive gap-10 my-8"
    >
      {items.map((item) => {
        return (
          <ShopItem
            key={uniqid()}
            src={item.src}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </m.div>
  );
}

function ShopItem({ src, name, price }) {
  const { cart, setCart } = useContext(Context);
  const [state, setState] = useState({ count: 1, price: price });
  const subtract = () => {
    if (state.count > 1) {
      setState((prevState) => {
        return {
          ...prevState,
          count: prevState.count - 1,
          price: ((state.count - 1) * price).toFixed(2),
        };
      });
    }
  };
  const add = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        price: ((state.count + 1) * price).toFixed(2),
      };
    });
  };
  const addToCart = () => {
    let item = {
      name: name,
      src: src,
      price: price,
      count: state.count,
    };
    if (cart.filter((e) => e.name === name).length > 0) {
      const newCart = cart.map((obj) => {
        if (obj.name === name) {
          return { ...obj, count: obj.count + state.count };
        }
        return obj;
      });
      setCart(newCart);
    } else setCart([...cart, item]);
  };
  return (
    <div className="container flex flex-col p-4 justify-center items-center gap-2 rounded-xl shadow-the">
      <img className="rounded-xl h-48" src={src} alt={name} />
      <p className="item-name">{name}</p>
      <p className="item-price">{`$${state.price}`}</p>
      <div className="flex items-center gap-8">
        <button
          className="p-2 rounded-fifty shadow-math bg-white text-black hover:scale-110 active:scale-90 transition-transform"
          onClick={subtract}
        >
          -
        </button>
        {state.count}
        <button
          className="p-2 rounded-fifty shadow-math bg-white text-black hover:scale-110 active:scale-90 transition-transform"
          onClick={add}
        >
          +
        </button>
      </div>
      <button
        className="p-2 rounded-full bg-grad hover:scale-110 transition-transform active:scale-90"
        onClick={addToCart}
      >
        Add To Cart
      </button>
    </div>
  );
}
