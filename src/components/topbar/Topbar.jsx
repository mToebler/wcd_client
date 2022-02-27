import React from "react";
import "./topbar.css";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import MessageIcon from "@material-ui/icons/AnnouncementOutlined";
import WaterIcon from "@material-ui/icons/Waves";
import WorldIcon from "@material-ui/icons/Language";
import GridIcon from "@material-ui/icons/GridOn";
import TimelineIcon from "@material-ui/icons/Timeline";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">WCD</span>
        </div>
        <div className="topright">
          <div className="topbarIcons">
            <div className="topbarIconContainer">
              <HomeIcon />
            </div>
            <div className="topbarIconContainer">
              <WaterIcon />
            </div>
            <div className="topbarIconContainer">
              <WorldIcon />
            </div>
            <div className="topbarIconContainer">
              <GridIcon />
            </div>
            <div className="topbarIconContainer">
              <TimelineIcon />
                 </div>
                 <div className="topbarIconContainer kosher">
                    <MessageIcon />
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
