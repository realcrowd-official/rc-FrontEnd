import React, { createContext, useState } from 'react';

const ItemContext = createContext({
  state: {
    items: [],
    selectItem: '',
    itemId: '',
  },
  action: {
    setItems: () => {},
    setSelectItem: () => {},
    setItemId: () => {},
  },
});

const { Consumer: ItemConsumer } = ItemContext;

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [selectItem, setSelectItem] = useState('');
  const [itemId, setItemId] = useState('');

  const value = {
    state: { items, selectItem, itemId },
    action: { setItems, setSelectItem, setItemId },
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

export { ItemProvider, ItemConsumer };

export default ItemContext;
