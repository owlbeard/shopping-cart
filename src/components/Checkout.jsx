import uniqid from 'uniqid';
import { Context, useContext } from '../context/Context';

export default function Checkout() {
  const { cart, setCart } = useContext(Context);
  const remove = (e) => {
    const value = e.target.getAttribute('data-name');
    const newCart = cart.filter((item) => item.name !== value);
    setCart(newCart);
  };
  return (
    <div
      id="checkout"
      className="h-1/3 min-h-cart overflow-auto p-4 flex flex-col gap-4"
    >
      {cart.length > 0 ? (
        <>
          {cart.map((item) => {
            return (
              <div
                className="flex flex-col gap-4 justify-center items-center shadow-the rounded-xl relative"
                key={uniqid()}
              >
                <div className="flex items-center gap-4">
                  <button
                    className="p-1 text-lg rounded-fifty absolute top-0 left-0"
                    data-name={item.name}
                    onClick={remove}
                  >
                    X
                  </button>
                  <img
                    className="rounded-xl h-36"
                    src={item.src}
                    alt={item.name}
                  />
                </div>
                <CartItem
                  key={uniqid()}
                  src={item.src}
                  name={item.name}
                  price={(item.price * item.count).toFixed(2)}
                  count={item.count}
                />
              </div>
            );
          })}
        </>
      ) : (
        <h3>Your cart is empty :(</h3>
      )}
    </div>
  );
}

function CartItem({ src, name, price, count }) {
  const { cart, setCart } = useContext(Context);
  const subtract = () => {
    if (count > 1) {
      const newCart = cart.map((obj) => {
        if (obj.name === name) {
          return { ...obj, count: obj.count - 1 };
        }
        return obj;
      });
      setCart(newCart);
    }
  };
  const add = () => {
    const newCart = cart.map((obj) => {
      if (obj.name === name) {
        return { ...obj, count: obj.count + 1 };
      }
      return obj;
    });
    setCart(newCart);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <p className="text-center text-ellipsis">{name}</p>
      <p>{`$${price}`}</p>
      <div className="flex gap-4">
        <button
          className="p-1 rounded-fifty shadow-math bg-white text-black hover:scale-110 transition-transform"
          onClick={subtract}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="p-1 rounded-fifty shadow-math bg-white text-black hover:scale-110 transition-transform"
          onClick={add}
        >
          +
        </button>
      </div>
    </div>
  );
}
