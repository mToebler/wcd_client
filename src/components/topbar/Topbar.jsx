import React from "react";
import "./topbar.css";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import MessageIcon from "@material-ui/icons/AnnouncementOutlined";
import WaterIcon from "@material-ui/icons/Waves";
import WorldIcon from "@material-ui/icons/Language";
import GridIcon from "@material-ui/icons/GridOn";
import TimelineIcon from "@material-ui/icons/Timeline";
import PersonIcon from "@material-ui/icons/PersonOutlined";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo"><a href="/">WCD</a></span>
        </div>
        <div className="topright">
          <div className="topbarIcons">
            <div className="topbarIconContainer">
              <PersonIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
