import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BSContext from '@/context/bottomSheet';
import HABContext from '@/context/headerAndBottom';
import AuthContext from '@/context/auth';

import { isLogin } from '@/lib/auth';

import {
  IC_TAB_FEED,
  IC_TAB_FEED_PRIMARY,
  IC_TAB_PROJECTS,
  IC_TAB_PROJECTS_PRIMARY,
  IC_TAB_PROFILE,
  IC_TAB_PROFILE_PRIMARY
} from '@/global/img/bottomNav.ts';

// import homeIcon from '@/img/BottomNav/ic-tab-feed-stroke-black.svg';
// import homeIconPrimary from '@/img/BottomNav/ic-tab-feed-stroke-primary.svg';
// import feedIcon from '@/img/BottomNav/ic-tab-projects-stroke-black.svg';
// import feedIconPrimary from '@/img/BottomNav/ic-tab-projects-stroke-primary.svg';
// import profileIcon from '@/img/BottomNav/ic-tab-profile-stroke-black.svg';
// import profileIconPrimary from '@/img/BottomNav/ic-tab-profile-stroke-primary.svg';

const BottomNav = () => {
  const habContext = useContext(HABContext);
  const BS = useContext(BSContext);
  const Auth = useContext(AuthContext);
  const toLogin = toPath => {
    BS.action.setBottomSheet(true);
    localStorage.setItem(
      'historyPath',
      JSON.stringify({
        path: toPath
      })
    );
  };
  
  useEffect(() => {
    isLogin()?Auth.action.setIsLogin(true) : Auth.action.setIsLogin(false)
  }, [isLogin()])
  return (
    <>
      {habContext.state.bottomType === 'true' ? (
        <div className="BottomNav_container max_container">
          <div className="BottomNav_wrapper">
            <Link
              to="/"
              className={
                'home_icon' +
                (habContext.state.path === 'home' ? ' current_path' : '')
              }
              onClick={() => habContext.action.setPath('home')}
            >
              <img
                src={
                  habContext.state.path === 'home'
                    ? IC_TAB_FEED_PRIMARY
                    : IC_TAB_FEED
                }
                alt="피드"
              />
              <p>피드</p>
            </Link>
            <Link
              to="/project"
              className={
                'feed_icon' +
                (habContext.state.path === 'project' ? ' current_path' : '')
              }
              onClick={() => habContext.action.setPath('project')}
            >
              <img
                src={
                  habContext.state.path === 'project'
                    ? IC_TAB_PROJECTS_PRIMARY
                    : IC_TAB_PROJECTS
                }
                alt="프로젝트"
              />
              <p>프로젝트</p>
            </Link>
            {Auth.state.isLogin ? (
              <Link
                to="/profile"
                className={
                  'profile_icon' +
                  (habContext.state.path === 'profile' ? ' current_path' : '')
                }
                onClick={() => habContext.action.setPath('profile')}
              >
                <img
                  src={
                    habContext.state.path === 'profile'
                      ? IC_TAB_PROFILE_PRIMARY
                      : IC_TAB_PROFILE
                  }
                  alt="프로필"
                />
                <p>프로필</p>
              </Link>
            ) : (
              <div className='profile_icon' onClick={() => toLogin('/profile')}>
                <img src={IC_TAB_PROFILE} alt='프로필'/>
                <p>프로필</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BottomNav;
