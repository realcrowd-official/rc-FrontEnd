import React from 'react';
import ProjectCardView from '@/components/ProjectCardView';

const ReservateFeed = props => {
  return (
    <div>
      {props.value.map(Data => {
        return <ProjectCardView value={Data} type={'reservate'} />;
      })}
    </div>
  );
};

export default ReservateFeed;
