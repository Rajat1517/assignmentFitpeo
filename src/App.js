import React, { useState } from 'react'
import './App.css';
import Bars from "./Components/Bars"
import Nut from "./Components/Nut"
import img1 from "./assets/images/earnings.png"
import img2 from "./assets/images/orders.png"
import img3 from "./assets/images/balance.png"
import img4 from "./assets/images/sales.png"
import Cards from "./Components/Cards";
import SideBar from './Components/SideBar';
import Navbar from './Components/Navbar';
import Lowerbox from './Components/Lowerbox';
import Navbarover from "./Components/Navbarover";

export default function App() {

  const [mobile,setMobile]= useState('none');

  return (
    <div className='App'>
      <div id="else-visible" className='row'>
        <div className='col-lg-2 -2 sidebar'> 
          <SideBar></SideBar>
        </div>
        <div className='col-lg-10 -2 chartbar'>
          <Navbar mobile={mobile} setMobile={setMobile}></Navbar>
          <div className='' id='visible-mobile' style={{display: `${mobile}`}}>
        <Navbarover></Navbarover>
      </div>
          <div className='row'>
            <div className='col-lg-3 -3 cards'>
              <Cards src={img1} heading={"Earnings"} largeText={"$198k"} tail={"37.8% this month"}></Cards>
            </div>
            <div className='col-lg-3 -3 cards'>
              <Cards src={img2} heading={"Orders"} largeText={"$2.4k"} tail={"2% this month"}></Cards>
            </div>
            <div className='col-lg-3 -3 cards'>
              <Cards src={img3} heading={"Balance"} largeText={"$2.4k"} tail={"2% this month"}></Cards>
            </div>
            <div className='col-lg-3 -3 cards'>
              <Cards src={img4} heading={"Total Sale"} largeText={"$89k"} tail={"11% this month"}></Cards>
            </div>
          </div>
          <div className='row chart-container'>
            <div className='col-lg-8 -8'>
              <Bars />
            </div>
            <div className='col-lg-4 -4'>
              <Nut />
            </div>
          </div>
          <Lowerbox></Lowerbox>
        </div>
      </div>
    </div>
  )
}