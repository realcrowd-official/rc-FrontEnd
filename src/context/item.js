import React, { createContext, useState } from 'react';

const ItemContext = createContext({
  state: {
    items: []
  },
  action: {
    setItems: () => {}
  }
});

const { Consumer: ItemConsumer } = ItemContext;

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const value = {
    state: { items },
    action: { setItems }
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

export { ItemProvider, ItemConsumer };

export default ItemContext;
