import React, { useState } from 'react';

// create a order context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // we need to put state in here, and access it at a lower level
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
