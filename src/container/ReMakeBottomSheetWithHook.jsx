import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    showBlockLayer: PropTypes.bool,
    visible: PropTypes.bool,
    className: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    appendCancelBtn: PropTypes.bool,
    customLayout: PropTypes.string
  }
  
  const defaultProps = {
    showBlockLayer: true,
    visible: true,
    className: '',
    appendCancelBtn: true
  }

const ReMakeBottomSheetWithHook = props => {

    const [isShow, setIsShow] = useState(false);
    const [animationState, setAnimationState] = useState('leave');

    useEffect(() => { 
        props.visible ? enter() : leave();
    },[props.visible])

    // const hookSCU = React.memo((props, state) => {
        
    // })

    

    const enter = () => {
        setIsShow(true);
        setTimeout(() => {
          document.getElementsByTagName('html')[0].style.overflow = 'hidden'
          setAnimationState('enter')
        }, 50)
      }
    
    const leave = () => {
        setAnimationState('leave')
        setTimeout(onClose.bind(this), 500)
      }
    
    const onClose = () => {
        if (animationState === 'leave') {
          document.getElementsByTagName('html')[0].style.overflow = 'auto'
          setIsShow('false')
        }
    
        props.onCloseFinishAnimation && props.onCloseFinishAnimation()
      }

      const layer = props.showBlockLayer ? <div className='bottom-sheet-block-layer' onClick={props.onClose} /> : null
    return (
        <div className={`bottom-sheet-wrapper ${props.className || ''} ${animationState || ''} ${isShow ? 'shown' : 'hide'}`}>
        {layer}
        {props.customLayout}
        <div className='bottom-sheet'>
          {props.children}
          {props.list && props.list.map((item, idx) => {
             return (<button key={idx} className='bottom-sheet-item' onClick={item.handler}>
                       {item.title}
                     </button>)
           })}
          {props.appendCancelBtn && (() => {
             return (<button className='bottom-sheet-item cancel' onClick={props.onClose}>
                       cancel
                     </button>)
           })()}
        </div>
      </div>
    );
};

ReMakeBottomSheetWithHook.propTypes = propTypes;
ReMakeBottomSheetWithHook.defaultProps = defaultProps;

export default ReMakeBottomSheetWithHook;