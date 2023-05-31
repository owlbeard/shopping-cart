import React from 'react';
import { motion as m } from 'framer-motion';
import uniqid from 'uniqid';

const icons = Object.values(
  import.meta.glob('../assets/icons/*.{svg,png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

export default function Contact() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="container flex flex-col gap-4 items-center my-8"
    >
      <h1 className="text-center sm:text-4xl text-2xl">
        Contact Us On Social Media!
      </h1>
      <div className="container flex flex-wrap justify-center items-center gap-4">
        {icons.map((icon) => {
          return (
            <a
              href="https://www.youtube.com/watch?v=OjNpRbNdR7E"
              key={uniqid()}
            >
              <div className="p-4 shadow-the rounded-xl hover:scale-110 transition-transform">
                <img className="white h-24" src={icon} alt={icon} />
              </div>
            </a>
          );
        })}
      </div>
      <h1 className="text-center sm:text-3xl text-xl">Our Address:</h1>
      <p className="text-center sm:text-xl text-lg">
        52 High St, Shropshire/Bridgnorth, United Kingdom
      </p>
    </m.div>
  );
}
