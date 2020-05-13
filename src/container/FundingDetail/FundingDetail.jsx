import React, { useState, useEffect, useContext } from 'react';

import FundingDetailMain from '@/container/FundingDetail/FundingDetailMain';
import FundingDetailStory from '@/container/FundingDetail/FundingDetailStory';
import FundingDetailCommunity from '@/container/FundingDetail/FundingDetailCommunity';
import FundingDetailInfo from '@/container/FundingDetail/FundingDetailInfo';

import Footer from '@/components/Footer';

import HABContext from '@/context/headerAndBottom';
import FDTabContext from '@/context/tab';
import BSContext from '@/context/bottomSheet';
import itemContext from '@/context/item';

import FundingButton from '@/components/Funding/FundingButton';

import { fDAxios } from '@/lib/api';

import { Redirect, useHistory } from 'react-router-dom';

const FundingDetail = ({ match }) => {
  const [data, setData] = useState([]);
  const { action } = useContext(HABContext);
  const FDTab = useContext(FDTabContext);
  const BS = useContext(BSContext);
  const ITEMCONTEXT = useContext(itemContext);
  const history = useHistory();

  useEffect(() => {
    action.setBottomType('false');
    action.setHeaderType('back');
    BS.action.setKindOfBS('funding');
    return () => {
      BS.action.setKindOfBS('login');
    };
  }, []);

  useEffect(() => {
    async function axios() {
      const ans = await fDAxios({ pid: match.params.id });
      if (ans.data.statusCode == 200) {
        setData([ans.data.ans]);
        ITEMCONTEXT.action.setItems(ans.data.ans.rewardList);
        ITEMCONTEXT.action.setItemId(match.params.id);
      } else {
        history.push('/err');
      }
    }
    axios();
  }, []);

  return (
    data.length == 1 && (
      <div className="home_body_nobn">
        <FundingDetailMain value={data[0]} />
        <div className="fd_sub_body">
          {FDTab.state.fundingTab === 'story' && (
            <FundingDetailStory
              maker={data[0].maker}
              item={data[0].rewardList}
            />
          )}
          {/* {FDTab.state.fundingTab === 'community' && <FundingDetailCommunity />} */}
          {FDTab.state.fundingTab === 'info' && <FundingDetailInfo />}
        </div>
        <div
          className={
            FDTab.state.fundingTab === 'story' ? `fd_story_footer` : undefined
          }
        >
          <Footer />
        </div>
        {FDTab.state.fundingTab === 'story' && <FundingButton />}
      </div>
    )
  );
};
export default FundingDetail;
