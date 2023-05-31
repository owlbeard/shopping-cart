export function itemCount(array) {
  let counter = 0;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      counter += array[i].count;
    }
  }
  return counter;
}

export function priceCount(array) {
  let counter = 0;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      counter += Number(array[i].price * array[i].count);
    }
  }
  const counterFixed = counter.toFixed(2);
  return counterFixed;
}
