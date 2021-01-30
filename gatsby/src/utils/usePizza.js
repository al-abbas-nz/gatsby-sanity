import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // 1. create state to hold order
  // got rid of this hook because we moved useState to the provider
  //   const [order, setOrder] = useState
  // now we access both our state and our updater function 'setOrder' via context
  const [order, setOrder] = useContext(OrderContext);

  // 2. make function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }

  // 3. make function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }

  // TODO
  // 4. send this data to a serverless function when they checkout

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
