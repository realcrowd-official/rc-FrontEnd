import React, { useState, useEffect } from 'react';
// import FeedCardView from '@/components/FeedCardView';
import UserCommunity from '@/components/Profile/UserCommunity';
import { mPCAxios } from '@/lib/api';

const CommunityList = () => {
  const [start, setStart] = useState(0);
  const [cArray, setCArray] = useState([]);

  useEffect(() => {
    async function Axios() {
      const answer = await mPCAxios(start);
      if (answer.data.statusCode === 200) {
        answer.data.list.map((Data) => {
          setCArray((cArray) => [...cArray, Data]);
        });
      }
    }
    Axios();
  }, []);

  return (
    <div>
      {cArray.map((Data) => {
        return <UserCommunity value={Data} />;
      })}
    </div>
  );
};

export default CommunityList;
