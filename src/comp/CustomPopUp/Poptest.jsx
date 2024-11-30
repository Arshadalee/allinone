import React, { useState } from 'react';
import PopUp from './PopUp';
import  "./Style.css";

const Poptest = () => {

    const [popup,setPopup]=useState(false);

    function handlepop(){
       setPopup(!popup);
    }
    function onClose(){
      setPopup(false);
    }

  return (
   <center>
     <div>
    
    <button onClick={handlepop}>pop up</button>
    {
        popup && <PopUp
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
    }


</div>
   </center>
  )
}

export default Poptest
