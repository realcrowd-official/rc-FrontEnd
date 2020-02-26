import React from 'react';
import ProjectCardView from '@/components/ProjectCardView';

const ReservateFeed = props => {
  return (
    <div>
      {props.value.length === 0 ? (
        <div className="not_show">
          <p>표시할 피드가 없습니다.</p>
        </div>
      ) : (
        props.value.map(Data => {
          return <ProjectCardView value={Data} type={'reservate'} />;
        })
      )}
    </div>
  );
};

export default ReservateFeed;
