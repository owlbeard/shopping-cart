import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../assets/hero.webp';
import { motion as m } from 'framer-motion';

export default function Home() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="container flex xl:flex-row flex-col items-center justify-center rounded-xl shadow-the my-8"
    >
      <div className="container flex flex-col justify-center items-center gap-4 p-3">
        <h3 className="sm:text-3xl text-xl">Save Your Time!</h3>
        <p className="sm:text-xl text-lg">
          Housework becomes easier thanks to small appliances. When you use
          small electrical appliances, you get less tired and spend less time.
          Each of the small household appliances is very necessary in its own
          category to complete household chores in a more practical way. There
          are many small household appliances designed by brands for this
          purpose. With its wide product range, SmolPliance enables you to have
          the product you want in a short time.
        </p>
        <Link to="/shop">
          <button className="p-2 rounded-full bg-grad hover:scale-110 transition-transform">
            Start Shopping
          </button>
        </Link>
      </div>
      <img className="container rounded-xl p-2" src={Hero} alt="hero" />
    </m.div>
  );
}
