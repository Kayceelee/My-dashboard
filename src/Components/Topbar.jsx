import React from 'react';
import "./Topbar.css"
import { MdNotificationsNone , MdLanguage , MdSettings } from "react-icons/md";



const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>KayCee</span>
            </div>
            <div className="topRight">
                <div className="topbarIconsContainer">
                    <MdNotificationsNone/>
                 <div className="topIconBadge">2</div>
            </div>
            <div className="topbarIconsContainer">
                    <MdLanguage/>
                 <div className="topIconBadge">2</div>
            </div>
            <div className="topbarIconsContainer">
                    <MdSettings/>
            </div>
            <img src="image/image.jpg" alt="" className="topAvatar" />
        </div>
    </div>
    </div>
  );
}

export default Topbar;
