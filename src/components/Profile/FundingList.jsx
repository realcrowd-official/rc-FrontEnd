import React, { useState, useEffect } from 'react';
import ProjectCardView from '@/components/ProjectCardView';

import { mPFAxios } from '@/lib/api';

const FundingList = () => {
  const [start, setStart] = useState(0);
  const [list, setList] = useState([]);
  useEffect(() => {
    async function axios() {
      const ans = await mPFAxios({ start: start });
      await ans.data.listArray.map((Data) => {
        setList((list) => [...list, Data]);
      });
      ans.data.listArray.length == 10 && setStart(start + 10);
    }
    axios();
  }, []);
  return (
    <div>
      {list.map((Data) => {
        return <ProjectCardView value={Data} type={'doing'} />;
      })}
    </div>
  );
};

export default FundingList;
