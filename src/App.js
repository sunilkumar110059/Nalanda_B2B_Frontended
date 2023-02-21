import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAV } from './Constant/RoutePath/RoutePathIndex';
import UiPatternIndex from './UiPattern/UiPatternIndex';

import NavSideBarIndex from './Constant/NavSideBar/NavSideBarIndex';
import HeaderIndex from './Constant/Header/HeaderIndex';


import TopicIndex from './Components/Topic/TopicIndex';
import TopicDetailIndex from './Components/TopicDetail/TopicDetailIndex';

function App() {
  return (
    <Fragment>
      <div id="main-container">
       <NavSideBarIndex />
        <div id="content-wrapper">
          <HeaderIndex />
          <Routes>
            <Route path={ROUTE_NAV.TOPIC_PATH} element={<TopicIndex />} />
            <Route path={ROUTE_NAV.TOPIC_DETAIL_PATH} element={<TopicDetailIndex />} />
            <Route path={ROUTE_NAV.UI_PATTERN_PATH} element={<UiPatternIndex />} />
          </Routes>
        </div>
      </div>
    
    </Fragment>
  );
}

export default App;
