import React, { useState, useContext, useEffect } from 'react';
import FundingCommunityPost from '@/components/Funding/FundingCommunityPost';
import CommunityPostNotice from '@/components/Post/CommunityPostNotice';
import WriteCommunityPost from '@/components/Post/WriteCommunityPost';
import AuthContext from '@/context/auth';

import { getCommentPid } from '@/lib/api';

const FundingDetailComunity = (props) => {
  const [offset, setOffset] = useState(0);
  const [postData, setPostData] = useState([]);
  const AUTH = useContext(AuthContext);
  useEffect(() => {
    async function axiosFun() {
      const ans = await getCommentPid({ pid: props.pid, start: offset });
      if (ans.data.statusCode == 200) {
        ans.data.data.length == 0 ||
          ans.data.data.map((Data) => {
            setPostData((postData) => [...postData, Data]);
          });

        ans.data.data.length == 10 && setOffset(offset + 10);
      } else {
        alert('에러발생');
        window.location.reload();
      }
    }
    axiosFun();
  }, []);
  return (
    <div>
      {AUTH.state.isLogin ? (
        <WriteCommunityPost pid={props.pid} />
      ) : (
        <CommunityPostNotice />
      )}
      {postData.map((Data) => {
        return <FundingCommunityPost value={Data} />;
      })}
    </div>
  );
};

export default FundingDetailComunity;
