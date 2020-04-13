import React, { createContext, useState } from 'react';

const ItemContext = createContext({
  state: {
    items: [],
    selectItem: '',
  },
  action: {
    setItems: () => {},
    setSelectItem: () => {},
  },
});

const { Consumer: ItemConsumer } = ItemContext;

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [selectItem, setSelectItem] = useState('');

  const value = {
    state: { items, selectItem },
    action: { setItems, setSelectItem },
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

export { ItemProvider, ItemConsumer };

export default ItemContext;
