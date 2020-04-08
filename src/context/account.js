import React, { createContext, useState } from 'react';

const AccountContext = createContext({
  state: {
    follower: 0,
    following: 0
  },
  action: {
    setFollower: () => {},
    setFollowing: () => {}
  }
});

const { Consumer: AccountConsumer } = AccountContext;

const AccountProvider = ({ children }) => {
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);

  const value = {
    state: { follower, following },
    action: { setFollower, setFollowing }
  };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export { AccountProvider, AccountConsumer };

export default AccountContext;
