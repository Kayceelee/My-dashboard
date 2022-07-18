import React from 'react';
import './Sidebar.css';
import { MdLineStyle, MdTimeline, MdTrendingUp, MdPerson, MdProductionQuantityLimits, MdMonetizationOn, MdReport
,MdMail,MdFeedback, MdMessage, MdManageAccounts, MdReportProblem } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
 <div className="sidebar">
     <div className="sidebarWrapper">
     <div className="sidebatMenu">
             <h3 className="sidebarTitle">Quick Menu</h3>
             <ul className="sidebarList">
                 <li className="sidebarListItem active">
                     <MdLineStyle  className='sidebarIcon'/>
                     <Link to='/home'>home</Link>
                 </li>
                 <li className="sidebarListItem">
                     <MdTimeline  className='sidebarIcon'/>
                     Analaytics
                 </li>
                 <li className="sidebarListItem">
                     <MdTrendingUp  className='sidebarIcon'/>
                     Sales
                 </li>
             </ul>
         </div>
         <div className="sidebatMenu">
             <h3 className="sidebarTitle">Dashboard</h3>
             <ul className="sidebarList">
                 <li className="sidebarListItem">
                     <MdPerson className='sidebarIcon'/>
                     <Link to='/users'>users</Link>
                 </li>
                 <li className="sidebarListItem">
                     <MdProductionQuantityLimits  className='sidebarIcon'/>
                     Product
                 </li>
                 <li className="sidebarListItem">
                     <MdMonetizationOn  className='sidebarIcon'/>
                     Transaction
                 </li>
                 <li className="sidebarListItem">
                     <MdReport  className='sidebarIcon'/>
                     Report
                 </li>
             </ul>
         </div>
        
         <div className="sidebatMenu">
             <h3 className="sidebarTitle">Notification</h3>
             <ul className="sidebarList">
                 <li className="sidebarListItem">
                     <MdMail  className='sidebarIcon'/>
                     Mail
                 </li>
                 <li className="sidebarListItem">
                     <MdFeedback  className='sidebarIcon'/>
                     Feedback
                 </li>
                 <li className="sidebarListItem">
                     <MdMessage  className='sidebarIcon'/>
                     Message
                 </li>
             </ul>
         </div>
         <div className="sidebatMenu">
             <h3 className="sidebarTitle">Staff</h3>
             <ul className="sidebarList">
                 <li className="sidebarListItem">
                     <MdManageAccounts  className='sidebarIcon'/>
                     Manage
                 </li>
                 <li className="sidebarListItem">
                     <MdTimeline  className='sidebarIcon'/>
                     Analaytics
                 </li>
                 <li className="sidebarListItem">
                     <MdReportProblem  className='sidebarIcon'/>
                     Report
                 </li>
                 
             </ul>
         </div>
     </div>
 </div>
  );
}

export default Sidebar;
