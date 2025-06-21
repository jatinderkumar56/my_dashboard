import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <Link to='/users' style={{textDecoration:'none' , color:'inherit'}}>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          </Link>
            <Link to='/products' style={{textDecoration:'none' , color:'inherit'}}>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
           </Link>
          
            <Link to='/users' style={{textDecoration:'none' , color:'inherit'}}>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          </Link>
           <Link to='/user/:userId' style={{textDecoration:'none' , color:'inherit'}}>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
       </Link>
          </div>
      </div>
    </div>
  );
}
