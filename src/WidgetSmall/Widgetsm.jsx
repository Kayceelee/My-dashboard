import React from 'react';
import './widgetsm.css';
import { FaEye } from "react-icons/fa";

const Widgetsm = () => {
  return (
   <div className="widgetsm">
     <h3 className="widgetsmTitle">New Join Members</h3>
     <ul className="widgetsmList">
       <li className="widgetsmListItem">
       <img src="image/img3.jpg" alt="" className='widgetsmImg'/>
       <div className="widgetsmUser">
         <span className="widgetsmUserName">Tobi Makinde</span>
         <span className="widgetsmUserTitle"> Software Engineer</span>
       </div>
       <button className="widgetsmButton">
         <FaEye className='widgetsmIcon'/>
         Display
       </button>
       </li>
       <li className="widgetsmListItem">
       <img src="image/img4.jpg" alt="" className='widgetsmImg'/>
       <div className="widgetsmUser">
         <span className="widgetsmUserName">Allen kayode</span>
         <span className="widgetsmUserTitle"> Software Engineer</span>
       </div>
       <button className="widgetsmButton">
         <FaEye className='widgetsmIcon'/>
         Display
       </button>
       </li>
       <li className="widgetsmListItem">
       <img src="image/img3.jpg" alt="" className='widgetsmImg'/>
       <div className="widgetsmUser">
         <span className="widgetsmUserName">Tobi Makinde</span>
         <span className="widgetsmUserTitle"> Software Engineer</span>
       </div>
       <button className="widgetsmButton">
         <FaEye className='widgetsmIcon'/>
         Display
       </button>
       </li>
       <li className="widgetsmListItem">
       <img src="image/img4.jpg" alt="" className='widgetsmImg'/>
       <div className="widgetsmUser">
         <span className="widgetsmUserName">Allen kayode</span>
         <span className="widgetsmUserTitle"> Software Engineer</span>
       </div>
       <button className="widgetsmButton">
         <FaEye className='widgetsmIcon'/>
         Display
       </button>
       </li>
       <li className="widgetsmListItem">
       <img src="image/img3.jpg" alt="" className='widgetsmImg'/>
       <div className="widgetsmUser">
         <span className="widgetsmUserName">Tobi Makinde</span>
         <span className="widgetsmUserTitle"> Software Engineer</span>
       </div>
       <button className="widgetsmButton">
         <FaEye className='widgetsmIcon'/>
         Display
       </button>
       </li>
     </ul>
   </div>
  );
}

export default Widgetsm;
