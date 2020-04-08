import React, { createContext, useState } from 'react';

const AccountContext = createContext({
  state: {
    follower: 0,
    following: 0,
    isFollow: false
  },
  action: {
    setFollower: () => {},
    setFollowing: () => {},
    setIsFollow: () => {}
  }
});

const { Consumer: AccountConsumer } = AccountContext;

const AccountProvider = ({ children }) => {
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const [isFollow, setIsFollow] = useState(false);

  const value = {
    state: { follower, following, isFollow },
    action: { setFollower, setFollowing, setIsFollow }
  };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export { AccountProvider, AccountConsumer };

export default AccountContext;
