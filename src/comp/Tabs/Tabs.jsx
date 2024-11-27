import React, { useState } from 'react';
import "./Style.css";

const Tabs = ({tabsContent,onChange}) => {


   function handleOnClick(getCurrentIndex){
    setCurrentTab(getCurrentIndex);
    onChange(getCurrentIndex);
   }


    const [currentTab,setCurrentTab]=useState(0);
  return (
    <div className='wrapper'>
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTab === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
    <center>  <div className="content" style={{color:"red" , fontSize:"50px"}}>
        {
            tabsContent[currentTab] && tabsContent[currentTab].content
        }
      </div></center>
      </div>
      


  )
}

export default Tabs
