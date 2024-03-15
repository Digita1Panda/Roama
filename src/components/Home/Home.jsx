import Search from "../left-nav/Search";
import Messages from "../left-nav/Messages";
import Scroll from "../Middle-Section/Scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import Post from "../PostModal/index";
import RightNav from "../right-nav/index";
import FriendList from "../FriendList/friendList";


// import React, { useEffect } from 'react';
// import { translateText } from './components/utils/api.js';
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <Search />
          <FriendList />
          <Messages />
        </div>
        <div className="col-lg-6">
          <Scroll />
        </div>
        <div className="col-lg-3">
          <RightNav />
          <Post />
        </div>
      </div>
    </div>
  );
}
