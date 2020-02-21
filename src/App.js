import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import {
  META_TITLE,
  META_DESCRIPTION,
  META_KEYWORDS,
  META_BASE_URL,
  FB_APP_ID,
  TWITTER_USERNAME
} from './global/globalVar';
import { FAVICON_16, FAVICON_32, APPLE_TOUCH_ICON } from './global/img/favicon';

import { TabProvider } from './context/tab';
import { HABProvider } from './context/headerAndBottom';
import { AuthProvider } from './context/auth';
import { BSProvider } from './context/bottomSheet';

import ScrollToTop from './components/misc/ScrollToTop';
import PrivateRouter from './components/common/PrivateRouter';

import ProjectHome from './container/Project/ProjectHome';
import BottomNav from './container/BottomNav';
import FeedHome from './container/Feed/FeedHome';
import Header from './container/Header';
import MyPageHome from './container/Profile/MyPageHome';
import FundingDetail from './container/FundingDetail/FundingDetail';
import SignUp from './container/Account/SignUp';
import SignIn from './container/Account/SignIn';

import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Helmet>
        <title>{META_TITLE}</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta property="fb:admins" content={FB_APP_ID} />
        <meta property="fb:app_id" content={FB_APP_ID} />
        <meta name="title" content={META_TITLE} />
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="keywords" content={META_KEYWORDS} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        {/* <meta property="og:image" content={IMG_STORE} /> */}
        <meta property="og:url" content={META_BASE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={META_BASE_URL} />
        <meta name="twitter:title" content={META_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:creator" content={`@${TWITTER_USERNAME}`} />
        {/* <meta name="twitter:image" content={IMG_STORE} /> */}
        {/* <meta name="twitter:image:src" content={IMG_STORE} /> */}
        <meta name="twitter:image:alt" content={META_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="canonical" href={META_BASE_URL} />
        <link rel="apple-touch-icon" sizes="180x180" href={APPLE_TOUCH_ICON} />
        <link rel="icon" type="image/png" sizes="32x32" href={FAVICON_32} />
        <link rel="icon" type="image/png" sizes="16x16" href={FAVICON_16} />
        <link rel="manifest" href="@/img/favicon/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0, viewport-fit=cover"
        />
      </Helmet>
      <AuthProvider>
        <HABProvider>
          <BSProvider>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* <ScrollToTop /> */}
                <FeedHome />
              </Route>
              <Route
                path="/project"
                children={
                  <TabProvider>
                    {/* <ScrollToTop /> */}
                    <ProjectHome />
                  </TabProvider>
                }
              />
              <Route path="/profile">
                <MyPageHome />
              </Route>

              <Route
                path="/funding/detail/:id"
                children={
                  <TabProvider>
                    {/* <ScrollToTop /> */}
                    <FundingDetail />
                  </TabProvider>
                }
              />
              <Route path="/signUp" children={<SignUp />} />
              <Route path="/signIn" children={<SignIn />} />
              <Route path="*" component={Error} />
            </Switch>
            <BottomNav />
          </BSProvider>
        </HABProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
