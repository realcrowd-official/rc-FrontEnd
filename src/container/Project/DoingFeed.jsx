import React from 'react';
import ProjectCardView from '@/components/ProjectCardView';

const DoingFeed = (props) => {
  return (
    <div className="df_container">
      {props.value.map((Data) => {
        return <ProjectCardView value={Data} type={'doing'} />;
      })}
    </div>
  );
};

export default DoingFeed;
