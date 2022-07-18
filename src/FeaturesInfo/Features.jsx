import React from 'react';
import "./features.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Features = () => {
  return (
   <div className="features">
         <div className="featuresItem">
           <span className="featuresTitle">Revenue</span>
           <div className="featuresMoneyContainer">
               <span className="featuresMoney">$4,234</span>
               <span className="featuresMoneyRate">-2.5 <FaArrowDown className="featuresIcon Negative"/> </span>
           </div>
           <span className="featuresSub">Compare to last month</span>
       </div>
       <div className="featuresItem">
           <span className="featuresTitle">Sales</span>
           <div className="featuresMoneyContainer">
               <span className="featuresMoney">$3,415</span>
               <span className="featuresMoneyRate">-11.5 <FaArrowDown className="featuresIcon Negative"/> </span>
           </div>
           <span className="featuresSub">Compare to last month</span>
       </div>
       <div className="featuresItem">
           <span className="featuresTitle">Cost</span>
           <div className="featuresMoneyContainer">
               <span className="featuresMoney">$2,234</span>
               <span className="featuresMoneyRate">+4.5 <FaArrowUp className="featuresIcon Positive"/> </span>
           </div>
           <span className="featuresSub">Compare to last month</span>
       </div>
   </div>
  );
}

export default Features;
