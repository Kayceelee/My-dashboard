import React from 'react';
import './home.css';
import Features from '../FeaturesInfo/Features';
import Chart from '../Chart/Chart';
import {userData} from "../DummyData";
import Widgetlg from '../WidgetLarge/Widgetlg';
import Widgetsm from '../WidgetSmall/Widgetsm';



const Home = () => {
  return (
    <div className="home">
        <Features/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homewidgets"> 
         <Widgetsm/>
         <Widgetlg/>
        </div>
        </div>
  )
}

export default Home
