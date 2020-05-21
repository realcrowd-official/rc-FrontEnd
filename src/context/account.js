import React, { createContext, useState } from 'react';

const AccountContext = createContext({
  state: {
    follower: 0,
    following: 0,
    isFollow: false,
    addr: [],
    selectAddr: [],
    addSelected: false,
  },
  action: {
    setFollower: () => {},
    setFollowing: () => {},
    setIsFollow: () => {},
    setAddr: () => {},
    setSelectAddr: () => {},
    setAddSelected: () => {},
  },
});

const { Consumer: AccountConsumer } = AccountContext;

const AccountProvider = ({ children }) => {
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const [isFollow, setIsFollow] = useState(false);
  const [addr, setAddr] = useState([]);
  const [selectAddr, setSelectAddr] = useState([]);
  const [addSelected, setAddSelected] = useState(false);

  const value = {
    state: { follower, following, isFollow, addr, selectAddr, addSelected },
    action: {
      setFollower,
      setFollowing,
      setIsFollow,
      setAddr,
      setSelectAddr,
      setAddSelected,
    },
  };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export { AccountProvider, AccountConsumer };

export default AccountContext;
